"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const formation_controller_1 = require("../controllers/formation.controller");
const auth_middleware_1 = require("../middlewares/auth.middleware");
const multer_1 = __importDefault(require("../config/multer")); // Assurez-vous que le chemin est correct
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
router.get('/', wrap(formation_controller_1.FormationController.getAll));
router.get('/:id', wrap(formation_controller_1.FormationController.getById));
// router.get('/paginated', wrap(FormationController.getPaginated));
// 🔐 Réservé à l'admin
router.post('/', auth_middleware_1.isAuthenticated, (0, auth_middleware_1.hasRole)('ADMIN'), multer_1.default.single('photo'), wrap(formation_controller_1.FormationController.create));
router.put('/:id', auth_middleware_1.isAuthenticated, (0, auth_middleware_1.hasRole)('ADMIN'), wrap(formation_controller_1.FormationController.update));
router.delete('/:id', auth_middleware_1.isAuthenticated, (0, auth_middleware_1.hasRole)('ADMIN'), wrap(formation_controller_1.FormationController.delete));
exports.default = router;
