function Design1({counter,setCounter,btnval,btnval2}){
    const myDesign={
        // border:"2px solid red",
        height:"230px",
        textAlign:"center",
        width:"50%",
        backgroundColor:"grey"
      }  
    return(
        <>
        <div style={{display:"flex",justifyContent:"center", color:"white",fontFamily:"monospace"}}>
        <div style={myDesign}>
        <h1 className="title">Counter App</h1>
        <h2 style={{fontSize:"43px", margin:"0",color:"black"}}>{counter}</h2>
        <button className="btn1 btn" onClick={()=>{
            setCounter(counter+1)
        }}
        >{btnval}</button>

        <button className="btn2 btn" onClick={()=>{
            setCounter(counter-1)
        }}>{btnval2}</button>
        </div>
        </div>
        </>
    )
}
export default Design1