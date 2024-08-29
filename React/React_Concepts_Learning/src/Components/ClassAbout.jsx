import React from "react";

class ClassAbout extends React.Component{
 //extends inheritance
 //props passed from somewhere you will receive it
 constructor(props){
    super(props)
    this.state={
        userInfo:{
            name:"Dummy Name",
            login:"Longin UserName"
        }
    }
    console.log("Child Constructor")
 }

 async componentDidMount(){
    console.log("Child componentDidmount called")
    //API CALL
    let res = await fetch('https://api.github.com/users/Fumika0523')
    let data = await res.json()
    console.log(data)
    //updating the state
    this.setState({
        //userInfo:{
        //      name:data.name,
        //      login:data.login
        //  }
        userInfo:data
    }) 
    this.timer=setInterval(()=>{
        console.log("1000")
    },1000)
 }
componentDidUpdate(){
    console.log("componentDidUpdate called")
}
componentWillUnmount(){
    console.log("componentWillUnmount")
    clearInterval(this.timer)
}
render(){
    console.log("Child Render")
    return(
        <>
        <h1>Hello from ClassAbout Component {this.props.name}{this.props.number}</h1>
        <h5>{this.state.userInfo.name}</h5>
        <h5>{this.state.userInfo.login}</h5>
        <img src={this.state.userInfo.avatar_url} alt="" />
        <h5>{this.state.userInfo.id}</h5>
        </>
    )
}
}
export default ClassAbout

//create component in class
//state management
//props passing
//api call || ComponrntDidMount() ||
//FC > useEffect(()=>{},[])
//API call > updating the state variable
//calling in useEffect()

//Parent Constroctor >> ClassProfile
//Parent Render     >> ClassProfile
//Child Constructor >>ClassAbout
//Child Render      >> ClassAbout

//Child ComponentDidMount >> ClassAbout
//Child ComponentDidMount >> ClassProfile