const express = require('express')
const path = require('path')
const app = express()

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))

app.get('/', (req, res)=>{
    res.render('index')
})

app.use(express.static(path.join(__dirname, 'public')))

app.listen(3000, ()=>{
    console.log('Aplicación ejecutándose')
})