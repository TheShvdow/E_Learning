// console.log('🚀 Starting user routes from infras ...');
import { Router, Request, Response, NextFunction } from 'express';
import { UserController } from '../web/controllers/UserController';
import { isAuthenticated, hasRole } from '../../middlewares/auth.middleware';

const router = Router();

type AsyncHandler = (req: Request, res: Response, next: NextFunction) => Promise<any>;

const wrap = (fn: AsyncHandler) => {
  return (req: Request, res: Response, next: NextFunction) => {
    fn(req, res, next).catch(next);
  };
};

router.post('/register', wrap(UserController.register));
router.post('/login', wrap(UserController.login));
router.get('/me', isAuthenticated, wrap(UserController.me));
router.post('/logout', isAuthenticated, wrap(UserController.logout));

router.get('/admin', isAuthenticated, hasRole('ADMIN'), (req, res) => {
  res.json({ message: 'Bienvenue Admin' });
});

router.get('/', isAuthenticated, hasRole('ADMIN'), wrap(UserController.getAllUsers)); // Modifié

  

export default router;
