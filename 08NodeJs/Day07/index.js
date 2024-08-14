//imports + declaration
const express = require('express')
const app = express()
const connection = require ('./db/connection')
const userRoute = require('./route/userRoute')
const movieRoute = require('./route/movieRoute')
const taskRoute = require('./route/taskRoute')
const productRoute = require('./route/productRoute')
const serviceRoute = require('./route/serviceRoute')

const cors=require('cors')
//dotenv
const dotenv=require('dotenv')
dotenv.config()
app.use(cors())

const PORT = process.env.PORT

connection()
app.use(express.json()) // middleware

//Home Page
app.get('/',(req,res)=>{
    res.send("Hello Express!")
})

//API URLS
app.use(userRoute)
app.use(movieRoute)
app.use(taskRoute)
app.use(productRoute)
app.use(serviceRoute)

// Server Start
app.listen(PORT,()=>{
    console.log("Server Started at PORT NO",PORT)
})