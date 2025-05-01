"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FormationController = void 0;
const formation_service_1 = require("../services/formation.service");
class FormationController {
    static async getAll(req, res) {
        const formations = await formation_service_1.formationService.getAll();
        res.json(formations);
    }
    static async getById(req, res) {
        const formation = await formation_service_1.formationService.getById(Number(req.params.id));
        if (!formation)
            return res.status(404).json({ message: 'Formation introuvable' });
        res.json(formation);
    }
    static async create(req, res) {
        try {
            const { nomFormation, description } = req.body;
            const photoUrl = req.file?.path; // Cloudinary retourne le lien ici
            if (!nomFormation || !description || !photoUrl) {
                return res.status(400).json({ message: 'Tous les champs sont requis' });
            }
            const existingFormation = await formation_service_1.formationService.findByName(nomFormation);
            if (existingFormation) {
                return res.status(400).json({ message: 'Cette formation existe déjà' });
            }
            const formation = await formation_service_1.formationService.create({
                nomFormation,
                description,
                photo: photoUrl, // on enregistre l'URL de l'image dans la base
            });
            res.status(201).json({
                message: 'Formation créée avec succès',
                formation,
            });
        }
        catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Erreur lors de la création de la formation' });
        }
    }
    static async update(req, res) {
        try {
            const formation = await formation_service_1.formationService.update(Number(req.params.id), req.body);
            if (!formation)
                return res.status(404).json({ message: 'Formation introuvable' });
            res.json({
                message: 'Formation mise à jour avec succès',
                formation,
            });
        }
        catch (error) {
            console.error(error);
            res.status(500).json({ message: 'Erreur lors de la mise à jour de la formation' });
        }
    }
    static async delete(req, res) {
        await formation_service_1.formationService.delete(Number(req.params.id));
        res.status(204).json({ message: 'Formation supprimée ' });
    }
}
exports.FormationController = FormationController;
