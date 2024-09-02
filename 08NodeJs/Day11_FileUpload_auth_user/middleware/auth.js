const jwt = require('jsonwebtoken')
const User = require('../model/userModel')

const auth = async (req, res, next) => {
    console.log("Auth Middleware is called")
    try {
        //next() its a method, after next() whats the immediate function? >> userRoute >> async function
        //whenever the user wants to access a protected route or resource, the user agent should send the JWT, typically in the Authorization header using the Bearer Schema.
        //The content of the header should look like the following:

        //Authorization: Bearer <token>
        //This can be, in certain cases, a stateless authorization mechanism. The server's protected routes will check for a valid JWT in the Authorization header, and if its present, the user will be wllowed to access protected resources. If the JWT contains the nexessary data, the need to query the database for certain operations may be reduced, through this may not always be the case.
        //console.log(req.header('Authorization')) // with the Bearer,
        if(!req.header('Authorization')){ // if no AUthorization is provided, then show the error message.
        return res.send({message:"Authorization Header is Missing"}) // early return >> when there is no else and if there is a error, it will stop the code there. 
        // console.error("Authorization Header is Missing")//showing the error message in Red color.
        //console.warning("Authorization Header is Missing")//warning, if its a error, it doesnt show
        }
        //replaceOne()
        //console.log(req.header('Authorization').replace("Bearer ", ""))// (JS method)replace the Bearer. so only Token you get
        const token = req.header('Authorization').replace("Bearer ", "")// storing into the "token"
        // varify with the secretKey
        const decode = jwt.verify(token, "nodejs") // verify
        //console.log(decode)/// verification is successful
        req.token = token
        // _id: Object Id of the specific user
        // can we find out the user with _id? yes
        const user = await User.findOne({ _id: decode._id })
        req.user = user
        if (!user) { // if there is not Found, User not Found
            res.send({ user, message: "User Not Found" })
        }
        next() // auth middleware is successfully executed... you please pass the control for further execution
    } catch (e) {
        res.send({ message: "Authentication Error" })
    }
}

module.exports = auth