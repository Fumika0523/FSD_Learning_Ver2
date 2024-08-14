const bycrypt=require('bcryptjs')

const myFunction=async()=>{
console.log("Encryption of password")
const password="Red12345!"
//2 stages >>
//genSalt()     >> times that hashing algo should run
//hash()

const salt = await bycrypt.genSalt(10)
const hashedPassword = await bycrypt.hash(password,salt)
console.log("hashedPassword",hashedPassword)
console.log("Password",password)

//compare()
const isMatch = await bycrypt.compare(password,hashedPassword)
console.log(isMatch)
}
myFunction()

