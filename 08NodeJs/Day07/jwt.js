console.log("jwt")
//import that package
const jwt = require ('jsonwebtoken')
console.log(jwt) 
// object   >>>>
// {
//   decode: [Function (anonymous)],
//   verify: [Function (anonymous)], your token and secret key
//   sign: [Function (anonymous)],  generate token > sign()
//   JsonWebTokenError: [Function: JsonWebTokenError],
//   NotBeforeError: [Function: NotBeforeError],
//   TokenExpiredError: [Function: TokenExpiredError]
// }

// Sign In
// 10 users
// Identify the 10 users    >> user_id
// user_id
// secret key >> fumika || nodejs || movieapp >>>> userdefined key
// optional parameter >>>>> expiry of that token
// payload {email:"fumika@gmail.com"}
// secret key "fumika"

const token = jwt.sign({email:"fumika@gmail.com"},"fumika",{expiresIn:"7days"})
console.log("Token",token)
// Output
// Token eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImZ1bWlrYUBnbWFpbC5jb20iLCJpYXQiOjE3MjM4ODc1MzYsImV4cCI6MTcyNDQ5MjMzNn0.6_s079cfQ24trwgh4syZoS-ciGYOcvg2lUgXcpfGzrc

// Create a new Token for a user and create a new file jwt2.js ,run the file by using node .\jwt2.js 


// run a single file >> node filename