"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const certificat_controller_1 = require("../controllers/certificat.controller");
const auth_middleware_1 = require("../middlewares/auth.middleware");
const router = (0, express_1.Router)();
const wrap = (fn) => {
    return async (req, res, next) => {
        try {
            await fn(req, res, next);
        }
        catch (err) {
            next(err);
        }
    };
};
// Accessible aux apprenants
router.get('/', auth_middleware_1.isAuthenticated, (0, auth_middleware_1.hasRole)('APPRENANT'), wrap(certificat_controller_1.CertificatController.getAll));
router.get('/:id', auth_middleware_1.isAuthenticated, (0, auth_middleware_1.hasRole)('APPRENANT'), wrap(certificat_controller_1.CertificatController.getById));
// Généré après validation d’un tutoriel
router.post('/', auth_middleware_1.isAuthenticated, (0, auth_middleware_1.hasRole)('APPRENANT'), wrap(certificat_controller_1.CertificatController.generatePDF));
exports.default = router;
