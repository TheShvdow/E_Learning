"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.coursRepository = void 0;
const prisma_1 = __importDefault(require("../config/prisma"));
exports.coursRepository = {
    getAll: async () => prisma_1.default.cours.findMany({
        include: {
            ressources: true,
        },
    }),
    getById: async (id) => prisma_1.default.cours.findUnique({
        where: { id },
        include: {
            ressources: true,
        },
    }),
    create: async (data) => prisma_1.default.cours.create({
        data: {
            titreCours: data.titreCours,
            content: data.content,
            tutorialId: data.tutorialId,
            videosUrl: data.videosUrl,
            ressources: {
                create: data.ressources || [],
            },
        },
        include: {
            ressources: true,
        },
    }),
    update: async (id, data) => prisma_1.default.cours.update({
        where: { id },
        data: {
            titreCours: data.titreCours,
            content: data.content,
            ...(data.videosUrl && { videosUrl: data.videosUrl }),
            ...(data.ressources && { ressources: data.ressources }), // utiliser `create` pour ajouter une nouvelle ressource
        },
        include: {
            ressources: true,
        },
    }),
    delete: async (id) => prisma_1.default.cours.delete({ where: { id } }),
};
