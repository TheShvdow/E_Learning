
// 📁 src/utils/pdfGenerator.ts
import PDFDocument from 'pdfkit';
import fs from 'fs';
import path from 'path';

export const generateCertificatPDF = (data: {
  nom: string,
  prenom: string,
  titre: string,
  date: string
}): string => {
  const doc = new PDFDocument();
  const filename = `certificat_${data.nom}_${Date.now()}.pdf`;
  const filePath = path.join(__dirname, '../../certificats', filename);

  doc.pipe(fs.createWriteStream(filePath));
  doc.fontSize(26).text('Certificat de Réussite', { align: 'center' });
  doc.moveDown();
  doc.fontSize(16).text(`Décerné à : ${data.nom} ${data.prenom}`);
  doc.text(`Pour avoir complété : ${data.titre}`);
  doc.text(`Le : ${data.date}`);
  doc.end();

  return filePath;
};