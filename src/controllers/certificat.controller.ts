import { Request, Response } from 'express';
import { certificatService } from '../services/certificat.service';

export class CertificatController {
  static async getAll(req: Request, res: Response) {
    const {id}  = req.session.user!;
    const certificats = await certificatService.getAllForUser(id);
    res.json(certificats);
  }

  static async getById(req: Request, res: Response) {
    
    const { id } = req.params;

    const certif = await certificatService.getById(parseInt(id));

    if (!certif) return res.status(404).json({ message: 'Certificat introuvable' });
    res.json(certif);
  }

  static async generatePDF(req: Request, res: Response) {
    const user = req.session.user;
    if (!user) return res.status(401).json({ message: 'Non autorisé' });
  
    const { titre } = req.body;
    const { nom, prenom, id } = user;
  
    const certificat = await certificatService.generateAndSave({
      titre,
      nom,
      prenom,
      userId: id
    });
  
    res.status(201).json(certificat);
  }
  
}
