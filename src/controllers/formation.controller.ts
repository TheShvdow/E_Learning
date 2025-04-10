import { Request, Response } from 'express';
import { formationService } from '../services/formation.service';

export class FormationController {
  static async getAll(req: Request, res: Response) {
    const formations = await formationService.getAll();
    res.json(formations);
  }

  static async getById(req: Request, res: Response) {
    const formation = await formationService.getById(Number(req.params.id));
    if (!formation) return res.status(404).json({ message: 'Formation introuvable' });
    res.json(formation);
  }

  static async create(req: Request, res: Response) {
    try { 
      const existingFormation = await formationService.findByName(req.body.nomFormation);
      if (existingFormation) {
        return res.status(400).json({ message: 'Cette formation existe déjà' });
      }
      const formation = await formationService.create(req.body);
      res.status(201).json({
        message: 'Formation créée avec succès',
        formation,
      });
    }
    catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Erreur lors de la création de la formation' });
    }
  }

  static async update(req: Request, res: Response) {
    try {
      const formation = await formationService.update(Number(req.params.id), req.body);
      if (!formation) return res.status(404).json({ message: 'Formation introuvable' });
      res.json({
        message: 'Formation mise à jour avec succès',
        formation,
      });
    }
    catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Erreur lors de la mise à jour de la formation' });
    }
  }

  static async delete(req: Request, res: Response) {
    await formationService.delete(Number(req.params.id));
    res.status(204).json(
      { message: 'Formation supprimée ' }
    );
  }
}
