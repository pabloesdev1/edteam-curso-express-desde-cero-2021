const express = require('express')
const path = require('path')
const userRoutes = require('./routes/users')
const indexRoutes = require('./routes/index')
const app = express()

// Settings
app.set('port', 3000)
app.set('title', 'Aplicación con express')

// Middlewares
const erroHandling = (err, req, res, next)=>{
    res.status(500).send('Ha ocurrido un error')
}


// Routes
app.get('/admin', (req, res)=>{
    const name = req.params.name
    res.send('Panel de administración')
})
app.use(indexRoutes)
app.use(userRoutes)

app.use(erroHandling)


app.listen(app.get('port'), ()=>{
    console.log(`${app.get('title')} corriendo en el puerto ${app.get('port')}`)
})