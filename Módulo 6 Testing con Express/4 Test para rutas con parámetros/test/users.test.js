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

