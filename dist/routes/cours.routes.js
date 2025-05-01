"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const cours_controller_1 = require("../controllers/cours.controller");
const auth_middleware_1 = require("../middlewares/auth.middleware");
const multer_1 = __importDefault(require("../config/multer"));
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
router.get('/', wrap(cours_controller_1.CoursController.getAll));
router.get('/:id', wrap(cours_controller_1.CoursController.getById));
router.post('/', auth_middleware_1.isAuthenticated, (0, auth_middleware_1.hasRole)('FORMATEUR'), multer_1.default.fields([
    { name: 'video', maxCount: 1 },
    { name: 'ressource', maxCount: 1 },
]), wrap(cours_controller_1.CoursController.create));
router.put('/:id', auth_middleware_1.isAuthenticated, (0, auth_middleware_1.hasRole)('FORMATEUR'), multer_1.default.fields([
    { name: 'video', maxCount: 1 },
    { name: 'ressource', maxCount: 1 },
]), wrap(cours_controller_1.CoursController.update));
router.delete('/:id', auth_middleware_1.isAuthenticated, (0, auth_middleware_1.hasRole)('FORMATEUR'), wrap(cours_controller_1.CoursController.delete));
exports.default = router;
