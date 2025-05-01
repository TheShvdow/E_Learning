"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TutorialController = void 0;
const tutorial_service_1 = require("../services/tutorial.service");
class TutorialController {
    static async getAll(req, res) {
        const tutorials = await tutorial_service_1.tutorialService.getAll();
        res.json(tutorials);
    }
    static async getById(req, res) {
        const tutorialId = Number(req.params.id);
        const userId = req.session.user?.id;
        if (!userId)
            return res.status(401).json({ message: 'Non authentifié' });
        const tutorial = await tutorial_service_1.tutorialService.getById(tutorialId, userId);
        if (!tutorial)
            return res.status(404).json({ message: 'Tutoriel introuvable' });
        res.json(tutorial);
    }
    // 📁 controllers/TutorialController.ts
    static async create(req, res) {
        try {
            const { titreTuto, descriptionTuto } = req.body;
            const photo = req.file?.path; // Récupère le lien de l'image Cloudinary
            const formationId = parseInt(req.body.formationId);
            if (!photo || !titreTuto || !descriptionTuto) {
                return res.status(400).json({ message: "Champs requis manquants" });
            }
            const tutorial = await tutorial_service_1.tutorialService.create({
                titreTuto,
                descriptionTuto,
                photo,
                userId: req.session.user?.id, // si tu as le formateur en session ou token
                formationId
            });
            res.status(201).json(tutorial);
        }
        catch (error) {
            console.error("Erreur lors de la création du tutoriel :", error);
            res.status(500).json({ message: "Erreur serveur" });
        }
    }
    static async update(req, res) {
        const tutorial = await tutorial_service_1.tutorialService.update(Number(req.params.id), req.body);
        res.json(tutorial);
    }
    static async delete(req, res) {
        await tutorial_service_1.tutorialService.delete(Number(req.params.id));
        res.status(204).send();
    }
    static async getByFormationId(req, res) {
        const formationId = parseInt(req.params.formationId, 10);
        const tutorials = await tutorial_service_1.tutorialService.getByFormationId(formationId);
        res.json(tutorials);
    }
    static async getByFormateur(req, res) {
        const userId = req.session.user?.id;
        if (!userId)
            return res.status(401).json({ message: 'Non authentifié' });
        const tutorials = await tutorial_service_1.tutorialService.getByUserId(userId);
        res.json(tutorials);
    }
}
exports.TutorialController = TutorialController;
