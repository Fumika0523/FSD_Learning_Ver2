//class >properties > constructor >>instance of object || block
//class classname{
        //constructor() {
        // properties
        //}
        //}

import React from "react";
import ClassAbout from "./ClassAbout";

class Classprofile extends React.Component{
    constructor(props){
        super(props)
        this.state={
            count:100,
            num:20,
            count2:700
        }
        console.log("Parent Constructor")
    }
    // Console in a last
    componentDidMount(){
        console.log("Parent componentDidmount called")
    }
    render(){
        console.log("Parent Render")
   return(
    <>
    {/* <h1>Class Component</h1> */}
    <h1>Class Component - {this.state.count}{this.state.num}{this.state.count2}</h1>
    <button onClick={()=>{
        this.setState({
        count:this.state.count+1,
        num:this.state.num+1,
        count2:this.state.count2+2,
    })
    }}>Increment All</button>

    <ClassAbout name={"About Page"} number={"2024"}/>

    </>
   )
}
}
export default Classprofile

// function Classprofile1(){
//     return(<>
//     <h1>Class Profile1</h1>
//     </>)
//      }

