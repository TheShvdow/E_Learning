"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getStats = void 0;
const prisma_1 = __importDefault(require("../config/prisma"));
const getStats = async (_req, res) => {
    try {
        const [users, formations, tutorials, cours, formateurs, apprenants, demandesFormateur] = await Promise.all([
            prisma_1.default.user.count(),
            prisma_1.default.formation.count(),
            prisma_1.default.tutorial.count(),
            prisma_1.default.cours.count(),
            prisma_1.default.user.count({ where: { role: 'FORMATEUR' } }),
            prisma_1.default.user.count({ where: { role: 'APPRENANT' } }),
            prisma_1.default.user.count({ where: { demandeRoleFormateur: true, etatDemande: 'EN_ATTENTE' } }),
        ]);
        res.json({
            users,
            formations,
            tutorials,
            cours,
            formateurs,
            apprenants,
            demandesFormateur
        });
    }
    catch (error) {
        console.error('❌ Erreur stats globales :', error);
        res.status(500).json({ message: 'Erreur récupération des statistiques' });
    }
};
exports.getStats = getStats;
