import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Component1 from './Components/Component1'
import Component2 from './Components/Component2'
import './index.css'

import { BrowserRouter, Routes, Route } from "react-router-dom";



ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <Routes>
  <Route path="/"element={<Component1/>}/>
  <Route path="/compmonent2/:componentId" element={<Component2/>}/>

  
  </Routes>
  <App />
</BrowserRouter>,
)
