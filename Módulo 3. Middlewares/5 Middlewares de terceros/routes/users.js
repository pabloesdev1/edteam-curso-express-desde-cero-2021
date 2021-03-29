const express = require('express')
const router = express.Router()

const logger = (req, res, next)=>{
    const userloggued = true
    if (userloggued) {
        next()
    }else{
        res.send('No puede acceder')
    }
}

router.use(logger)

router.get('/users', (req, res)=>{
    res.send('Accediendo a usuarios')
})

router.get('/create-users', (req, res)=>{
    res.send('Accediendo a usuarios')
})

module.exports = router