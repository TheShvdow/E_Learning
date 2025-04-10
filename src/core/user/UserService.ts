import bcrypt from 'bcrypt';
import { IUser } from '../../domain/user/IUser';
import { IUserRepository } from '../../domain/user/UserRepositoryInterface';
import { Role } from '../../../prisma/generated/postgres'; // adapte le chemin selon ton projet


export const UserService = (userRepo: IUserRepository) => ({
  async register(data: Omit<IUser, 'id'>) {
    const hashedPassword = await bcrypt.hash(data.password, 10);
    return userRepo.create({ 
      ...data, 
      password: hashedPassword,
      role: data.role as Role,
     });
  },

  async login(password: string, email?: string, username?: string) {
    const user = await userRepo.findByEmail(email || '') || await userRepo.findByUsername(username || '');
    if (!user) return null;
    const match = await bcrypt.compare(password, user.password);
    return match ? user : null;
  },

  async updatePasswordWithCheck(id: string, currentPassword: string, newPassword: string) {
    const user = await userRepo.findById(id);
    if (!user) return false;

    const match = await bcrypt.compare(currentPassword, user.password);
    if (!match) return false;

    const hashed = await bcrypt.hash(newPassword, 10);
    await userRepo.updatePassword(id, hashed);
    return true;
  },

  async getAllUsers() {
    return userRepo.findAll();
  },
});
