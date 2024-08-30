const Services = require('../model/servicesModel')
const express = require ('express')
const router = express.Router()

//POST
router.post('/addservice',async(req,res)=>{
    try{
        const postService = await Services(req.body)
        postService.save()
        if(postService){
            res.send(postService)
        }
        res.send(
            {message:"Product Not Found"}
        )
    }catch(e){
        res.send({message:"Some Internal Error"})
    }
})

//GET
router.get('/services',async(req,res)=>{
    try{
        const getAllService = await Services.find({})
        if(getAllService){
            res.send(getAllService)
        }
        res.send(
            {message:"Service Not Found"}
        )
    }catch(e){
        res.send(
            {message:"Some Internal Error"}
        )
    }
})

//GET_ID
router.get('/services/:id',async(req,res)=>{
    try{
        const getService = await Services.findById(req.params.id)
        if(getService){
            res.send(getService)
        }
        res.send(
            {message:"Service Not Found"}
        )
    }catch(e){
        res.send({message:"Some Internal Error"})
    }    
})

//UPDATE
router.put('/services/:id',async(req,res)=>{
    try{
        const putService = await Services.findById(req.params.id)
        if(putService){
            res.send(putService)
        }
        res.send(
            {message:"Service Not Found"}
        )
    }catch(e){
        res.send(
            {message:"Some Internal Error"}
        )
    }
})

//DELETE
router.delete('/services/:id',async(req,res)=>{
    try{
        const deletedService = await Services.findByIdAndDelete(req.params.id)
        if(deletedService){
            res.send(deletedService)
        }
        res.send(
            {message:"Service Not Found"}
        )
    }catch(e){
        res.send(
            {message:"Some INternal Error"}
        )
    }
})

module.exports = router
