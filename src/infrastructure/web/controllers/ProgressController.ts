import { Request, Response } from 'express';
import { ProgressService } from '../../../core/progress/ProgressService';

export class ProgressController {
  static async enroll(req: Request, res: Response) {
    const { tutorialId } = req.body;
    const userId = req.session.user?.id;
    if (!userId || !tutorialId) return res.status(400).json({ message: 'Paramètres manquants' });

    const result = await ProgressService.enroll(userId, Number(tutorialId));
    res.status(201).json(result);
  }

  static async complete(req: Request, res: Response) {
    const { coursId } = req.body;
    const userId = req.session.user?.id;
    if (!userId || !coursId) return res.status(400).json({ message: 'Paramètres manquants' });

    const result = await ProgressService.complete(userId, Number(coursId));
    res.status(200).json(result);
  }

  static async getProgress(req: Request, res: Response) {
    const userId = req.session.user?.id;
    const tutorialId = Number(req.query.tutorialId);
    if (!userId || isNaN(tutorialId)) {
      return res.status(400).json({ message: 'Paramètres invalides' });
    }
    

    const result = await ProgressService.getProgress(userId, tutorialId);
    res.json(result);
  }

  static async checkEnrollment(req: Request, res: Response) {
    const userId = req.session.user?.id;
    const tutorialId = Number(req.params.tutorialId);
    if (!userId || !tutorialId) return res.status(400).json({ message: 'Paramètres manquants' });
  
    const enrolled = await ProgressService.isEnrolled(userId, tutorialId);
    res.json({ enrolled });
  }
  

  
  
}
