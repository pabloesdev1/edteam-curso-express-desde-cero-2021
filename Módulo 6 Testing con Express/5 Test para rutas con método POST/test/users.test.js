const request = require('supertest')
const app = require('../index')

describe('GET users', ()=>{
    it('debe devolver un código de estado 200', (done)=>{
        request(app)
        .get('/users')
        .expect('Content-Type', /json/)
        .expect(200, done)
    })
    
    it('debe devolver un mensaje listando usuarios', (done)=>{
        request(app)
        .get('/users')
        .expect('Content-Type', /json/)
        .expect('"Listando usuarios"', done)
    })
    
})


describe('GET user', ()=>{
    it('Debe devolver el mensaje: Se encontró el usuario', (done)=>{
        request(app)
        .get('/user/1')
        .expect('Content-Type', /json/)
        .expect('"Se encontró el usuario"')
        .expect(200)
        .end(done)
    })
    it('Debe devolver un código de estado 404', (done)=>{
        request(app)
        .get('/user/8')
        .expect('Content-Type', /json/)
        .expect(404, done)
    })
})


describe('POST user', ()=>{
    it('Debe devolver el mensaje: Usuario registrado', (done)=>{
        const user = {
            id: 4,
            name: 'User 4'
        }
        request(app)
        .post('/create-user')
        .send(user)
        .expect('Content-Type', /json/)
        .expect(200)
        .expect('"Usuario registrado"')
        .end(done)
    })
    it('Debe devolver un código de estado de 500', (done)=>{
        const user = {
            id: 1,
            name: 'User 1'
        }
        request(app)
        .post('/create-user')
        .send(user)
        .expect('Content-Type', /json/)
        .expect(500)
        .expect('"Error al registrar"')
        .end(done)
    })
})