import prisma from '../../config/prisma';
import { IUserRepository } from '../../domain/user/UserRepositoryInterface';
import { Prisma,Role } from '../../../prisma/generated/postgres';


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
  },
  findPaginated: async (page, limit, search) => {
    const mode: Prisma.QueryMode = 'insensitive';

    const whereClause = search
      ? {
          OR: [
            { nom: { contains: search, mode } },
            { prenom: { contains: search, mode } },
            { email: { contains: search, mode } },
          ],
        }
      : {};

    const [users, total] = await Promise.all([
      prisma.user.findMany({
        where: whereClause,
        skip: (page - 1) * limit,
        take: limit,
      }),
      prisma.user.count({ where: whereClause }),
    ]);

    return { users, total };
  },

  findDemandesFormateur: async () => {
    return prisma.user.findMany({
      where: { demandeRoleFormateur: true, role: 'APPRENANT' },
    });
  },

  validerFormateur: async (id) => {
    return prisma.user.update({
      where: { id },
      data: { role: 'FORMATEUR', demandeRoleFormateur: false, etatDemande: 'ACCEPTEE' },
    });
  },
  refuserFormateur: async (id) => {
    return prisma.user.update({
      where: { id },
      data: { demandeRoleFormateur: false, etatDemande: 'REFUSEE' },
    });
  },
  findDemandesFormateurPaginated: async (page, limit, search) => {
    const mode: Prisma.QueryMode = 'insensitive';
  
    const where: Prisma.UserWhereInput = {
      demandeRoleFormateur: true,
      role: Role.APPRENANT, // ✅ ici on utilise l'enum correctement
      ...(search && {
        OR: [
          { nom: { contains: search, mode } },
          { prenom: { contains: search, mode } },
          { email: { contains: search, mode } },
        ]
      })
    };
  
    const [users, total] = await Promise.all([
      prisma.user.findMany({
        where,
        skip: (page - 1) * limit,
        take: limit,
      }),
      prisma.user.count({ where }),
    ]);
  
    return { users, total };
  }
  
  
  
  

};
