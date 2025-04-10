"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CoursController = void 0;
const cours_service_1 = require("../services/cours.service");
class CoursController {
    static async getAll(req, res) {
        const cours = await cours_service_1.coursService.getAll();
        res.json(cours);
    }
    static async getById(req, res) {
        const cours = await cours_service_1.coursService.getById(Number(req.params.id));
        if (!cours)
            return res.status(404).json({ message: 'Cours introuvable' });
        res.json(cours);
    }
    static async create(req, res) {
        const cours = await cours_service_1.coursService.create(req.body);
        res.status(201).json(cours);
    }
    static async update(req, res) {
        const cours = await cours_service_1.coursService.update(Number(req.params.id), req.body);
        res.json(cours);
    }
    static async delete(req, res) {
        await cours_service_1.coursService.delete(Number(req.params.id));
        res.status(204).send();
    }
}
exports.CoursController = CoursController;
