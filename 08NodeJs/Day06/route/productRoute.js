const Products = require ('../model/productModel')
const express = require ('express')
const router = express.Router()

//GET
router.get('/products',async(req,res)=>{
    const getAllProduct=await Products.find({})
    res.send(getAllProduct)
})

//GET_ID
router.get('/products/:id',async(req,res)=>{
    const getProduct = await Products.findById(req.params.id)
    if(getProduct){
        res.send(getProduct)
        }
        res.send({message:"Product Not Found"})
   
})

//POST
router.post('addProducts',async(req,res)=>{
    const productData = new Products (req.body)
    productData.save()
    if(productData){
    res.send(productData)
    }
    res.send({message:"Products Cannot be Posted"})
})

//UPDATE
router.put('/products/:id',async(req,res)=>{
    const updateProduct = await Products.findByIdAndUpdate(req.params.id,req.body,{new:true,runValidators:true})
    if(updateProduct){
        return res.send(updateProduct)
    }
    res.send({message:"Products Not Found, hense unable to update"})
})

//DELETE
router.delete('/products/:id',async(req,res)=>{
    const deletedProduct = await Products.findByIdAndDelete(req.params.id)
    if(deletedProduct){
        res.send({
            deleteProduct:deletedProduct,
            message:"Deleted successfully"
        })
    }
    res.send({message:"Product Does not exists, hopefully its deleted kindly check"})

})


module.exports = router
