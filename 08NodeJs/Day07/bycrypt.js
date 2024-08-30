const bcrypt=require('bcriptjs')

const myFunction=async()=>{
console.log("Encryption of password")
const password="Red12345!"
//2 stages >>
//genSalt()     >> times that hashing algo should run
//hash()

const salt = await bcrypt.genSalt(10)
const hashedPassword = await bcrypt.hash(password,salt)
console.log("hashedPassword",hashedPassword)
console.log("Password",password)

//compare()
const isMatch = await bycrypt.compare(password,hashedPassword)
console.log(isMatch)
}
myFunction()

