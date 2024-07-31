import './App.css'
import Design1 from './Components/Design1'
import { useState } from 'react'
import Design2 from './Components/Design2'
import Design1_vr2 from './Components/Design1_vr2'

function App() {

const [counter,setCounter] = useState(0)
const [like,setLike] = useState(0)
const [dislike,setDislike] = useState(0)
// useState(initial Value)

  const bodyDesign={
    border:"2px solid black",
    width:"45%",
    height:"230px",
    marginLeft:"27%",
    paddingBottom:"15px",
    backgroundColor:"lightyellow"
}
  return (
  <>
  <div style={bodyDesign}>
  <h1 style={{fontSize:"45px"}} className='content'>CounterApp</h1>

  <Design1 counter={counter} setCounter={setCounter} btnval1={"Increment"} btnval2={"Decrement"}/>
  </div>

  <Design2 like={like} setLike={setLike} dislike={dislike} setDislike={setDislike} />
  </>
  )
}
export default App

// /* //Create normal Home Boostrap Webpage */
// /* Re-create both Apps, counter using fontawesome & thums using fontawesome */