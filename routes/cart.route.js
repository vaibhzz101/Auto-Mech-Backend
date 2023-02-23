const express = require('express')
const controller  = require('../controllers/cart.controller')
const cartRouter = express.Router()

cartRouter.get('/' , controller.getall)
cartRouter.post('/add', controller.addtocart)
cartRouter.delete('/delete/:id', controller.delete)


module.exports = {
    cartRouter 
}

