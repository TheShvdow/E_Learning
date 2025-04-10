import { Router } from 'express';
import { TutorialController } from '../controllers/tutorial.controller';
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

router.get('/', wrap(TutorialController.getAll));
router.get('/:id', wrap(TutorialController.getById));

// 🔐 Réservé au formateur
router.post('/create', isAuthenticated, hasRole('FORMATEUR'), wrap(TutorialController.create));
router.put('/update/:id', isAuthenticated, hasRole('FORMATEUR'), wrap(TutorialController.update));
router.delete('/delete/:id', isAuthenticated, hasRole('FORMATEUR'), wrap(TutorialController.delete));

export default router;
