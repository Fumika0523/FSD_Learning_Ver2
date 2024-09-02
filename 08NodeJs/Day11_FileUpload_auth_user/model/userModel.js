const jwt = require("jsonwebtoken")
const mongoose=require('mongoose')
//collectionName + schema
// we have to separate schema and collection

const userSchema=new mongoose.Schema({
    name:{type:String,required:true},
    age:{type:Number,required:true},
    phone_number:{type:Number,required:true},
    email:{type:String,required:true,lowercase:true},
    gender:{type:String,required:true,default:"unknown"},
    password:{type:String},
    avatar:{type:Buffer} // store any binary data into DB then the type is Buffer >> image cannot b stored directly into DB, for images you have to put type as Buffer only >> when we upload image it directly store as a binary data
    },{
    timestamps:true
    })

//schema + methods >> generate a token
//generateAuthToken >> userdefined Name >> referred as function >> functionName is always userdefined >> annonymous function

userSchema.methods.generateAuthToken = async function(req,res){
    //sign in >> response >> this keyword
    const user = this
    //console.log("UserSchema",user)
    
    //Generate a token
    const token = jwt.sign({_id:user.id},"nodejs")
    console.log(token)
    return token
}
//virtual field we will so that we connect the collections
//'taskRel' >>> developerDefined field name
userSchema.virtual('taskRel',{
    ref:"Task", // refer which mode?
    localField:"_id", // current model field
    foreignField:"owner" // 
})

const User= mongoose.model("User",userSchema)

module.exports=User
// exporting User, available this file to all of the files
