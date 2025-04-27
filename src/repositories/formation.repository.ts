// 📁 src/repositories/formation.repository.ts
import prisma from '../config/prisma';

export const formationRepository = {
  getAll: async () => prisma.formation.findMany(),
  getById: async (id: number) => prisma.formation.findUnique({ where: { id } }),
  create: async (data: any) => prisma.formation.create({ data }),
  update: async (id: number, data: any) => prisma.formation.update({ where: { id }, data }),
  delete: async (id: number) => prisma.formation.delete({ 
    where: { id },
    include: {
      tutorials: true, // Inclure les tutoriels associés pour la suppression
    },
  }).then(async (formation) => {
    // Supprimer les tutoriels associés
    await Promise.all(
      formation.tutorials.map((tutorial) =>
        prisma.tutorial.delete({ where: { id: tutorial.id } })
      )
    );
    return formation;
    }),
  findByName: async (nomFormation: string) => prisma.formation.findFirst(
    { where: {
      nomFormation: {
        equals: nomFormation,
        mode: 'insensitive' // Pour une recherche insensible à la casse
      }
    } }
  ),
};
