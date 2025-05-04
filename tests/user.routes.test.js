const request = require('supertest');
const express = require('express');
const router = require('../controllers/user.controller'); 

// Mock the userService used in the router
jest.mock('../services/user.service');

const userService = require('../services/user.service');

const app = express();
app.use(express.json());
app.use('/', router);

describe('POST /orderticket', () => {
    it('should return 200 and result if service returns success', async () => {
      const mockResult = {
        ticketId: 'abc123',
        email: 'test@example.com'
      };
      userService.orderTicket.mockResolvedValue(mockResult);
  
      const response = await request(app)
        .post('/orderticket')
        .send({
          email: 'test@example.com',
          name: 'John',
          phone: '1234567890',
          amount: 2,
          showId: 'show123'
        });
  
      expect(response.status).toBe(200);
      expect(response.body).toEqual(mockResult);
    });
  
    it('should return error status and message from service', async () => {
      const mockResult = {
        statusCode: 400,
        message: 'Invalid ticket data'
      };
      userService.orderTicket.mockResolvedValue(mockResult);
  
      const response = await request(app)
        .post('/orderticket')
        .send({
          email: 'test@example.com',
          name: 'John',
          phone: '1234567890',
          amount: 2,
          showId: 'show123'
        });
  
      expect(response.status).toBe(400);
      expect(response.text).toBe('Invalid ticket data');
    });
  });

  describe('POST /login/manager', () => {
    it('should login successfully and return token + id', async () => {
      userService.connectUser.mockResolvedValue({
        statusCode: 200,
        id: 'manager123',
        token: 'token456'
      });
  
      const response = await request(app)
        .post('/login/manager')
        .send({ email: 'test@manager.com', password: '123456' });
  
      expect(response.status).toBe(200);
      expect(response.headers['auth-token']).toBe('token456');
      expect(response.body).toEqual({ token: 'token456', id: 'manager123' });
    });
  
    it('should fail login with wrong password', async () => {
      userService.connectUser.mockResolvedValue({
        statusCode: 401,
        message: 'Invalid credentials'
      });
  
      const response = await request(app)
        .post('/login/manager')
        .send({ email: 'test@manager.com', password: 'wrongpass' });
  
      expect(response.status).toBe(401);
      expect(response.body).toEqual({ message: 'Invalid credentials' });
    });
  
    it('should return 400 on exception', async () => {
      userService.connectUser.mockRejectedValue(new Error('DB error'));
  
      const response = await request(app)
        .post('/login/manager')
        .send({ email: 'test@manager.com', password: 'error' });
  
      expect(response.status).toBe(400);
      expect(response.body.message).toMatch(/an error occurred while logging in/i);
    });
  });


  test('GET /shows - success', async () => {
    userService.getAllShows.mockResolvedValue({
      shows: [{ id: 'show123', name: 'Test Show' }],
      statusCode: undefined,
    });

    const response = await request(app).get('/shows');

    expect(response.status).toBe(200);
    expect(response.body.shows).toHaveLength(1);
    expect(response.body.shows[0].name).toBe('Test Show');
  });