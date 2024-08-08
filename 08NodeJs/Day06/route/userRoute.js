const User = require('../model/userModel')
const express = require ('express')
const router = express.Router()

//GET
router.get('/users',async(req,res)=>{
    const getAllUsers=await User.find({})
    res.send(getAllUsers)
})

//GET_ID
router.get('/users/:id',async(req,res)=>{
const getUser=await User.findById(req.params.id)
res.send(getUser)
})

//POST
router.post('/adduser',async(req,res)=>{
    const userData = new User(req.body)
    userData.save()
    res.send(userData)
})

//UPDATE
router.put('/users/:id',async(req,res)=>{
    const updateUser = await User.findByIdAndUpdate(req.params.id,req.body,{new:true,runValidators:true})
    res.send(updateUser)
})

//DELETE
router.delete('/users/:id',async(req,res)=>{
    const deleteUser = await User.findByIdAndDelete(req.params.id)
    res.send({
        deletedUser:deleteUser,
        message:"Deleted Successfully"
    })
})

module.exports = router