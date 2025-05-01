"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const multer_1 = __importDefault(require("../config/multer"));
const tutorial_controller_1 = require("../controllers/tutorial.controller");
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
router.get('/', wrap(tutorial_controller_1.TutorialController.getAll));
router.get('/formateur', auth_middleware_1.isAuthenticated, (0, auth_middleware_1.hasRole)('FORMATEUR'), wrap(tutorial_controller_1.TutorialController.getByFormateur));
router.get('/formation/:formationId', wrap(tutorial_controller_1.TutorialController.getByFormationId));
router.get('/:id', wrap(tutorial_controller_1.TutorialController.getById));
// 🔐 Réservé au formateur
router.post('/create', multer_1.default.single("photo"), // 🔥 Doit matcher le nom utilisé dans `formData.append`
auth_middleware_1.isAuthenticated, (0, auth_middleware_1.hasRole)('FORMATEUR'), wrap(tutorial_controller_1.TutorialController.create));
router.put('/update/:id', auth_middleware_1.isAuthenticated, (0, auth_middleware_1.hasRole)('FORMATEUR'), wrap(tutorial_controller_1.TutorialController.update));
router.delete('/delete/:id', auth_middleware_1.isAuthenticated, (0, auth_middleware_1.hasRole)('FORMATEUR'), wrap(tutorial_controller_1.TutorialController.delete));
exports.default = router;
