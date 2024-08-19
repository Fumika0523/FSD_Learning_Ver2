const User = require('../model/userModel')
const express = require ('express')
const router = express.Router()
const bcrypt = require('bcryptjs')
const auth = require('../middleware/auth')

//POST  >> SignUP + SignIN
//A account already exists with this email address, please signi in using it
// addduser >> /signup
router.post('/signup',async(req,res)=>{
    //any user email exists them, I shouldnt be able to create the user
    try{
    //check for an duplicate email address
    let user = await User.findOne({
        $or:[
        {email:req.body.email},
        {phone_number:req.body.phone_number}
            ]
          }) 
          
    // finding a user using a email address if it exists, it will show error message
        console.log(user)
        if(user){console.log("User is found", req.body.email)
            return res.send("User already exists")
        }

        //password hashing
        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(req.body.password,salt)

//         const userData = new User({
//             name:req.body.name,
//             age:req.body.age,
//             phone_number:req.body.phone_number,
//             email:req.body.email,
//             registered:req.body.registered,
//             gender:req.body.gender,
//             password:hashedPassword
//         })

const userData = new User ({
    ...req.body,//making the copy of req.body
    password:hashedPassword // this one I need to update
})
userData.save()
res.send(userData)
    }
    catch(e){
        res.send("Some Error Occurred")
    }
})

//POST  >> SignIn
router.post('/signin',async(req,res)=>{
    try{
    let user = await User.findOne({
    $and:[
        {email:req.body.email},
        {phone_number:req.body.phone_number}
    ]                
    })
    const isMatch = await bcrypt.compare(req.body.password,user.password) //req.body.password >> When a user type, user.password >>> data from DB
    if(isMatch && user){
        //Generate a token
        const token = await user.generateAuthToken()
         res.send({
            message:"you have successfully signed in!", 
            user:user,      //print a user detail
            token:token     
         })    
    }
    }catch(e){
        res.send(
            {message:"Your login credentials are incrrect, kindly check and re-enter"}
        )
    }
})

//GET
// auth allowing me to get the signed in user
router.get('/users',auth,async(req,res)=>{
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
// ex:router.get('/users',>> server is down (middleware is called))
// ex:router.post('/signin' >> server is down(middleware is called))

//protected route
//auth to be passes to thoese actually needs not to all
//router.get('/users',middleware,()=>{})

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