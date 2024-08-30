const mongoose=require('mongoose')

const productSchema=new mongoose.Schema({
    productName:{type:String,required:true},
    productDescription:{type:String,required:true},
    year:{type:Number,required:true},
    color:{type:String,required:true},
})

const Products = mongoose.model("Products",productSchema)

module.exports=Products

// Create a routing for product
// Create a file for productRoute.js -- DONE
// router.get() ---> get the all data (all & specific ID)  
// router.post() ---> add the data
// router.put()  ---> Update the existing data with ID
// router.delete() ---> delete the existing data with ID