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

  //findAll with relations for each user
  findAll: async () => {
    return prisma.user.findMany({
      include: {
        certificats: {
          include: {
            tutorial: {
              include: {
                formation: true,
              },
            },
          },
        },
        enrollments: {
          include: {
            tutorial: {
              include: {
                formation: true,
              },
            },
          },
        },
        coursProgresses: {
          include: {
            cours: {
              include: {
                tutorial: {
                  include: {
                    formation: true,
                  },
                },
              },
            },
          },
        },
      },
    });
  },



  update: async (id: string, data: Prisma.UserUpdateInput) => {
    return prisma.user.update({
      where: { id },
      data,
    });
  },

  delete: async (id : string) => {
    await prisma.user.delete({ where: { id } });
  },

  updatePassword: async (id : string, hashedPassword: string) => {
    await prisma.user.update({
      where: { id },
      data: { password: hashedPassword },
    });
  },

  findByIdWithRelations: async (id: string) => {
    return prisma.user.findUnique({
      where: { id },
      include: {
        certificats: {
          include: {
            tutorial: {
              include: {
                formation: true
              }
            }
          }
        },
        enrollments: {
          include: {
            tutorial: {
              include: {
                formation: true
              }
            }
          }
        },
        coursProgresses: {
          include: {
            cours: {
              include: {
                tutorial: {
                  include: { formation: true }
                }
              }
            }
          }
        }
      }
    });
  }

};
