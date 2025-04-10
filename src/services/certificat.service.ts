import { certificatRepository } from '../repositories/certificat.repository';
import { generateCertificatPDF } from '../utils/pdfGenerator';

export const certificatService = {
  getAllForUser: (userId: string) => certificatRepository.getAllUserCertificats(userId),
  getById: (id: number) => certificatRepository.getById(id),
  generateAndSave: async ({ titre, nom, prenom, userId }: any) => {
    const date = new Date().toLocaleDateString();
    const pdfPath = generateCertificatPDF({ nom, prenom, titre, date });

    const saved = await certificatRepository.create({
      titre,
      apprenantId: userId,
      tutorialId: 0, // à remplacer par vrai ID
      dateObtention: new Date(),
    });

    return { ...saved, file: pdfPath };
  },
};
