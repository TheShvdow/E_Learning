"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PrismaUserRepository = void 0;
const prisma_1 = __importDefault(require("../../config/prisma"));
const postgres_1 = require("../../../prisma/generated/postgres");
exports.PrismaUserRepository = {
    create: async (data) => {
        return await prisma_1.default.user.create({ data });
    },
    findByEmail: async (email) => {
        return prisma_1.default.user.findUnique({ where: { email } });
    },
    findByUsername: async (username) => {
        return prisma_1.default.user.findUnique({ where: { username } });
    },
    findById: async (id) => {
        return prisma_1.default.user.findUnique({ where: { id } });
    },
    //findAll with relations for each user
    findAll: async () => {
        return prisma_1.default.user.findMany({
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
    update: async (id, data) => {
        return prisma_1.default.user.update({
            where: { id },
            data,
        });
    },
    delete: async (id) => {
        await prisma_1.default.user.delete({ where: { id } });
    },
    updatePassword: async (id, hashedPassword) => {
        await prisma_1.default.user.update({
            where: { id },
            data: { password: hashedPassword },
        });
    },
    findByIdWithRelations: async (id) => {
        return prisma_1.default.user.findUnique({
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
        const mode = 'insensitive';
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
            prisma_1.default.user.findMany({
                where: whereClause,
                skip: (page - 1) * limit,
                take: limit,
            }),
            prisma_1.default.user.count({ where: whereClause }),
        ]);
        return { users, total };
    },
    findDemandesFormateur: async () => {
        return prisma_1.default.user.findMany({
            where: { demandeRoleFormateur: true, role: 'APPRENANT' },
        });
    },
    validerFormateur: async (id) => {
        return prisma_1.default.user.update({
            where: { id },
            data: { role: 'FORMATEUR', demandeRoleFormateur: false, etatDemande: 'ACCEPTEE' },
        });
    },
    refuserFormateur: async (id) => {
        return prisma_1.default.user.update({
            where: { id },
            data: { demandeRoleFormateur: false, etatDemande: 'REFUSEE' },
        });
    },
    findDemandesFormateurPaginated: async (page, limit, search) => {
        const mode = 'insensitive';
        const where = {
            demandeRoleFormateur: true,
            role: postgres_1.Role.APPRENANT, // ✅ ici on utilise l'enum correctement
            ...(search && {
                OR: [
                    { nom: { contains: search, mode } },
                    { prenom: { contains: search, mode } },
                    { email: { contains: search, mode } },
                ]
            })
        };
        const [users, total] = await Promise.all([
            prisma_1.default.user.findMany({
                where,
                skip: (page - 1) * limit,
                take: limit,
            }),
            prisma_1.default.user.count({ where }),
        ]);
        return { users, total };
    }
};
