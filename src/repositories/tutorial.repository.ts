// 📁 src/repositories/tutorial.repository.ts
import { idText } from 'typescript';
import prisma from '../config/prisma';

export const tutorialRepository = {
  // Get all tutorials with cours
  getAll: async () => prisma.tutorial.findMany(),
  getById: async (id: number, userId: string) => {
    return prisma.tutorial.findUnique({
      where: { id },
      include: {
        cours: {
          include: {
            coursProgresses: {
              where: { userId },
              select: { id: true }, // ou d'autres champs si besoin
            },
          },
        },
      },
    });
  },
  
  getByFormationId: async (formationId: number) => {
    return prisma.tutorial.findMany({ where: { formationId } });
  },
  create: async (data: any) => prisma.tutorial.create({ data }),
  update: async (id: number, data: any) => prisma.tutorial.update({ where: { id }, data }),
  delete: async (id: number) => prisma.tutorial.delete({ where: { id } }),
  findById : async (id: number) => prisma.tutorial.findUnique({ 
    where: { id }, 
    include: {
      cours: true, // 👈 Ajout des cours liés au tutoriel
    },
  }), 
  getByUserId: async (userId: string) => {
    return prisma.tutorial.findMany({
      where: { userId: userId },
    });
  }
  
};
