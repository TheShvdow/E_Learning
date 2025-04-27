// 📁 src/controllers/reponseCommentaire.controller.ts
import { Request, Response } from 'express';
import { reponseCommentaireRepository } from '../repositories/reponseCommentaire.repository';

export class ReponseCommentaireController {
  static async create(req: Request, res: Response) {
    const userId = req.session.user?.id;
    const { contenu, commentaireId } = req.body;

    if (!userId) return res.status(401).json({ message: 'Non authentifié' });

    if (!contenu || !commentaireId)
      return res.status(400).json({ message: 'Champs requis manquants' });

    const reponse = await reponseCommentaireRepository.create({
      contenu,
      userId,
      commentaireId: Number(commentaireId),
    });

    res.status(201).json(reponse);
  }

  static async getByCommentaire(req: Request, res: Response) {
    const commentaireId = Number(req.params.commentaireId);
    if (isNaN(commentaireId)) return res.status(400).json({ message: 'ID invalide' });

    const reponses = await reponseCommentaireRepository.findByCommentaireId(commentaireId);
    res.json(reponses);
  }
}
