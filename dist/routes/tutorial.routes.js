"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
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
router.get('/:id', wrap(tutorial_controller_1.TutorialController.getById));
// 🔐 Réservé au formateur
router.post('/', auth_middleware_1.isAuthenticated, (0, auth_middleware_1.hasRole)('FORMATEUR'), wrap(tutorial_controller_1.TutorialController.create));
router.put('/:id', auth_middleware_1.isAuthenticated, (0, auth_middleware_1.hasRole)('FORMATEUR'), wrap(tutorial_controller_1.TutorialController.update));
router.delete('/:id', auth_middleware_1.isAuthenticated, (0, auth_middleware_1.hasRole)('FORMATEUR'), wrap(tutorial_controller_1.TutorialController.delete));
exports.default = router;
