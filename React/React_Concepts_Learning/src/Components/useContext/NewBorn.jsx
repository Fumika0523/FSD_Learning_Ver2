import React, {useContext} from "react"
import countContext from "../../utils/store_useContext"


function NewBorn(){
    const [count,setCount]=useContext(countContext)
    console.log(count)
    return(
        <>
        <div>NewBorn</div>
        <p className="fs-4">{count}</p>
        <button onClick={()=>setCount(count+1)}>Innc</button>
        </>
    )
}
export default NewBorn