const express = require('express')
const path = require('path')
const userRoutes = require('./routes/users')
const app = express()

// Settings
app.set('port', 3000)
app.set('title', 'Aplicación con express')

// Routes
app.use('/admin', userRoutes)

app.listen(app.get('port'), ()=>{
    console.log(`${app.get('title')} corriendo en el puerto ${app.get('port')}`)
})  