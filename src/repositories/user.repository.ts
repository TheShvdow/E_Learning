// 📁 src/repositories/user.repository.ts
import prisma from '../config/prisma';
import { IUser } from '../types/user.interface';

export const userRepository = {
  create: async (data: IUser) => {
    return await prisma.user.create({ data });
  },

  findByEmail: async (email: string) => {
    return await prisma.user.findUnique({ where: { email } });
  },

  findByUsername: async (username: string) => {
    return await prisma.user.findUnique({ where: { username } });
  },

  findById: async (id: string) => {
    return await prisma.user.findUnique({ where: { id } });
  },

  findAll: async () => {
    return await prisma.user.findMany();
  },
  update: async (id: string, data: Partial<IUser>) => {
    return await prisma.user.update({ where: { id }, data });
  },
  delete: async (id: string) => {
    return await prisma.user.delete({ where: { id } });
  },
  updatePassword: async (id: string, password: string) => {
    return await prisma.user.update({ where: { id }, data: { password } });
  },
};
