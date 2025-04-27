import { Router } from 'express';
import { RequestHandler, Request, Response, NextFunction } from 'express';
import upload  from '../config/multer';
import { TutorialController } from '../controllers/tutorial.controller';
import { isAuthenticated, hasRole } from '../middlewares/auth.middleware';

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
router.get('/formateur', isAuthenticated, hasRole('FORMATEUR'), wrap(TutorialController.getByFormateur));
router.get('/formation/:formationId', wrap(TutorialController.getByFormationId));
router.get('/:id', wrap(TutorialController.getById));


// 🔐 Réservé au formateur
router.post(
  '/create',
  upload.single("photo"), // 🔥 Doit matcher le nom utilisé dans `formData.append`
  isAuthenticated,
  hasRole('FORMATEUR'),
  wrap(TutorialController.create)
);

router.put('/update/:id', isAuthenticated, hasRole('FORMATEUR'), wrap(TutorialController.update));
router.delete('/delete/:id', isAuthenticated, hasRole('FORMATEUR'), wrap(TutorialController.delete));

export default router;
