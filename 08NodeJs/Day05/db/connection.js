// Project
//db        >>  connection.js
//model     >>modelNamefile.js  
//routes    
//index.js

const mongoose=require('mongoose')
const connection = async()=>{
    await mongoose.connect("mongodb://127.0.0.1:27017/fumika01_mongoose")
    console.log("We are connected to Mongodb")
}
// connection()
module.exports = connection;