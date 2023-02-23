const express = require("express")
require('dotenv').config()
const connection = require('./config/db')
// userRouters
const {userRouter}=require("./routes/users.route")
const {productRouter}= require("./routes/products.route")
const {cartRouter}=require("./routes/cart.route")
const {authentication}  = require('./middlewares/authentication.middleware')
const cors = require('cors');
const { UserModel } = require("./models/user.model")

const app = express()
UserModel
app.use(express.json())

app.use(cors())

app.get ("/", (req,res)=>{
    res.send('Home Page of Backend')
})
// Routers
app.use('/users', userRouter)
// // // Authentication
app.use(authentication)
app.use('/products', productRouter)
app.use('/cart', cartRouter)

// port
app.listen(process.env.port,async()=>{
    try{
        await connection;
        console.log("connected to db")
       
    }catch(err){
        console.log({error:err.message})

    }
    console.log(`server is running at ${process.env.port}` )
})
