const express = require('express')
const exphbs = require('express-handlebars')
const path = require('path')
const app = express()

app.engine('handlebars', exphbs({defaultLayout:'main'}))
app.set('view engine', 'handlebars')
app.set('views', path.join(__dirname, 'views'))


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