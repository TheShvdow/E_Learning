// 📁 src/types/certificat.interface.ts
export interface ICertificat {
    id: number;
    titre: string;
    NumeroCertificat: string;
    apprenantId: string;
    tutorialId: number;
    dateObtention?: Date;
  }