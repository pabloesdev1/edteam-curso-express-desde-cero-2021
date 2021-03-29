const express = require('express')
const app = express()

// Settings
app.set('port', 3000)
app.set('title', 'Aplicación con express')

// Routes

app.get('/users/:id_user/courses/:id_course', (req, res)=>{
    res.send('Parámetros recibidos: '+ req.params.id_user + ' ' + req.params.id_course)
})


app.listen(app.get('port'), ()=>{
    console.log(`${app.get('title')} corriendo en el puerto ${app.get('port')}`)
})