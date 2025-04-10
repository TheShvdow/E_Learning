import { Request, Response } from 'express';
import { coursService } from '../services/cours.service';

export class CoursController {
  static async getAll(req: Request, res: Response) {
    const cours = await coursService.getAll();
    res.json(cours);
  }

  static async getById(req: Request, res: Response) {
    const cours = await coursService.getById(Number(req.params.id));
    if (!cours) return res.status(404).json({ message: 'Cours introuvable' });
    res.json(cours);
  }

  static async create(req: Request, res: Response) {
    const cours = await coursService.create(req.body);
    res.status(201).json(cours);
  }

  static async update(req: Request, res: Response) {
    const cours = await coursService.update(Number(req.params.id), req.body);
    res.json(cours);
  }

  static async delete(req: Request, res: Response) {
    await coursService.delete(Number(req.params.id));
    res.status(204).send();
  }
}
