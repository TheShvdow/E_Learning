import bcrypt from 'bcrypt';
import { IUser } from '../../domain/user/IUser';
import { IUserRepository } from '../../domain/user/UserRepositoryInterface';
import { Role } from '../../../prisma/generated/postgres'; // adapte le chemin selon ton projet
import { PrismaUserRepository } from '../../infrastructure/repositories/PrismaUserRepository';


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
  
  getFullUserById: (id: string) => {
    return PrismaUserRepository.findByIdWithRelations(id);
  },
  findPaginated: (page: number, limit: number, search?: string) =>
    userRepo.findPaginated(page, limit, search),

  getUserById: (id: string) => userRepo.findById(id),

  async updateUser(id: string, data: Partial<IUser>) {
    const updateData = {
      ...data,
      role: data.role ? (data.role.toUpperCase() as Role) : undefined,
    };
  
    return userRepo.update(id, updateData);
  },
  getDemandesFormateur: () => PrismaUserRepository.findDemandesFormateur(),
  validerFormateur: (id: string) =>
  PrismaUserRepository.update(id, { role: 'FORMATEUR', demandeRoleFormateur: false }),

  refuserFormateur: (id: string) => PrismaUserRepository.update(id, { demandeRoleFormateur: false, etatDemande: 'REFUSEE' }),
  getDemandesFormateurPaginated: (page: number, limit: number, search?: string) => 
    PrismaUserRepository.findDemandesFormateurPaginated(page, limit, search),
  
  
});
