const User = require('../model/userModel')
const express = require ('express')
const router = express.Router()

//GET
router.get('/users',async(req,res)=>{
    // const getAllUsers=await User.find({})
    // res.send(getAllUsers)

    try{
        const getAllUser = await User.find({})
        if(getAllUser){
            res.send(getAllUser)
        }
        res.send(
            {message:"User Not Found"}
        )
    }catch(e){
        res.send(
            {message:"Some Internal Error"}
        )
    }
})

//GET_ID
router.get('/users/:id',async(req,res)=>{
// const getUser=await User.findById(req.params.id)
// if(getUser){
// res.send(getUser)
// }
// res.send({message:"User Not Found"})

try{
    const getUser = await User.findById(req.params.id)
    if(getUser){
        res.send(getUser)
    }
    res.send({message:"User Not Found"})
}catch(e){
res.send(
    {message:"Some Internal Error"}
)
}
})

//POST
router.post('/adduser',async(req,res)=>{
    // const userData = new User(req.body)
    // userData.save()
    // res.send(userData)
    try{
        const postUser = await User(req.body)
        if(postUser){
            res.send(postUser)
        }
        res.send(
            {message:"User Not Found"}
        )
    }catch(e){
        res.send({message:"Some Internal Error"})
    }
})

//UPDATE
router.put('/users/:id',async(req,res)=>{
    // const updateUser = await User.findByIdAndUpdate(req.params.id,req.body,{new:true,runValidators:true})
    // if(updateUser){
    // return res.send(updateUser)
    // }
    // res.send({message:"User Not Found, hence unable to update"})

    try{
        const putUser = await User.findById(req.params.id)
        if(putUser){
            res.send(putUser)
        }
        res.send({message:"User Not Found"})
    }catch(e){
        res.send({message:"Some Internal Error"})
    }

})

//DELETE
router.delete('/users/:id',async(req,res)=>{
//     const deletedUser = await User.findByIdAndDelete(req.params.id)
//     if(deletedUser){
//         res.send({
//             deleteUser:deletedUser,
//             message:"Deleted Successfully"
//     })
// }
// res.send({message:"User Does Not Exits. Holefully Its Deleted please re-check"})

try{
    const deleteUser = await User.findByIdAndDelete(req.params.id)
    if(deleteUser){
        res.send(deleteUser)
    }
    res.send(
        {message:"User Not Found"}
    )
}catch(e){
    res.send(
        {message:"Some Internal Error"}
    )
}
})

module.exports = router