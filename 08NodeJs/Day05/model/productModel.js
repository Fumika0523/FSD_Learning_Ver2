const mongoose=require('mongoose')

const productSchema=new mongoose.Schema({
    productName:{type:String,required:true},
    productDescription:{type:String,required:true},
    year:{type:Number,required:true},
    color:{type:String,required:true},
})

const Product = mongoose.model("Product",productSchema)

module.exports=Product

//add the all models to postman in Testing & Learning (Get request) send and check, if its running
//get_user, get_product,    get_task,   get_movie 
//this application running at 8002