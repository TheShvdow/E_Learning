// 📁 src/repositories/reponseCommentaire.repository.ts
import prisma from '../config/prisma';

export const reponseCommentaireRepository = {
  create: async (data: {
    contenu: string;
    userId: string;
    commentaireId: number;
  }) => {
    return prisma.reponseCommentaire.create({ data });
  },

  findByCommentaireId: async (commentaireId: number) => {
    return prisma.reponseCommentaire.findMany({
      where: { commentaireId },
      include: {
        user: true,
      },
      orderBy: {
        createdAt: 'asc',
      },
    });
  },
};
