import Message from './Message'
function Welcome(){
    const myStyle={
        backgroundColor:"purple",
        height:"100px",
        width:"100px",
        marginBottom:"1%"
    }
    const myDesign={
        backgroundColor:"grey",
        borderRadius:"50%",
        height:"100px",
        width:"100px",
        marginBottom:"1%"
    }
    return(
        <>
        <div style={{backgroundColor:"blue",height:"100px",width:"100px",marginBottom:"1%"}}>Hello World</div>
        {/* {} > because writing a js, {{}} > for the object */}
        <div style={{backgroundColor:"green",height:"100px",width:"100px",marginBottom:"1%"}}>Hello World</div>
        <div style={myStyle}></div>
        <div style={{borderRadius:"50%",height:"100px",width:"100px",backgroundColor:"pink",marginBottom:"1%"}}></div>
        <div style={myDesign}></div>
        <div className="design"></div>
        <Message/>
        </>
    )
}
export default Welcome