import Message from './Message'
function Box(){
    const myDesign={
        backgroundColor:"black",
        height:"100px",
        width:"200px",
        margin:"1%",
    }
    return(
        <>
        <div style={myDesign}></div>
        <Message/>
        </>
    )
}
export default Box