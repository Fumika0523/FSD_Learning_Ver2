const jwt = require ('jsonwebtoken')
console.log(jwt)
let secret_key = "john"
const token = jwt.sign({email:"John@gmail.com"},secret_key,{expiresIn:"7days"})
console.log("Token",token)
//Token
// eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6IkpvaG5AZ21haWwuY29tIiwiaWF0IjoxNzIzODg4MzI3LCJleHAiOjE3MjQ0OTMxMjd9.sw_2rlLRvRenVNf2IMO0KZf6nIEql0S0sZGf9o79SNY

//verify the token
//.verify() >> 2 args > token generated, secret_key

//1-10 line, generated the token

// token,secret_key
const data1 = jwt.verify("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6IkpvaG5AZ21haWwuY29tIiwiaWF0IjoxNzIzODg4MzI3LCJleHAiOjE3MjQ0OTMxMjd9.sw_2rlLRvRenVNf2IMO0KZf6nIEql0S0sZGf9o79SNY","john")
console.log("data1",data1)

//data {email:'fumika@gmail.com',iat:1723888327,exp: 1724493127}
//iat: issued at time
// exp: expiry

const data2=jwt.verify(token,secret_key)
console.log("data2",data2)

// 11-23 verified token