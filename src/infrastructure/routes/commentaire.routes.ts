// src/routes/commentaire.routes.ts
import { Router,Request, Response, NextFunction  } from 'express';
import { CommentaireController } from '../../controllers/commentaire.controller';
import { isAuthenticated } from '../../middlewares/auth.middleware';

const router = Router();

type AsyncHandler = (req: Request, res: Response, next: NextFunction) => Promise<any>;

const wrap = (fn: AsyncHandler) => {
  return (req: Request, res: Response, next: NextFunction) => {
    fn(req, res, next).catch(next);
  };
};

router.get('/tutorial/:tutorialId', wrap(CommentaireController.getByTutorial));
router.post('/tutorial/:tutorialId', isAuthenticated, wrap(CommentaireController.create));

export default router;
