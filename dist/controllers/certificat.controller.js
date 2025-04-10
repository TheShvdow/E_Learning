"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CertificatController = void 0;
const certificat_service_1 = require("../services/certificat.service");
class CertificatController {
    static async getAll(req, res) {
        const { id } = req.session.user;
        const certificats = await certificat_service_1.certificatService.getAllForUser(id);
        res.json(certificats);
    }
    static async getById(req, res) {
        const { id } = req.params;
        const certif = await certificat_service_1.certificatService.getById(parseInt(id));
        if (!certif)
            return res.status(404).json({ message: 'Certificat introuvable' });
        res.json(certif);
    }
    static async generatePDF(req, res) {
        const user = req.session.user;
        if (!user)
            return res.status(401).json({ message: 'Non autorisé' });
        const { titre } = req.body;
        const { nom, prenom, id } = user;
        const certificat = await certificat_service_1.certificatService.generateAndSave({
            titre,
            nom,
            prenom,
            userId: id
        });
        res.status(201).json(certificat);
    }
}
exports.CertificatController = CertificatController;
