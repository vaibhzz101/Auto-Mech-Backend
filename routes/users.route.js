const express = require('express')
const controller = require('../controllers/users.controller')
const userRouter = express.Router()

userRouter.post('/register', controller.register)
userRouter.post('/login', controller.login)

module.exports = {
    userRouter }