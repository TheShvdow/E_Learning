import { Router } from 'express';
import { CoursController } from '../controllers/cours.controller';
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

router.get('/', wrap(CoursController.getAll));
router.get('/:id', wrap(CoursController.getById));

// 🔐 Réservé au formateur
router.post('/', isAuthenticated, hasRole('FORMATEUR'), wrap(CoursController.create));
router.put('/:id', isAuthenticated, hasRole('FORMATEUR'), wrap(CoursController.update));
router.delete('/:id', isAuthenticated, hasRole('FORMATEUR'), wrap(CoursController.delete));

export default router;
