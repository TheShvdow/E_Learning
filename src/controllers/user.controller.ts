// 📁 src/controllers/user.controller.ts
import { Request, Response } from 'express';
import { userService } from '../services/user.service';
import { userSchema , userLoginSchema } from '../validators/user.validator';
import { mailService } from '../services/mailler.service';

export class UserController {
  public async register(req: Request, res: Response) {
    // Vérifier si l'utilisateur existe déjà
    const existingUser = await userService.findByEmailOrUsername(req.body.email, req.body.username);
    if (existingUser) {
      return res.status(400).json({ message: 'un email de confirmartion vous a été envoyé veillez verifier votre boite mail' });
      //await mailService.sendConfirmationEmail(req.body.email);
    }
    const parsed = userSchema.safeParse(req.body);
    if (!parsed.success) return res.status(400).json(parsed.error);
    const user = await userService.register(parsed.data);
    res.status(201).json(user);
    // await mailService.sendWelcomeEmail(user.email , user.username);
    
  }

  public async login(req: Request, res: Response) {
    const payload = userLoginSchema.safeParse(req.body);
        const user = await userService.login(
      payload.data!.password,
      payload.data!.email,
      payload.data!.username,
     
      );
    if (!user) return res.status(401).json({ message: 'Invalid credentials' });
    
    // Définir la session avec un callback
    req.session.user = {
      id: user.id,
      nom: user.nom,
      prenom: user.prenom,
      email: user.email,
      username: user.username,
      role: user.role,
      avatar: user.avatar || '',
      bio: user.bio || '',
    }
    req.session.save((err) => {
      if (err) {
        return res.status(500).json({ message: 'Error saving session' });
      }
      res.json(user);
    });
  }

  public async me(req: Request, res: Response) {
    if (!req.session.user) return res.status(401).json({ message: 'Unauthorized' });
    res.json(req.session.user);
  }

  public async logout(req: Request, res: Response) {
    req.session.destroy((err) => {
      if (err) {
        return res.status(500).json({ message: 'Error destroying session' });
      }
      res.json({ message: 'Logout successful' });
    });
  }
  public async getAllUsers(req: Request, res: Response) {
    const users = await userService.getAllUsers();
    res.json(users);
  }
  public async changePassword(req: Request, res: Response) {
    const { currentPassword, newPassword } = req.body;
    const userId = req.session.user?.id;
  
    if (!userId || !currentPassword || !newPassword) {
      return res.status(400).json({ message: 'Champs manquants' });
    }
  
    const success = await userService.updatePasswordWithCheck(userId, currentPassword, newPassword);
  
    if (!success) {
      return res.status(401).json({ message: 'Mot de passe actuel incorrect' });
    }
  
    res.json({ message: 'Mot de passe mis à jour avec succès' });
  }
  
}