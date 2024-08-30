// importing mongoose
const mongoose=require('mongoose')
//localhost     >>      localsystem
//connecting to mongoDB from Node js application after MongoDB url / dbname  >> DBname , user-defined
mongoose.connect("mongodb://127.0.0.1:27017/fumika01_mongoose")
//user database
//user  >   name age 
//User ModelName
//collection (user)   >   create
// creating collection + schema (defining what kind data type we will accept) using mongoose.model

const User=mongoose.model("User",{
    name:{type:String,required:true},
    age:{type:Number,required:true},
    phone_number:{type:Number,required:true},
    email:{type:String,required:true,lowercase:true},
    registered:{type:Boolean,default:false,required:true},
    gender:{type:String,required:true,default:"unknown"}
})
// until Line19, creating Collection

const userData= new User ({
    name:"Fumika00",
    age:25,
    phone_number:7041134429,
    email:"FUMIKA00@gmail",
    registered:true,
    gender:"female"
})

userData.save() 

// rest assure if our code is running
// const connection=async()=>{
//     const res=await userData.save()
//     console.log(res,"Added to DB")
// }
// connection()

