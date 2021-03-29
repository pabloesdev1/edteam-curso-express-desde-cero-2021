const express = require('express')
const path = require('path')
const moragn = require('morgan')
const userRoutes = require('./routes/users')
const indexRoutes = require('./routes/index')
const app = express()

// Settings
app.set('port', 3000)
app.set('title', 'Aplicación con express')

// Middlewares
app.use(express.static(path.join(__dirname, 'public')))
app.use(express.urlencoded({extended:false}))
app.use(moragn('dev'))


// Routes
app.get('/admin', (req, res)=>{
    const name = req.params.name
    res.send('Panel de administración')
})
app.post('/admin', (req, res)=>{
    var name = req.body.name
    console.log(name)
    res.send('Usuario registrado')
})

app.use(indexRoutes)
app.use(userRoutes)



app.listen(app.get('port'), ()=>{
    console.log(`${app.get('title')} corriendo en el puerto ${app.get('port')}`)
})