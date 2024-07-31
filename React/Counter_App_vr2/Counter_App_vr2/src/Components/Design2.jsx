import { useState } from "react"

// separate/independent design, you can use it to anywhere.
//you can re-use it.

function Design2(){
const [like,setLike] = useState(0)
const [dislike,setDislike] = useState (0)
    return(
        <>
    <div style={{display:"flex",justifyContent:"center",padding:"1% 0"}}>
        <div style={{border:"1px solid black",borderRadius:"25px", width:"55%",display:"flex",justifyContent:"center"}}>
            <h2 className="icon thumbup"><i class="fa-regular fa-thumbs-up" onClick={()=>{
                setLike(like+1)
            }} style={{paddingRight:"10px"}}></i>{like}</h2>

            <h2 className="icon thumbdown"><i class="fa-regular fa-thumbs-down" onClick={()=>{
                setDislike(dislike+1)
            }}style={{paddingRight:"10px"}}></i>{dislike}</h2>
        </div>
    </div>
        </>
    )
}
export default Design2