"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.formationRepository = void 0;
// 📁 src/repositories/formation.repository.ts
const prisma_1 = __importDefault(require("../config/prisma"));
exports.formationRepository = {
    getAll: async () => prisma_1.default.formation.findMany(),
    getById: async (id) => prisma_1.default.formation.findUnique({ where: { id } }),
    create: async (data) => prisma_1.default.formation.create({ data }),
    update: async (id, data) => prisma_1.default.formation.update({ where: { id }, data }),
    delete: async (id) => prisma_1.default.formation.delete({
        where: { id },
        include: {
            tutorials: true, // Inclure les tutoriels associés pour la suppression
        },
    }).then(async (formation) => {
        // Supprimer les tutoriels associés
        await Promise.all(formation.tutorials.map((tutorial) => prisma_1.default.tutorial.delete({ where: { id: tutorial.id } })));
        return formation;
    }),
    findByName: async (nomFormation) => prisma_1.default.formation.findFirst({ where: {
            nomFormation: {
                equals: nomFormation,
                mode: 'insensitive' // Pour une recherche insensible à la casse
            }
        } }),
};
