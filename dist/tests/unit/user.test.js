"use strict";
// import { describe, it, expect } from '@jest/globals';
Object.defineProperty(exports, "__esModule", { value: true });
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
const user_controller_1 = require("../../controllers/user.controller");
const user_service_1 = require("../../services/user.service");
// Mock du userService
jest.mock('../../src/services/user.service');
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
