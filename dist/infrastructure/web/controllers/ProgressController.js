"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProgressController = void 0;
const ProgressService_1 = require("../../../core/progress/ProgressService");
class ProgressController {
    static async enroll(req, res) {
        const { tutorialId } = req.body;
        const userId = req.session.user?.id;
        if (!userId || !tutorialId)
            return res.status(400).json({ message: 'Paramètres manquants' });
        const result = await ProgressService_1.ProgressService.enroll(userId, Number(tutorialId));
        res.status(201).json(result);
    }
    static async complete(req, res) {
        const { coursId } = req.body;
        const userId = req.session.user?.id;
        if (!userId || !coursId)
            return res.status(400).json({ message: 'Paramètres manquants' });
        const result = await ProgressService_1.ProgressService.complete(userId, Number(coursId));
        res.status(200).json(result);
    }
    static async getProgress(req, res) {
        const userId = req.session.user?.id;
        const tutorialId = Number(req.query.tutorialId);
        if (!userId || isNaN(tutorialId)) {
            return res.status(400).json({ message: 'Paramètres invalides' });
        }
        const result = await ProgressService_1.ProgressService.getProgress(userId, tutorialId);
        res.json(result);
    }
    static async checkEnrollment(req, res) {
        const userId = req.session.user?.id;
        const tutorialId = Number(req.params.tutorialId);
        if (!userId || !tutorialId)
            return res.status(400).json({ message: 'Paramètres manquants' });
        const enrolled = await ProgressService_1.ProgressService.isEnrolled(userId, tutorialId);
        res.json({ enrolled });
    }
}
exports.ProgressController = ProgressController;
