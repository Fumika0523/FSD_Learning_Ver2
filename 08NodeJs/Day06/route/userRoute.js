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
if(getUser){
res.send(getUser)
}
res.send({message:"User Not Found"})

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
    if(updateUser){
    return res.send(updateUser)
    }
    res.send({message:"User Not Found, hence unable to update"})
})

//DELETE
router.delete('/users/:id',async(req,res)=>{
    const deletedUser = await User.findByIdAndDelete(req.params.id)
    if(deletedUser){
        res.send({
            deleteUser:deletedUser,
            message:"Deleted Successfully"
    })
}
res.send({message:"User Does Not Exits. Holefully Its Deleted please re-check"})

})

module.exports = router