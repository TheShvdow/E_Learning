// 📁 src/repositories/cours.repository.ts
import prisma from '../config/prisma';

export const coursRepository = {
  getAll: async () => prisma.cours.findMany(),
  getById: async (id: number) => prisma.cours.findUnique({ where: { id } }),
  create: async (data: any) => prisma.cours.create({ data }),
  update: async (id: number, data: any) => prisma.cours.update({ where: { id }, data }),
  delete: async (id: number) => prisma.cours.delete({ where: { id } }),
};
