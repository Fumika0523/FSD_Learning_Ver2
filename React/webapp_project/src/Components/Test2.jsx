import Message from './Message'
function Test2(){
    const myDesign={
        height:"100px",
        width:"100px",
        marginRight:"1%",
        marginBottom:"1%",
        fontSize:"30px",
        textAlign:"Center",
        alignContent:"Center",
    }
    const myDesign2={
        display:"flex",
        // flexDirection:"row",
        // width:"50%"
        marginLeft:"35%"
    }
    return(
        <>
        <div style={myDesign2}>
        <div style={myDesign} className="test1">1</div>
        <div style={myDesign} className="test2">2</div>
        <div style={myDesign} className="test3">3</div>
        <div style={myDesign} className="test4">4</div>
        </div>
        <div style={myDesign2}>
        <div style={myDesign} className="test5">5</div>
        <div style={myDesign} className="test6">6</div>
        <div style={myDesign} className="test7">7</div>
        <div style={myDesign} className="test8">8</div>
        <Message/>
        </div>
        </>
    )
}
export default Test2