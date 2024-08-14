// Project
//db        >>  connection.js
//model     >>modelNamefile.js  
//routes    
//index.js

const mongoose=require('mongoose')
//local_mongo_url=mongodb://127.0.0.1:27017/fumika01_mongoose
//cloud_mongo_url=mongodb+srv://fumika0523:Apple2021@cluster0.jjh1i.mongodb.net/ 

const connection = async()=>{
    // await mongoose.connect("mongodb://127.0.0.1:27017/fumika01_mongoose")
    
    // console.log(process.env.MONGO_URL)
    await mongoose.connect(process.env.MONGO_URL)

    console.log("We are connected to MongoDB")
    }

    //local
    //mongodb://127.0.0.1:27017/dbname

    //cloud
    //mongodb+srv://fumika0523:Apple2021@cluster0.jjh1i.mongodb.net/

// connection()
module.exports = connection;