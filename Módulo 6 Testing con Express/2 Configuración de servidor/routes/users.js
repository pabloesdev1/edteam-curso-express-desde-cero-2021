const express = require('express')
const router = express.Router()

const users = [
    {id:1, name:'User 1'},
    {id:2, name:'User 2'},
    {id:3, name:'User 3'}
]

router.get('/users', (req, res)=>{
    res.status(200).json(users)
})

router.get('/user/:id', (req, res)=>{
    const param = req.params.id
    users.forEach(user =>{
        if (param == user.id) {
            res.status(200).json('Se encontró el usuario')
        }
    })
    res.status(404).json('No se encontró el usuario')
})

router.post('/create-user', (req, res)=>{
    users.push(req.body)
    res.redirect('/users')
})

module.exports = router