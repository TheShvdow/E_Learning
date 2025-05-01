"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const user_controller_1 = require("../../controllers/user.controller");
const user_service_1 = require("../../services/user.service");
// Mock du userService
jest.mock('../../services/user.service');
describe('UserController', () => {
    const controller = new user_controller_1.UserController();
    const mockRequest = (body = {}) => {
        return {
            body
        };
    };
    const mockResponse = () => {
        const res = {};
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
            user_service_1.userService.register.mockResolvedValue(fakeUser);
            await controller.register(req, res);
            expect(user_service_1.userService.register).toHaveBeenCalledWith(req.body);
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
