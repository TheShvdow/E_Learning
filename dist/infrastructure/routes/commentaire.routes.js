"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// src/routes/commentaire.routes.ts
const express_1 = require("express");
const commentaire_controller_1 = require("../../controllers/commentaire.controller");
const auth_middleware_1 = require("../../middlewares/auth.middleware");
const router = (0, express_1.Router)();
const wrap = (fn) => {
    return (req, res, next) => {
        fn(req, res, next).catch(next);
    };
};
router.get('/tutorial/:tutorialId', wrap(commentaire_controller_1.CommentaireController.getByTutorial));
router.post('/tutorial/:tutorialId', auth_middleware_1.isAuthenticated, wrap(commentaire_controller_1.CommentaireController.create));
exports.default = router;
