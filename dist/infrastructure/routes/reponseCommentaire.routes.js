"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const reponseCommentaire_controller_1 = require("../../controllers/reponseCommentaire.controller");
const auth_middleware_1 = require("../../middlewares/auth.middleware");
const router = (0, express_1.Router)();
const wrap = (fn) => {
    return (req, res, next) => {
        fn(req, res, next).catch(next);
    };
};
router.post('/', auth_middleware_1.isAuthenticated, wrap(reponseCommentaire_controller_1.ReponseCommentaireController.create));
router.get('/:commentaireId', wrap(reponseCommentaire_controller_1.ReponseCommentaireController.getByCommentaire));
exports.default = router;
