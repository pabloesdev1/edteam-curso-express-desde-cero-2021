const express = require('express')
const app = express()

// Settings
app.set('port', 3000)
app.set('title', 'Aplicación con express')

// Routes

app.all('/users', (req, res, next)=>{
    console.log('Primera url')
    next()
})

app.get('/users', (req, res)=>{
    console.log(req.method)
    res.send('Accediendo a una ruta')
})

// post
app.post('/users', (req, res)=>{
    res.send('Accediendo a una ruta')
})

// put
app.put('/users', (req, res)=>{
    res.send('Accediendo a una ruta')
})

// patch
app.patch('/users', (req, res)=>{
    res.send('Accediendo a una ruta')
})

// delete
app.delete('/users', (req, res)=>{
    res.send('Accediendo a una ruta')
})


app.listen(app.get('port'), ()=>{
    console.log(`${app.get('title')} corriendo en el puerto ${app.get('port')}`)
})