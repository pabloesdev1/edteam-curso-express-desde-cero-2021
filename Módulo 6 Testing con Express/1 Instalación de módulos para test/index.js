const express = require('express')
const app = express()

app.use(express.urlencoded({extended:false}))

app.listen(3000, ()=>{
    console.log('Aplicación corriendo en el puerto 3000')
})