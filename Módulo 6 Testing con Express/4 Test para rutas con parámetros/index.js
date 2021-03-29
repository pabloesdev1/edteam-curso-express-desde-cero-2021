const express = require('express')
const usersRouter = require('./routes/users')
const app = express()

app.use(express.urlencoded({extended:false}))
app.use(usersRouter)

app.listen(3000, ()=>{
    console.log('Aplicación corriendo en el puerto 3000')
})

module.exports = app