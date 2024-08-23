const jwt2 = require ('jsonwebtoken')
const User = require('../model/userModel')

const auth=async(req,res,next)=>{
    console.log("Auth Middleware is called")
   
    //next() its a method, after next() whats the immediate function? >> userRoute >> async function

    //whenever the user wants to access a protected route or resource, the user agent should send the JWT, typically in the Authorization header using the Bearer Schema.
    //The content of the header should look like the following:

    //Authorization: Bearer <token>
    //This can be, in certain cases, a stateless authorization mechanism. The server's protected routes will check for a valid JWT in the Authorization header, and if its present, the user will be wllowed to access protected resources. If the JWT contains the nexessary data, the need to query the database for certain operations may be reduced, through this may not always be the case.
    console.log(req.header('Authorization'))
    //replaceOne()
    console.log(req.header('Authorization').replace("Bearer ",""))

    const token = req.header('Authorization').replace("Bearer ","")
    // varify with the secretKey

    const decode=jwt2.verify(token,"nodejs")
    console.log(decode)/// verification is successful
    req.token=token
    const user = await User.findOne({_id:decode._id})
    req.user = user
    next() // auth middleware is successfully executed... you please pass the control for fuether execution
}

module.exports=auth