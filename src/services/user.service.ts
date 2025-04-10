// 📁 src/services/user.service.ts
import { IUser } from '../types/user.interface';
import { userRepository } from '../repositories/user.repository';
import bcrypt from 'bcrypt';

export const userService = {
  async register(data: IUser) {
    const hashedPassword = await bcrypt.hash(data.password, 10);
    return userRepository.create({ ...data, password: hashedPassword });
  },

  async login(password: string , email?: string, username?: string )  {
    const user = await userRepository.findByEmail(email || '') || await userRepository.findByUsername(username || '');
    if (!user) return null;
    const match = await bcrypt.compare(password, user.password);
    return match ? user : null;
  },

  async me(userId: string) {
    const user = await userRepository.findByEmail(userId);
    if (!user) return null;
    return user;
  },

  async logout() {
    return { success: true };
  },
  async getAllUsers() {
    return userRepository.findAll();
  },

  async updateUser(id: string, data: Partial<IUser>) {
    return userRepository.update(id, data);
  },
  async deleteUser(id: string) {
    return userRepository.delete(id);
  },

  async updatePassword(id: string, password: string) {
    const hashedPassword = await bcrypt.hash(password, 10);
    return userRepository.updatePassword(id, hashedPassword);
  },
 
  async updatePasswordWithCheck(id: string, currentPassword: string, newPassword: string) {
    const user = await userRepository.findById(id);
    if (!user) return false;
  
    const match = await bcrypt.compare(currentPassword, user.password);
    if (!match) return false;
  
    const hashed = await bcrypt.hash(newPassword, 10);
    await userRepository.updatePassword(id, hashed);
    return true;
  },
  async findByEmailOrUsername(email: string, username: string) {
    const user = await userRepository.findByEmail(email) || await userRepository.findByUsername(username);
    return user;
  },
  
};
