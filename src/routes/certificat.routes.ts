import { Router } from 'express';
import { CertificatController } from '../controllers/certificat.controller';
import { isAuthenticated, hasRole } from '../middlewares/auth.middleware';
import { RequestHandler, Request, Response, NextFunction } from 'express';

const router = Router();

const wrap = (fn: Function): RequestHandler => {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      await fn(req, res, next);
    } catch (err) {
      next(err);
    }
  };
};

// Accessible aux apprenants
router.get('/', isAuthenticated, hasRole('APPRENANT'), wrap(CertificatController.getAll));
router.get('/:id', isAuthenticated, hasRole('APPRENANT'), wrap(CertificatController.getById));

// Généré après validation d’un tutoriel
router.post('/', isAuthenticated, hasRole('APPRENANT'), wrap(CertificatController.generatePDF));

export default router;
