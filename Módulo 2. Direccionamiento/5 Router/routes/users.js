const express = require('express')
const router = express.Router()

router.route('/users')
.get((req, res)=>{
    res.send('Accediendo a usuarios')
})
.post((req, res)=>{
    res.send('Accediendo a usuarios')
})
.put((req, res)=>{
    res.send('Accediendo a usuarios')
})
.delete((req, res)=>{
    res.send('Accediendo a usuarios')
})

module.exports = router