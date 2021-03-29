const mongoose = require('mongoose')
const {mongodb} = require('./config')

const connection = mongoose.connect(`mongodb+srv://${mongodb.user}:${mongodb.password}@${mongodb.host}/${mongodb.database}`)
.then(()=>{
    console.log('Conexión exitosa')
}).catch((err)=>{
    console.log('Ha ocurrido un error ' + err)
})

module.exports = connection