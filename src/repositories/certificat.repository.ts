// 📁 src/repositories/certificat.repository.ts
import prisma from '../config/prisma';

export const certificatRepository = {
  getAllUserCertificats : async (userId: string) =>
    prisma.certificat.findMany({
      where: {
        apprenantId: userId,
      },
    }),
  getById: async (id: number) =>
    prisma.certificat.findUnique({ where: { id } }),

  create: async (data: any) =>
    prisma.certificat.create({ data }),
  
};
