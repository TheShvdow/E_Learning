// 📁 src/repositories/tutorial.repository.ts
import prisma from '../config/prisma';

export const tutorialRepository = {
  getAll: async () => prisma.tutorial.findMany(),
  getById: async (id: number) => prisma.tutorial.findUnique({ where: { id } }),
  create: async (data: any) => prisma.tutorial.create({ data }),
  update: async (id: number, data: any) => prisma.tutorial.update({ where: { id }, data }),
  delete: async (id: number) => prisma.tutorial.delete({ where: { id } }),
};
