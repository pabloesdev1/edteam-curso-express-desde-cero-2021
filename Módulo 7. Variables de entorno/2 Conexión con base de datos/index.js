const express = require('express')
require('dotenv').config()
const app = express()

require('./connection')

app.set('port', process.env.PORT || 3000)

app.listen(app.get('port'), ()=>{
    console.log('Aplicación corriendo en el puerto ' + app.get('port'))
})