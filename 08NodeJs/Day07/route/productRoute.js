const Products = require ('../model/productModel')
const express = require ('express')
const router = express.Router()

//GET
router.get('/products',async(req,res)=>{
    // const getAllProduct=await Products.find({})
    // res.send(getAllProduct)

    try{
        const getAllProduct = await Product.find({})
        if(getAllProduct){
            res.send(getAllProduct)
        }
        res.send(
            {message:"Product Not Found"}
        )
    }catch(e){
        res.send(
            {message:"Some Internal Error"}
        )
    }
})

//GET_ID
router.get('/products/:id',async(req,res)=>{
    // const getProduct = await Products.findById(req.params.id)
    // if(getProduct){
    //     res.send(getProduct)
    //     }
    //     res.send({message:"Product Not Found"})

    try{
        const getProduct = await Products.findById(req.params.id)
        if(getProduct){
            res.send(getProduct)
        }
        res.send(
            {message:"Product Not Found"}
        )        
        }catch(e){
            res.send({message:"Some Internal Error"})
    }
})

//POST
router.post('/addproduct',async(req,res)=>{
    // const productData = new Products (req.body)
    // productData.save()
    // if(productData){
    // res.send(productData)
    // }
    // res.send({message:"Products Cannot be Posted"})

    try{
        const postProduct = await Product(req.body)
        if(postProduct){
            res.send(postProduct)
        }
        res.send(
            {message:"User Not Found"}
        )
    }catch(e){
        res.send({message:"Some Internal Error"})
    }
})

//UPDATE
router.put('/products/:id',async(req,res)=>{
    // const updateProduct = await Products.findByIdAndUpdate(req.params.id,req.body,{new:true,runValidators:true})
    // if(updateProduct){
    //     return res.send(updateProduct)
    // }
    // res.send({message:"Products Not Found, hense unable to update"})

    try{
        const putProduct = await Products.findById(req.params.id)
        if(putProduct){
            res.send(putProduct)
        }
        res.send(
            {message:"Product Not Found"}
        )
    }catch(e){
        res.send(
            {message:"Some internal Error"}
        )
    }
})

//DELETE
router.delete('/products/:id',async(req,res)=>{
    // const deletedProduct = await Products.findByIdAndDelete(req.params.id)
    // if(deletedProduct){
    //     res.send({
    //         deleteProduct:deletedProduct,
    //         message:"Deleted successfully"
    //     })
    // }
    // res.send({message:"Product Does not exists, hopefully its deleted kindly check"})

    try{
        const deletedProduct = await Products.findByAndDelete(req.params.id)
        if(deletedProduct){
            res.send(deletedProduct)
        }
        res.send(
            {message:"Product Not Found"}
        )
    }catch(e){
        res.send(
            {message:"Some Internal Error"}
        )
    }

})


module.exports = router
