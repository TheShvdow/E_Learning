import prisma from '../config/prisma';

export const coursRepository = {
  getAll: async () =>
    prisma.cours.findMany({
      include: {
        ressources: true,
      },
    }),

  getById: async (id: number) =>
    prisma.cours.findUnique({
      where: { id },
      include: {
        ressources: true,
      },
    }),

  create: async (data: any) =>
    prisma.cours.create({
      data: {
        titreCours: data.titreCours,
        content: data.content,
        tutorialId: data.tutorialId,
        videosUrl: data.videosUrl,
        ressources: {
          create: data.ressources || [],
        },
      },
      include: {
        ressources: true,
      },
    }),

  update: async (id: number, data: any) =>
    prisma.cours.update({
      where: { id },
      data: {
        titreCours: data.titreCours,
        content: data.content,
        ...(data.videosUrl && { videosUrl: data.videosUrl }),
        ...(data.ressources && { ressources: data.ressources }), // utiliser `create` pour ajouter une nouvelle ressource
      },
      include: {
        ressources: true,
      },
    }),

  delete: async (id: number) => prisma.cours.delete({ where: { id } }),
};
