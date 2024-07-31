import Design2 from './Design2'

function Design1({counter, setCounter,btnval1,btnval2}){
 
    return(
        <>
        <h2 style={{fontSize:"35px"}} className="content numDesign">{counter}</h2>
        <div style={{marginLeft:"20%"}}>
        <button className="btnDesign1" onClick={()=>{
            setCounter(counter+1)
        }}>{btnval1}</button>

        <button className="btnDesign2" onClick={()=>{
            setCounter(counter-1)
        }}>{btnval2}</button>
        </div>
        </>
    )
}
export default Design1