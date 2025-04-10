// Importer les dépendances nécessaires
import { securityMiddleware } from './../middlewares/security.middleware';
import { Router, Request, Response, NextFunction } from 'express';
import { UserController } from '../controllers/user.controller';
import { isAuthenticated, hasRole } from '../middlewares/auth.middleware';
import { RequestHandler } from 'express';

const router = Router();

const userController = new UserController();

type AsyncRequestHandler = (
  req: Request,
  res: Response,
  next: NextFunction
) => Promise<void | Response>;

const wrap = (handler: AsyncRequestHandler): RequestHandler => {
  return async (req, res, next) => {
    try {
      await handler(req, res, next);
    } catch (error) {
      next(error);
    }
  };
};

router.post('/register',securityMiddleware,wrap(userController.register));
router.post('/login', wrap(userController.login)); // Modifié
router.get('/me', isAuthenticated, wrap(userController.me)); // Modifié
router.post('/logout', isAuthenticated, wrap(userController.logout)); // Modifié

// Exemple avec vérification de rôle
router.get('/admin', isAuthenticated, hasRole('ADMIN'), (req, res) => {
  res.json({ message: 'Bienvenue Admin' });
});

router.get('/users', isAuthenticated, hasRole('ADMIN'), wrap(userController.getAllUsers)); // Modifié

export default router;
