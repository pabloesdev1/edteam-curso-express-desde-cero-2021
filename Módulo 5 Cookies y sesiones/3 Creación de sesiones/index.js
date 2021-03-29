const express = require('express')
const expressSession = require('express-session')
const path = require('path')
const app = express()

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))

app.use(express.urlencoded({extended:false}))
app.use(expressSession({
    secret: 'my_secret'
}))

app.get('/', (req, res)=>{
    let profile = {
        user: req.session.user, 
        password: req.session.password
    }
    delete req.session.user
    delete req.session.password
    res.render('index', {profile})
})

app.get('/login', (req, res)=>{
    console.log(req.session)
    res.render('login')
})

app.post('/login', (req, res)=>{
    req.session.user = req.body.user
    req.session.password = req.body.password
    res.redirect('/')
})

app.listen(3000, ()=>{
    console.log('Aplicación corriendo en el puerto 3000')
})