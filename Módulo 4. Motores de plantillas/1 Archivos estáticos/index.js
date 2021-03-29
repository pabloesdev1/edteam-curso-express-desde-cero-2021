const express = require('express')
const path = require('path')
const app = express()

app.use('/static', express.static(path.join(__dirname, 'public')))
app.use('/files', express.static(path.join(__dirname, 'files')))


app.get('/', (req, res)=>{
    res.send('Página de inicio')
})

app.listen(3000, ()=>{
    console.log('Aplicación ejecutándose')
})