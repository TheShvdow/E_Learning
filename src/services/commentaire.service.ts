// src/core/commentaire/commentaire.service.ts
import { commentaireRepository } from '../repositories/commentaire.repository';

export const CommentaireService = {
  getCommentairesByTutorial: (tutorialId: number) =>
    commentaireRepository.findByTutorialId(tutorialId),

  createCommentaire: (
    contenu: string,
    userId: string,
    tutorialId: number
  ) =>
    commentaireRepository.create({
      contenu,
      userId,
      tutorialId,
    }),
};
