import NavBar from "./Component/NavBar"
import Home from "./Component/Home"
import BlogDisplay from "./Component/BlogDisplay"
import { useEffect, useState } from "react"
import { Route,Routes } from "react-router-dom"
Route
import {Provider} from 'react-redux'; 
import store from './utils/store';
import CartPage from "./Component/CartPage"


function App() {
const [blogData,setBlogData] = useState([])

const getBlogData = async()=>{
  console.log("Blog Data is called...")
  let res = await fetch("https://66760c9da8d2b4d072f24534.mockapi.io/movie/Blog")
  let data = await res.json()
  console.log(data)
  setBlogData(data)
}

useEffect(()=>{
  getBlogData()
},[]) // API CALL

  return (
    <>
    <Provider store={store}>
    <NavBar/>
    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path='/allblogs' element={<BlogDisplay blogData={blogData} setBlogData={setBlogData}/>}/>
        <Route path="/cartpage" element={<CartPage/>}></Route>
    </Routes>
    </Provider>
    </>
  )
}

export default App
