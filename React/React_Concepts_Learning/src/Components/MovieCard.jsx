import { useState } from "react"
import LikeCard from "./LikeCard"
import Button from 'react-bootstrap/Button';
// import {useNavigate} from 'react-router-dom'

function MovieCard ({movieposter,moviename,rating,summary,cast,id}){
const [summaryShow,setSummaryShow] = useState(false)
const [castShow,setCastShow] = useState(false)

// useNavigate()
// const navigate=useNavigate()

let ratingDesign={
color:rating>=8?"green":"red"
                // true:else
}

let visibleDesign={
     display:summaryShow==true?"block":"none",
}

let visibleCastDesign={
    display:castShow==true?"block":"none"
}
// if setShow is false > display:none
    return(
        <>
    <div style={{display:"flex"}}>
        <div className="cardDesign">
            <img src={movieposter} alt="" style={{height:"126px",width:"238px"}}/>
            <div style={{display:"flex",margin:"0",width:"238px"}}>
            <h6 className="text1">{moviename}</h6>
            <h6 style={ratingDesign} className="text2">{rating}</h6>
            </div>
                <div style={{display:"flex",justifyContent:"center"}}>
                {/* plus icon */}
                <i style={{marginRight:"1%"}} className="fa-solid fa-circle-plus" onClick={()=>{
                    setSummaryShow(!summaryShow)
                    setCastShow(false)
                }}></i>
                  {/* play icon */}
                  <i style={{marginRight:"1%"}} className="fa-regular fa-circle-play" onClick={()=>{
                    setCastShow(!castShow)
                    setSummaryShow(false)
                }}></i>
                <LikeCard/>

                {/* Movie Info Button */}
                {/* <Link to {`/movie/in/${id}`}>
                <span className="mx-2"><b>i</b></span></Link> */}
      {/* <Button variant="primary" onClick={()=>{
                    navigate(`/movie/in/${id}`)
                }}>🔵</Button>{' '} */}
          
       </div>
            <p className="summaryDesign" style={visibleDesign}  >{summary}</p>
            <p className="castDesign" style={visibleCastDesign}>{cast}</p>
        </div>
    </div>
        </>
    )
}
export default MovieCard

// Design = > Template () <Design3>, single 1, MovieCard
// Display = > how many times, <Design4> > .map function, MovieDisplay
//App.jsx => Display should be printed,
