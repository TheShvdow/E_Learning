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
router.get('/me/full', isAuthenticated, wrap(UserController.getFullUser));
router.post('/logout', isAuthenticated, wrap(UserController.logout));
router.get('/paginated', wrap(UserController.getPaginated));
router.get('/admin', isAuthenticated, hasRole('ADMIN'), (req, res) => {
  res.json({ message: 'Bienvenue Admin' });
});
router.get('/:id', isAuthenticated, hasRole('ADMIN'), wrap(UserController.getById));
router.put('/:id',isAuthenticated,hasRole('ADMIN'),wrap(UserController.update));


router.get('/', isAuthenticated, hasRole('ADMIN'), wrap(UserController.getAllUsers)); // Modifié

router.post('/demander-formateur', isAuthenticated, wrap(UserController.demanderFormateur));

router.post('/valider-formateur/:id', isAuthenticated, hasRole('ADMIN'), wrap(UserController.validerFormateur));
router.get(
  '/demandes-formateur/paginated',
  isAuthenticated,
  hasRole('ADMIN'),
  wrap(UserController.getDemandesFormateurPaginated)
);
// src/infrastructure/routes/user.routes.ts

router.post('/demandes-formateur/:id/valider', isAuthenticated, hasRole('ADMIN'), wrap(UserController.validerDemandeFormateur));
router.post('/demandes-formateur/:id/refuser', isAuthenticated, hasRole('ADMIN'), wrap(UserController.refuserDemandeFormateur));




  

export default router;
