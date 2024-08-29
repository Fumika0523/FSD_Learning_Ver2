import { useState } from 'react'
import Design1 from './Components/Design1'
import './App.css'
import Design2 from './Components/Design2'
import Design4 from './Components/Design4'

function App() {
const [counter,setCounter] = useState(0)

const students = [ { nickName: "Yamuna", pic: "https://i.pinimg.com/280x280_RS/e4/86/86/e4868681b6e2cc4ce83c3b9a5d010b6c.jpg", },
  {
    nickName: "Vindya",
    pic: "https://i.pinimg.com/736x/59/37/5f/59375f2046d3b594d59039e8ffbf485a.jpg",
  },
  
  {
    nickName: "Sushil",
    pic: "https://themusclemedics.com/wp-content/uploads/2018/04/Circle-Profile-PNG.png",
  },
  {
    nickName: "Bharti",
    pic: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuPyLBCLuRQ2EMf1Tdz8GRtdsy2KAGUcZgAg&usqp=CAU",
  },
  {
    nickName: "Shivam",
    pic: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlGf1LsCO_POD_MWK0T40UPrQZfYOjgU0SvQ&usqp=CAU",
  },
  ];

return (
    <>
    <Design1 counter={counter} setCounter={setCounter} btnval={"Increment"} btnval2={"Decrement"}/>
    <hr />
    <Design2/>
    <hr />
    <div style={{display:"flex", gap:"3%",flexWrap:"wrap",justifyContent:"center"}}>
    <Design4 students={students}/>
    {/* pass the entire array, dont put Design2*/}
  </div>
    </>
  )
}
export default App
