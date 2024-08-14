const mongoose=require('mongoose')
//collectionName + schema
// we have to separate schema and collection

const userSchema=new mongoose.Schema({
    name:{type:String,required:true},
    age:{type:Number,required:true},
    phone_number:{type:Number,required:true},
    email:{type:String,required:true,lowercase:true},
    registered:{type:Boolean,default:false,required:true},
    gender:{type:String,required:true,default:"unknown"},
    password:{type:String}
})

const User= mongoose.model("User",userSchema)

module.exports=User