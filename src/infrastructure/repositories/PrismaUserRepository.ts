import prisma from '../../config/prisma';
import { IUserRepository } from '../../domain/user/UserRepositoryInterface';
import { Prisma } from '../../../prisma/generated/postgres';

export const PrismaUserRepository: IUserRepository = {
  create: async (data: Prisma.UserCreateInput) => {
    return await prisma.user.create({ data });
  },

  findByEmail: async (email) => {
    return prisma.user.findUnique({ where: { email } });
  },

  findByUsername: async (username) => {
    return prisma.user.findUnique({ where: { username } });
  },

  findById: async (id) => {
    return prisma.user.findUnique({ where: { id } });
  },

  findAll: async () => {
    return prisma.user.findMany();
  },

  update: async (id: string, data: Prisma.UserUpdateInput) => {
    return prisma.user.update({
      where: { id },
      data,
    });
  },

  delete: async (id) => {
    await prisma.user.delete({ where: { id } });
  },

  updatePassword: async (id, hashedPassword) => {
    await prisma.user.update({
      where: { id },
      data: { password: hashedPassword },
    });
  },
};
