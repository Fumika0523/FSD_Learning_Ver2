const User = require('../model/userModel')
const express = require ('express')
const router = express.Router()
const bcrypt = require('bcryptjs')
const auth = require('../middleware/auth')
const sharp = require('sharp') 

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
        const userData = new User ({
            ...req.body,//making the copy of req.body
            password:hashedPassword // this one I need to update
        })
        await userData.save()
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
            token:token,
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
router.get('/users/profile',auth,async(req,res)=>{
    try{
    //console.log(req.token)
    //console.log(req.user)
        const getProfile = await User.findById(req.user._id)
    if(!getProfile){res.send({
        message:"The User Profile Cannot Be found."})
    }
    res.send(getProfile)
    }catch(e){
        res.send({message:"Some Internal Error"})
    }
})
    
// ex:router.get('/users',>> server is down (middleware is called))
// ex:router.post('/signin' >> server is down(middleware is called))

//protected route
//auth to be passes to thoese actually needs not to all
//router.get('/users',middleware,()=>{})

//GET_ID
router.get('/users/:id',async(req,res)=>{
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
router.put('/users/profile', auth, async(req,res)=>{
    try{
        console.log("Update Profile Id",req.user._id)// auth why will I pass from url
        if(req.body.password){
            const salt = await bcrypt.genSalt(10)
            const hashedPassword=await bcrypt.hash(req.body.password,salt)
            req.body.password=hashedPassword
        }
        const updateUser = await User. findByIdAndUpdate(req.user._id,req.body,{new:true,runValidators:true})
        if(updateUser){
            res.send(updateUser)
        }
        res.send({message:"User Not Found"})
    }catch(e){
        res.send({message:"Some Internal Error"})
    }
})


//DELETE
router.delete('/users/profile',auth,async(req,res)=>{
try{
    console.log(req.token)
    console.log(req.user._id)
    console.log("Delete Profile ID",req.user._id)
    const deleteProfile = await User.findByIdAndDelete(req.user._id)
    if(deleteProfile){
        res.send({deleteProfile,message:"Profile deleted successfully"})
    }
    res.send(
        {
        message:"User Not Found"}
    )
}catch(e){
    res.send(
        {message:"Some Internal Error"}
    )
}
})


//upload image
const multer=require('multer')
const upload=multer({
    // dest:"profileImages/", //upload in DB this wont be there
    
    limits:{
        fileSize:1000000 //1MB
    },

    //function to control which files are accepted
    fileFilter(req,file,cb){
        console.log(file.originalname)
        let fileNameVal=file.originalname.endsWith(".jpg")||file.originalname.endsWith(".jpeg")||file.originalname.endsWith(".png")||file.originalname.endsWith(".JPG")||file.originalname.endsWith(".avif")//get the file original name
        if(fileNameVal){
            console.log("File is uploaded") 
        }else{
            //error
            console.log("Please upload a correct file")
            return cb(new Error("Please upload a correct file")) //throw new Error("")
        }
        cb(undefined,true) // null|| undefined, << to accept the file pass 'true' 
    }
})

// update + image
//upadte + add a profile image
router.post('/user/profile/upload/image',auth,upload.single('avatar'),async(req,res)=>{
    try{
        const buffer = await sharp (req.file.buffer).resize({width:100,height:100}).png().toBuffer()
        //req.user.avatar=req.file.buffer // directly updating
        req.user.avatar = buffer
        await req.user.save()
        if(buffer){
        res.send({message:"File Uploaded Successfully"})
    }
        //req.file.buffer >> hold the binary data
    }catch(e){
        console.log(e)
    }
},(error,req,res,next)=>{
    res.send({showError:error.message})
    })

//delete the profrofile image
//delete method
// user specific > auth > middleware ||

router.delete('/users/profile/upload/delete',auth,upload.single('avatar'),async(req,res)=>{
     try{
    //req.user -->auth
    //res.send(req.user.avatar)
    req.user.avatar = undefined // empty the avatar detail
    await req.user.save() // save to db
    console.log(req.user.avatar) //undefined
    if(req.user.avatar==undefined){
     res.send({
    "user":req.user,
    "message":"Profile Image deleted successfully"
    })
    }else{
    res.send({message:"Could not delete the image, please re-check the code"})
    }
    }catch(e){
        console.log(e)
    }
})

//get the profile image
router.get('/users/profile/image',auth,upload.single('avatar'),async(req,res)=>{
    try{
        const image =  res.set("Content-Type","image/png")
        if(image){
          return res.send(req.user.avatar) // if you not using else >> use return ... 
            //res.send(req.user)
            //console.log(req.user.avatar)
        }res.send({
            message:"please check again"
        })
    }catch(e){
        console.log(e)
    }
})


module.exports = router


//how can our nodejs + express help to send a emails

// every 5 users have different profile images, 
