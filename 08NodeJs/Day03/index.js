// create the route and as well you have to start thr server
//  / > Homepage   >> HTML response
//  /about         >> object response
//  /weather       >> array of objects respsonse

const express=require('express')
const app=express()

// HOME PAGE
app.get('/',(req,res)=>{
    res.send("<h1>This is Home Page</h1>")
})

// ABOUT
app.get('/about',(req,res)=>{
    res.send({
        ID:1,
        name:"Fumika"
    })
})

//WEATHER
app.get('/weather',(req,res)=>{
    console.log(req.query.country)
    if(!req.query.country){ //! << NOT OPERATOR, to show you the error message
        res.send({
            // Error Message should be alwasys like this
            "code":401,
            "message":"Invalid Query Params, Please refer and enter the correct params",
            "error":"No address FOund? Pass and address"
        })
    }else{
        res.send(
            {"country":req.query.country,"forecast":"Cloudy","rating":req.query.rating || 5}
        )
    }
    res.send([
        {"country":req.query.country, "forecast":"sunny"},
  
    ])
})

app.get('/forecast',(req,res)=>{
    if(req.query.location){
        res.send(
            {"Location":req.query.location,"forecast":"Cloudy","rating":req.query.rating || 5}
        )
    }else{
        res.send({
            "code":401,
            "message":"Invalid Query Params, Please refer and enter the correct params",
            "error":"No address FOund? Pass and address"
        })
    }
})


const PORT=8001
app.listen(PORT,()=>{
    console.log("Server Started at PORT NO",PORT)
})

//https://api.openweathermap.org/data/2.5/weather?q=India&appid=68efa0885519a6f01d76917c463ada68
//https://api.openweathermap.org/data/2.5/weather
//http://localhost:8000/weather

//?q=India&appid=68efa0885519a6f01d76917c463ada68
// Quert String     ||      in form of query string     >>  you give me the india weather details

//  /weather    >>  res.send({"country":"india","forecast":"Cloudy"},{"country":"USA","forecast":"moist"})
//req.query

