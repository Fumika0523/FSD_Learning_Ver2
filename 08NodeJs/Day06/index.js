//imports + declaration
const express = require('express')
const app = express()
const connection = require ('./db/connection')
const userRoute = require('./route/userRoute')
const movieRoute = require('./route/movieRoute')
const taskRoute = require('./route/taskRoute')
const productRoute = require('./route/productRoute')

const PORT = 8002

app.use(express.json())

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

// Server Start
app.listen(PORT,()=>{
    console.log("Server Started at PORT NO",PORT)
})