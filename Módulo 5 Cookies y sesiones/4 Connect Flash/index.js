const express = require('express')
const expressSession = require('express-session')
const connectFlash = require('connect-flash')
const path = require('path')
const app = express()

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))

app.use(express.urlencoded({extended:false}))
app.use(expressSession({
    secret: 'my_secret'
}))
app.use(connectFlash())

app.get('/', (req, res)=>{
    let profile = {
        user: req.flash('user')[0],
        password: req.flash('password')[0]
    }
    res.render('index', {profile})
})

app.get('/login', (req, res)=>{
    console.log(req.flash())
    res.render('login')
})

app.post('/login', (req, res)=>{
    req.flash('user', req.body.user)
    req.flash('password', req.body.password)
    res.redirect('/')
})

app.listen(3000, ()=>{
    console.log('Aplicación corriendo en el puerto 3000')
})