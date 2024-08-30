// const fs=require('fs')
// let data1 = "Node.js® is a free, open-source, cross-platform JavaScript runtime environment that lets developers create servers, web apps, command line tools and scripts." 
// fs.writeFile("test2.txt",data1,()=>{})
// fs.appendFile("test2.txt","\n Want new features sooner? Get Node.js v22.5.11 instead.",()=>{})

const {var1,var2,getNotes} = require('./note.js')
console.log(var1)
console.log(var2)

let getNoteFun=getNotes()
console.log(getNoteFun)

