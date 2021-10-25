const request = require('supertest');
const app = require('../app.js');

test('GET /', async() => {
    const response = await request(app).get('/getData');
    expect(response.status).toBe(500);
});

test('POST /', async() => {
    const response = await request(app).post('/login');
    expect(response.status).toBe(200);
});