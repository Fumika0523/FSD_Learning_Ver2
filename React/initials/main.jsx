// let h1Test=document.createElement(`h1`)
// h1Test.innerHTML=`Hello World`
// document.body.append(h1Test)

//tag,attribute {},text
let heading=React.createElement(`h1`,{id:"title"},"Hello World")
const root=ReactDOM.createRoot(document.getElementById(`root`))
root.render(heading)

let heading2=React.createElement("div",{id:"divTag"},[
    //array
    React.createElement("h1",{id:"divTag"},"React1"),
    React.createElement("h2",{id:"divTag"},"React2")
])
const root1=ReactDOM.createRoot(document.getElementById(`root1`))
root1.render(heading2)

