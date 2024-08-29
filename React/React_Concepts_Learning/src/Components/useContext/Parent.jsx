import React,{useState} from 'react'
import Child from './Child'
import countContext from '../../utils/store_useContext'
import { useContext } from 'react'


function Parent(){
    const [data,setData]=useContext(countContext)
    return (
      <div>Parent   
       <Child/>
      </div>
    )
  }
export default Parent