
import './App.css'
import Sample from './Components/Sample' 
import Welcome from './Components/Welcome'
import Test1 from './Components/Test1'
import Test2 from './Components/Test2'
import Box from './Components/Box'
import BoxDisplay from './Components/BoxDisplay'
import Message from './Components/Message'
import ImageDisplay1_2 from './Components/ImageDisplay1_2'
import ImageDisplay3 from './Components/ImageDisplay3'
import ImageDisplay4 from './Components/ImageDisplay4'
import {useState} from 'react'
import NewTest1 from './Components/NewTest1'
import Test5 from './Components/Test5'
import NewMessage1 from './Components/NewMessage1'

//'' 
function App() {
  const [age, setAge]= useState(28)
  const [display,setDisplay]=useState("Hello World----")
  const val=90

  return (
    <>
    {/* {Sample()}  This approach is not recommended. */}
    <h2>React-{age}</h2>
    <h2>JS-{val}</h2>    
    <button onClick={()=>val++}>Click Val</button>
    <button onClick={()=>{
      setAge(age+1)
    }}>Click Age</button>

    <h1 onClick={()=>setDisplay("Welcome To Tokyo")}>{display} </h1>
  
    <NewTest1 btnval1={"Submit100"} btnval2={"Reset100"} btnval3={"ClickHere100"}/>
    <hr />

    <h2>{val}</h2>
    <button onClick={()=>val++}>Click Val</button>
    <Test5 age={age} setAge={setAge}/>
    {/* does not work. refer react_js */}
    <Sample/>
    <Welcome/>
    <Test1/>
    <Test2/>
    <BoxDisplay/>
    <Message/>
    <h1>Hellow World</h1>
    <h1>Learning React installation completed</h1>
    <h2>New Image1</h2>
    <ImageDisplay1_2 name={"Fumika100"}/>
    <h2>New Image2</h2>
    <ImageDisplay3 name={"Fumika200"}/>
    <h2>New Image3</h2>
    <ImageDisplay4 name={"300"}/>
    <hr />
  
    <NewMessage1 name={"Fumika"} age={"29"} contactNum={"08022225555"} />
    </>
  )
  }

export default App

//this is not HTML, this is known as JSX(JavaScript XML)
//because its jsx you can write jsx inside the function, 
//In function, we dont write html, but in React since we have react JSX are allowed
//you must wrap with <></>. React fregment, because function should return only 1 jsx. you can use div but it limites the width, so its not needed
//Whatever the components will be created will be called in App.jsx

