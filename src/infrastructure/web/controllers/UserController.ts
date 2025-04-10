import { Request, Response } from 'express';
import { userSchema, userLoginSchema } from '../../../validators/user.validator';
import { PrismaUserRepository } from '../../repositories/PrismaUserRepository';
import { UserService } from '../../../core/user/UserService';

const service = UserService(PrismaUserRepository);

export class UserController {
  static async register(req: Request, res: Response) {
    const parsed = userSchema.safeParse(req.body);
    if (!parsed.success) return res.status(400).json(parsed.error.format());
    const user = await service.register(parsed.data);
    res.status(201).json(user);
  }

  static async login(req: Request, res: Response) {
    const parsed = userLoginSchema.safeParse(req.body);
    if (!parsed.success) return res.status(400).json(parsed.error.format());
    const { email, password, username } = parsed.data;

    const user = await service.login(
      password,
      email,
      username,);
    if (!user) return res.status(401).json({ message: 'Identifiants invalides' });

    req.session.user = {
      id: user.id,
      nom: user.nom,
      prenom: user.prenom,
      email: user.email,
      role: user.role,
      
    };

    req.session.save((err) => {
      if (err) return res.status(500).json({ message: 'Erreur session' });
      res.json({ message: 'Connecté', user: req.session.user });
    });
  }

  static async me(req: Request, res: Response) {
    if (!req.session.user) return res.status(401).json({ message: 'Non authentifié' });
    res.json(req.session.user);
  }

  static async logout(req: Request, res: Response) {
    req.session.destroy((err) => {
      if (err) return res.status(500).json({ message: 'Erreur de déconnexion' });
      res.clearCookie('connect.sid');
      res.json({ message: 'Déconnexion réussie' });
    });
  }

  static async getAllUsers(req: Request, res: Response) {
    const users = await service.getAllUsers();
    res.json(users);
  }
}
