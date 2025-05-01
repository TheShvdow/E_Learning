"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// src/routes/statistique.routes.ts
const express_1 = require("express");
const statistique_controller_1 = require("../controllers/statistique.controller");
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
router.get("/", wrap(statistique_controller_1.getStats));
exports.default = router;
