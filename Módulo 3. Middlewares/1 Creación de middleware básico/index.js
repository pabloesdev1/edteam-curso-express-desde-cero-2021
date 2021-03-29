const express = require('express')
const path = require('path')
const userRoutes = require('./routes/users')
const app = express()

// Settings
app.set('port', 3000)
app.set('title', 'Aplicación con express')

// Middlewares
const logger = (req, res, next)=>{
    const userloggued = false
    if (userloggued) {
        next()
    }else{
        res.send('No puede acceder')
    }
    
}

app.use(logger)

// Routes
app.use(userRoutes)

app.listen(app.get('port'), ()=>{
    console.log(`${app.get('title')} corriendo en el puerto ${app.get('port')}`)
})