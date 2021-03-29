const express = require('express')
const app = express()

// Settings
app.set('port', 3000)
app.set('title', 'Aplicación con express')

// Routes
app.get('/users', (req, res)=>{
    console.log(req.method)
    res.send('Accediendo a una ruta')
})

app.listen(app.get('port'), ()=>{
    console.log(`${app.get('title')} corriendo en el puerto ${app.get('port')}`)
})