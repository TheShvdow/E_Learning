"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateCertificatPDF = void 0;
// 📁 src/utils/pdfGenerator.ts
const pdfkit_1 = __importDefault(require("pdfkit"));
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const generateCertificatPDF = (data) => {
    const doc = new pdfkit_1.default();
    const filename = `certificat_${data.nom}_${Date.now()}.pdf`;
    const filePath = path_1.default.join(__dirname, '../../certificats', filename);
    doc.pipe(fs_1.default.createWriteStream(filePath));
    doc.fontSize(26).text('Certificat de Réussite', { align: 'center' });
    doc.moveDown();
    doc.fontSize(16).text(`Décerné à : ${data.nom} ${data.prenom}`);
    doc.text(`Pour avoir complété : ${data.titre}`);
    doc.text(`Le : ${data.date}`);
    doc.end();
    return filePath;
};
exports.generateCertificatPDF = generateCertificatPDF;
