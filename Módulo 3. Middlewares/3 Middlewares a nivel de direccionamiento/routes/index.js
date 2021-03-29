const express = require('express')
const router = express.Router()

router.get('/', (req, res)=>{
    res.send('Accediendo a inicio')
})

module.exports = router