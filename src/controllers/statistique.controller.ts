// src/controllers/stats.controller.ts
import { Request, Response } from 'express';
import prisma from '../config/prisma';

export const getStats = async (_req: Request, res: Response) => {
    try {
        const [
        users,
          formations,
          tutorials,
          cours,
          formateurs,
          apprenants,
          demandesFormateur
        ] = await Promise.all([
          prisma.user.count(),
          prisma.formation.count(),
          prisma.tutorial.count(),
          prisma.cours.count(),
          prisma.user.count({ where: { role: 'FORMATEUR' } }),
          prisma.user.count({ where: { role: 'APPRENANT' } }),
          prisma.user.count({ where: { demandeRoleFormateur: true, etatDemande: 'EN_ATTENTE' } }),
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
      } catch (error) {
        console.error('❌ Erreur stats globales :', error);
        res.status(500).json({ message: 'Erreur récupération des statistiques' });
      }
};
