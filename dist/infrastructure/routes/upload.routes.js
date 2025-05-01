"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const multer_1 = __importDefault(require("../../config/multer"));
const router = (0, express_1.Router)();
router.post('/upload', multer_1.default.single('file'), (req, res) => {
    const file = req.file;
    if (!file) {
        res.status(400).json({ message: 'Aucun fichier envoyé' });
        return;
    }
    res.status(200).json({
        url: file.path,
        public_id: file.filename,
        mimetype: file.mimetype,
    });
});
exports.default = router;
