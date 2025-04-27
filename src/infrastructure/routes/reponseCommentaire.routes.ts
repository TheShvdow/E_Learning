import { Router, Request, Response, NextFunction } from 'express';
import { ReponseCommentaireController } from '../../controllers/reponseCommentaire.controller';
import { isAuthenticated } from '../../middlewares/auth.middleware';

const router = Router();

type AsyncHandler = (req: Request, res: Response, next: NextFunction) => Promise<any>;

const wrap = (fn: AsyncHandler) => {
  return (req: Request, res: Response, next: NextFunction) => {
    fn(req, res, next).catch(next);
  };
};


router.post('/', isAuthenticated, wrap(ReponseCommentaireController.create));
router.get('/:commentaireId', wrap(ReponseCommentaireController.getByCommentaire));

export default router;
