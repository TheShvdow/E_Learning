// src/repositories/commentaire.repository.ts
import prisma from '../config/prisma';


export const commentaireRepository = {
  findByTutorialId: async (tutorialId: number) => {
    return prisma.commentaire.findMany({
      where: { tutorialId },
    include: {
      user: true,
      reponses: {
        include: {
          user: true,
        },
      },
    },
    orderBy: { createdAt: 'desc' },
    });
  },

  create: async (data: {
    contenu: string;
    userId: string;
    tutorialId: number;
  }) => {
    return prisma.commentaire.create({ data });
  },

  
};
