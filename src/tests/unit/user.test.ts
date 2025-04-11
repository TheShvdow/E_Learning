
import { UserController } from '../../controllers/user.controller';
import { userService } from '../../services/user.service';
import { Request, Response } from 'express';
import { userSchema } from '../../validators/user.validator';

// Mock du userService
jest.mock('../../services/user.service');

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
