import { Router } from 'express';
import { FormationController } from '../controllers/formation.controller';
import { isAuthenticated, hasRole } from '../middlewares/auth.middleware';
import { RequestHandler, Request, Response, NextFunction } from 'express';
import upload from '../config/multer'; // Assurez-vous que le chemin est correct

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
// router.get('/paginated', wrap(FormationController.getPaginated));


// 🔐 Réservé à l'admin
router.post('/', isAuthenticated, hasRole('ADMIN'),upload.single('photo'), wrap(FormationController.create));
router.put('/:id', isAuthenticated, hasRole('ADMIN'), wrap(FormationController.update));
router.delete('/:id', isAuthenticated, hasRole('ADMIN'), wrap(FormationController.delete));



export default router;
