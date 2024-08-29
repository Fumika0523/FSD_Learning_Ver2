import { useState } from "react";

function LikeCard(){
    const [like,setLike] = useState(0)
    const [dislike,setDislike] = useState(0)
    return(
        <>
       <div style={{display:"flex",height:"18px"}}>
        <div><i style={{color:"green",fontSize:"15px",margin:"0 2px"}} className="fa-regular fa-thumbs-up" onClick={()=>{
            setLike(like+1)
        }}></i>{like}</div>
        <div><i style={{color:"red",fontSize:"15px",margin:"0 3px"}} className="fa-regular fa-thumbs-down" onClick={()=>{
            setDislike(dislike+1)
        }}></i>{dislike}</div>
        </div>
        </>
    )
}
export default LikeCard