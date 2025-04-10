import { Request, Response } from 'express';
import { tutorialService } from '../services/tutorial.service';

export class TutorialController {
  static async getAll(req: Request, res: Response) {
    const tutorials = await tutorialService.getAll();
    res.json(tutorials);
  }

  static async getById(req: Request, res: Response) {
    const tutorial = await tutorialService.getById(Number(req.params.id));
    if (!tutorial) return res.status(404).json({ message: 'Tutorial introuvable' });
    res.json(tutorial);
  }

  static async create(req: Request, res: Response) {
    const tutorial = await tutorialService.create(req.body);
    res.status(201).json(tutorial);
  }

  static async update(req: Request, res: Response) {
    const tutorial = await tutorialService.update(Number(req.params.id), req.body);
    res.json(tutorial);
  }

  static async delete(req: Request, res: Response) {
    await tutorialService.delete(Number(req.params.id));
    res.status(204).send();
  }
}
