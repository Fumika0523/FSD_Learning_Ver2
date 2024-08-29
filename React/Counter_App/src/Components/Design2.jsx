function Design2({like,setLike,dislike,setDislike, btnval3,btnval4}){
    return(
        <>
        <div className="design"> 
        <h2 className="design1" style={{margin:"1%"}}><i class="fa-regular fa-thumbs-up" style={{merginLeft:"2%",color:"green",fontSize:"30px"}} onClick={()=>{
            setLike(like+1)
        }}></i>{like}</h2>

       <h2 className="design1" style={{margin:"1%"}}><i class="fa-regular fa-thumbs-down" style={{ color:"red",fontSize:"30px"}} onClick={()=>{
        setDislike(dislike+1)
       }}></i>{dislike}</h2>
     
        </div>

        </>
    )
}
export default Design2