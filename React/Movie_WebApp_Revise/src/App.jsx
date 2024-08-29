import './App.css'

import Component3 from './Components/Component3'
import Component4 from './Components/Component4'
import Component5 from './Components/Component5'
import Component6 from './Components/Component6'
import Component7 from './Components/Component7'
import Component8 from './Components/Component8'
import Component9 from './Components/Component9'
import {Route,Routes} from 'react-router-dom';
import NavBar from './Components/NavBar'


function App() {



  return (
    <>

  <NavBar/>
    <Routes>
   
      <Route path="/compmonent3" element={<Component3/>}/>
      <Route path="/compmonent4" element={<Component4/>}/>
      <Route path="/compmonent5"element={<Component5/>}/>
      <Route path="/compmonent6"element={<Component6/>}/>
      <Route path="/compmonent7"element={<Component7/>}/>
      <Route path="/compmonent8" element={<Component8/>}/>
      <Route path="/compmonent9"element={<Component9/>}/>

    </Routes>

    </>
  )
}

export default App
