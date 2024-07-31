import React,{useState} from 'react'
import GrandParent from './GrandParent'
import countContext from '../../utils/store_useContext'

function Context(){
    const [count,setCount]=useState(12)
    return(
        <>
    <countContext.Provider value={[count,setCount]}> 
    <div>
      <p>Main UseContext</p>
      <GrandParent/>
    </div>
    </countContext.Provider>
        </>
    )
}
export default Context