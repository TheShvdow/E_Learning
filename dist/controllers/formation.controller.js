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
        const formation = await formation_service_1.formationService.create(req.body);
        res.status(201).json(formation);
    }
    static async update(req, res) {
        const formation = await formation_service_1.formationService.update(Number(req.params.id), req.body);
        res.json(formation);
    }
    static async delete(req, res) {
        await formation_service_1.formationService.delete(Number(req.params.id));
        res.status(204).send();
    }
}
exports.FormationController = FormationController;
