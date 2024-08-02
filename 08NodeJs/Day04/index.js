const express=require('express')
const app=express()
//console.log(app)
//using express, we have to configure the server

//moviestation-23.com
//moviestation-23.com/allmovies
//moviestation-23.com/about
//moviestation-23.com/home
//moviestation-23.com/contactus ....>>>> many more pages we have

// routing

//  moviestation-23/com >> root route
//  multiple routes

// /about
// /home
// /allmovies

//route
//using aoo, we will set up first route
//app.get()
//app.get(url,(req,res)=>{
// req  >> incoming request from the client side to the server
// res  >>  Its read the data from the database and give the response, using this reponse we create some HTML page
// })

// / >>>> Home page

app.get('/',(req,res)=>{
    res.send("<h1>Hello Express!</h1>")
})

app.get(`/help`,(req,res)=>{
// res.send("Welcome to Help Page")         //STRING_TEXT response
// res.send("<h2>Welcome to Hep Pagge</h2>")    //HTML response
// res.send({
//      name:"Fumika",
//      place:"Japan"
//})
res.send([                                  //arrau of objects response
    {name:"Fumika",hobbies:"Reading"},
    {name:"Poonam",hobbies:"Cooking"},
    {name:"Chris",hobbies:"Dancing"},
])
})

// start the server
// app.listen()
// PORT NO: At what I should start the server || server PORT when we work local, we provide it
// ()=>{console.log("Server is started")}
const PORT=8000
app.listen(PORT,()=>{
    console.log("Server Started at PORT NO",PORT)
})

//////