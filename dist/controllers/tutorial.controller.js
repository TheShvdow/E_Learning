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
        const tutorial = await tutorial_service_1.tutorialService.getById(Number(req.params.id));
        if (!tutorial)
            return res.status(404).json({ message: 'Tutorial introuvable' });
        res.json(tutorial);
    }
    static async create(req, res) {
        const tutorial = await tutorial_service_1.tutorialService.create(req.body);
        res.status(201).json(tutorial);
    }
    static async update(req, res) {
        const tutorial = await tutorial_service_1.tutorialService.update(Number(req.params.id), req.body);
        res.json(tutorial);
    }
    static async delete(req, res) {
        await tutorial_service_1.tutorialService.delete(Number(req.params.id));
        res.status(204).send();
    }
}
exports.TutorialController = TutorialController;
