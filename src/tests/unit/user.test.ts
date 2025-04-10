// import { describe, it, expect } from '@jest/globals';


// describe('User Tests', () => {
//     it('should create a user successfully', () => {
//         const user = { nom: 'John' , prenom: 'Doe', email: 'john@example.com' ,usename :'john_doe', password: 'password123' };
//         expect(user.nom).toBe('John');
//         expect(user.prenom).toBe('Doe');
//         expect(user.email).toBe('john@example.com');
//         expect(user.usename).toBe('john_doe');
//         expect(user.password).toBe('password123');
//     });

//     it('should fail to create a user without an email', () => {
//         const user = { nom: 'John', prenom: 'Doe', usename :'john_doe', password: 'password123' };
//         expect(user.nom).toBe('John');
//         expect(user.prenom).toBe('Doe');
//         expect(user.usename).toBe('john_doe');
//         expect(user.password).toBe('password123');
//     });
//     it('should fail to create a user with an invalid email', () => {
//         const user = { nom: 'John',prenom : 'Doe' , email: 'invalid-email', usename :'john_doe', password: 'password123' };
//         expect(user.nom).toBe('John');
//         expect(user.prenom).toBe('Doe');
//         expect(user.usename).toBe('john_doe');
//         expect(user.password).toBe('password123');
//         expect(user.email).not.toMatch(/^[^\s@]+@[^\s@]+\.[^\s@]+$/);
//     });
//     it('should update a user successfully', () => {
//         const user = { nom: 'John', prenom:'Dae', usename :'johnny_doe', email: 'john@example.com' };
//         expect(user.nom).toBe('John');
//         expect(user.prenom).toBe('Dae');
//         expect(user.usename).toBe('johnny_doe');
//         expect(user.email).toBe('john@example.com');
//     });
// });

import { UserController } from '../../controllers/user.controller';
import { userService } from '../../services/user.service';
import { Request, Response } from 'express';
import { userSchema } from '../../validators/user.validator';

// Mock du userService
jest.mock('../../src/services/user.service');

describe('UserController', () => {
  const controller = new UserController();

  const mockRequest = (body = {}) => {
    return {
      body
    } as Request;
  };

  const mockResponse = () => {
    const res = {} as Response;
    res.status = jest.fn().mockReturnValue(res);
    res.json = jest.fn().mockReturnValue(res);
    return res;
  };

  describe('register', () => {
    it('should register user and return 201', async () => {
      const req = mockRequest({
        nom: 'John',
        prenom: 'Doe',
        email: 'john@example.com',
        username: 'john_doe',
        password: 'password123'
      });
      const res = mockResponse();

      // Mock register service
      const fakeUser = { id: 1, ...req.body };
      (userService.register as jest.Mock).mockResolvedValue(fakeUser);

      await controller.register(req, res);

      expect(userService.register).toHaveBeenCalledWith(req.body);
      expect(res.status).toHaveBeenCalledWith(201);
      expect(res.json).toHaveBeenCalledWith(fakeUser);
    });

    it('should return 400 if validation fails', async () => {
      const req = mockRequest({}); // vide donc invalide
      const res = mockResponse();

      await controller.register(req, res);

      expect(res.status).toHaveBeenCalledWith(400);
      expect(res.json).toHaveBeenCalled();
    });
  });
});
