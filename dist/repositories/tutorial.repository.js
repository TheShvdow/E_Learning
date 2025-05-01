"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.tutorialRepository = void 0;
const prisma_1 = __importDefault(require("../config/prisma"));
exports.tutorialRepository = {
    // Get all tutorials with cours
    getAll: async () => prisma_1.default.tutorial.findMany(),
    getById: async (id, userId) => {
        return prisma_1.default.tutorial.findUnique({
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
    getByFormationId: async (formationId) => {
        return prisma_1.default.tutorial.findMany({ where: { formationId } });
    },
    create: async (data) => prisma_1.default.tutorial.create({ data }),
    update: async (id, data) => prisma_1.default.tutorial.update({ where: { id }, data }),
    delete: async (id) => prisma_1.default.tutorial.delete({ where: { id } }),
    findById: async (id) => prisma_1.default.tutorial.findUnique({
        where: { id },
        include: {
            cours: true, // 👈 Ajout des cours liés au tutoriel
        },
    }),
    getByUserId: async (userId) => {
        return prisma_1.default.tutorial.findMany({
            where: { userId: userId },
        });
    }
};
