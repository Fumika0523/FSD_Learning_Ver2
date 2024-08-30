let str = "createdAt:asc"
//let str="createdAt:desc"
//1-createdAt
//2-asc

//split()
const parts = str.split(":")
console.log(parts)
console.log(parts[0])//createdAt
console.log(parts[1])//asc

//ternary operator in React
//if else short form
let test = parts[1]=="asc"?1:-1

console.log(test) //1 or -1 depending upon query string
const sort = {}
//sort take object
//sort
//dot operator sort.keyname
//but when it is with parts[0]
//sort[parts[0]]  >>> sort{createdAt:1}
sort[parts[0]]=(parts[1]=="asc"?1:1)
console.log(sort)

