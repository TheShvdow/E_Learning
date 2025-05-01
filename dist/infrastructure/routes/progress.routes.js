"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const ProgressController_1 = require("../../infrastructure/web/controllers/ProgressController");
const auth_middleware_1 = require("../../middlewares/auth.middleware");
const router = (0, express_1.Router)();
// Wrap function to handle async errors
const wrap = (fn) => {
    return (req, res, next) => {
        fn(req, res, next).catch(next);
    };
};
// Routes for progress
router.post('/enroll', auth_middleware_1.isAuthenticated, wrap(ProgressController_1.ProgressController.enroll));
router.post('/complete', auth_middleware_1.isAuthenticated, wrap(ProgressController_1.ProgressController.complete));
router.get('/progress', auth_middleware_1.isAuthenticated, wrap(ProgressController_1.ProgressController.getProgress));
router.get('/enrolled/:tutorialId', auth_middleware_1.isAuthenticated, wrap(ProgressController_1.ProgressController.checkEnrollment));
exports.default = router;
