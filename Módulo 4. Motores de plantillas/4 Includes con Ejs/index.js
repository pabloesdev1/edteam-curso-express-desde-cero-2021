const express = require('express')
const expressLayout = require('express-ejs-layouts')
const path = require('path')
const app = express()

app.set('view engine', 'ejs')
app.set('layout', path.join(__dirname, '/views/layouts/main'))
app.set('views', path.join(__dirname, 'views'))

app.use(expressLayout)

const users = [
    {name:'User 1', age:25},
    {name:'User 2', age:26},
    {name:'User 3', age:27}
]

const title = 'Aplicación con express'

app.get('/', (req, res)=>{
    res.render('index', {users, title})
})

app.get('/admin', (req, res)=>{
    res.render('admin')
})

app.use(express.static(path.join(__dirname, 'public')))

app.listen(3000, ()=>{
    console.log('Aplicación ejecutándose')
})