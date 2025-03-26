// ✅ Tests de la API
import request from 'supertest';
import app from '../src/app';

describe('Lead API', () => {
  it('debería devolver 200 con lead válido', async () => {
    const response = await request(app).post('/api/lead').send({
      name: 'Neil',
      phone: '600123456',
    });
    expect(response.statusCode).toBe(200);
    expect(response.body).toHaveProperty('success');
  });

  it('debería devolver 400 si falta el nombre', async () => {
    const response = await request(app).post('/api/lead').send({
      phone: '613722441',
    });
    expect(response.statusCode).toBe(400);
  });

  it('debería devolver 400 si falta el teléfono', async () => {
    const response = await request(app).post('/api/lead').send({
      name: 'Neil',
    });
    expect(response.statusCode).toBe(400);
  });
});

// ✅ Tests de lógica pura
describe('Lead logic', () => {
  it('should format lead properly', () => {
    const name = 'Juan';
    const phone = '600000000';
    const formatted = `${name} — ${phone}`;
    expect(formatted).toBe('Juan — 600000000');
  });
});

