import Box from './Box' 
import Message from './Message'
function BoxDisplay(){
    const myDesign2={
        display:"flex",
        marginLeft:"18%"
    }
    return(
        <>
        <div style={myDesign2}>
        <Message/>
        <Box/>
        <Box/>
        <Box/>
        <Box/>
        </div>
        <div style={myDesign2}>
        <Box/>
        <Box/>
        <Box/>
        <Box/>
        </div>
      
        </>
    )
}
export default BoxDisplay