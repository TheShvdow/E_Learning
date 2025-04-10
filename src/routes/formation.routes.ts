import { Router } from 'express';
import { FormationController } from '../controllers/formation.controller';
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

router.get('/', wrap(FormationController.getAll));
router.get('/:id', wrap(FormationController.getById));

// 🔐 Réservé à l'admin
router.post('/create', isAuthenticated, hasRole('ADMIN'), wrap(FormationController.create));
router.put('/update/:id', isAuthenticated, hasRole('ADMIN'), wrap(FormationController.update));
router.delete('/delete/:id', isAuthenticated, hasRole('ADMIN'), wrap(FormationController.delete));



export default router;
