const request = require('supertest')
const app = require('../src/app')

test('Should signup a new user ', async () => {
    await request(app).post('/users').send({
        name: 'Quantum',
        email: 'que@example.com',
        password: '12345Abcde!'
    }).expect(201)
})