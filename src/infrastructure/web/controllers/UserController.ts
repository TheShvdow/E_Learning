import { Request, Response } from 'express';
import { userSchema, userLoginSchema } from '../../../validators/user.validator';
import { PrismaUserRepository } from '../../repositories/PrismaUserRepository';
import { UserService } from '../../../core/user/UserService';
import { UserMapper } from '../../web/mappers/UserMapper';
import { Role } from '../../../../prisma/generated/postgres'; // Adapte le chemin si nécessaire



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
      username: user.username,
      role: user.role,
      avatar: user.avatar || '',
      bio : user.bio || ''
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

  static async getFullUser(req: Request, res: Response) {
  if (!req.session.user) return res.status(401).json({ message: 'Non authentifié' });

  const fullUser = await service.getFullUserById(req.session.user.id);
  if (!fullUser) return res.status(404).json({ message: 'Utilisateur non trouvé' });

  const dto = UserMapper.toFullDTO(fullUser);
  res.json(
    {
      message: 'Utilisateur trouvé',
      user: dto,
    },

  );
}

static async getPaginated(req: Request, res: Response) {
  const page = parseInt(req.query.page as string) || 1;
  const limit = parseInt(req.query.limit as string) || 10;
  const search = req.query.search as string;

  const { users, total } = await service.findPaginated(page, limit, search);
  res.json({
    users,
    total,
    page,
    totalPages: Math.ceil(total / limit),
  });
}

static async getById(req: Request, res: Response) {
  const id = req.params.id;
  const user = await service.getUserById(id);
  if (!user) return res.status(404).json({ message: 'Utilisateur introuvable' });
  res.json(user);
}

static async update(req: Request, res: Response) {
  const id = req.params.id;
  const data = req.body;
  const updated = await service.updateUser(id, data);
  res.json(updated);
}

static async getDemandesFormateur(req: Request, res: Response) {
  const demandes = await service.getDemandesFormateur();
  res.json(demandes);
}

static async validerFormateur(req: Request, res: Response) {
  const { id } = req.params;
  await service.validerFormateur(id);
  res.json({ message: 'Utilisateur promu au rôle de FORMATEUR' });
}

static async demanderFormateur(req: Request, res: Response) {
  const userId = req.session.user?.id;
  const { motivation, experienceProfessionnelle, portfolioUrl, cvUrl } = req.body;

  if (!userId) return res.status(401).json({ message: 'Non authentifié' });

  await PrismaUserRepository.update(userId, {
    demandeRoleFormateur: true,
    motivationFormateur: motivation,
    experienceProfessionnelle,
    portfolioUrl,
    cvUrl,
  });

  res.json({ message: 'Demande envoyée avec succès.' });
}

static async refuserFormateur(req: Request, res: Response) {
  const { id } = req.params;
  await service.refuserFormateur(id);
  res.json({ message: 'Demande refusée avec succès.' });
}

static async getDemandesFormateurPaginated(req: Request, res: Response) {
  const page = parseInt(req.query.page as string) || 1;
  const limit = parseInt(req.query.limit as string) || 10;
  const search = req.query.search as string;

  const result = await service.getDemandesFormateurPaginated(page, limit, search);
  res.json(result);
}

static async validerDemandeFormateur(req: Request, res: Response) {
  const { id } = req.params;
  await PrismaUserRepository.update(id, {
    role: Role.FORMATEUR,
    etatDemande: 'ACCEPTEE',
    demandeRoleFormateur: false,
  });
  res.json({ message: 'Demande validée. Utilisateur promu Formateur.' });
}

static async refuserDemandeFormateur(req: Request, res: Response) {
  const { id } = req.params;
  await PrismaUserRepository.update(id, {
    etatDemande: 'REFUSEE',
    demandeRoleFormateur: false,
  });
  res.json({ message: 'Demande refusée.' });
}






  
}
