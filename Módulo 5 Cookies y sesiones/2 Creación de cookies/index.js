const express = require('express')
const cookieParser = require('cookie-parser')
const path = require('path')
const app = express()

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))

app.use(express.urlencoded({extended:false}))
app.use(cookieParser())

app.get('/', (req, res)=>{
    let profile = {
        user: req.cookies.user, 
        password: req.cookies.password
    }
    res.render('index', {profile})
})

app.get('/login', (req, res)=>{
    res.render('login')
})

app.post('/login', (req, res)=>{
    res.cookie('user', req.body.user)
    res.cookie('password', req.body.password)
    res.redirect('/')
})

app.listen(3000, ()=>{
    console.log('Aplicación corriendo en el puerto 3000')
})