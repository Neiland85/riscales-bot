import request from 'supertest';
import app from '../src/index'; 

describe('POST /api/lead', () => {
  it('should return 200 for a valid lead', async () => {
    const response = await request(app).post('/api/lead').send({
      name: 'Test User',
      phone: '600123456',
    });
    expect(response.statusCode).toBe(200);
  });
});

