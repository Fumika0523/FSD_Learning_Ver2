import React, {useEffect, useState} from 'react'

function APIcall2(){
const [idData,setidData] = useState([])
//API call
// https://jsonplaceholder.typicode.com/todos

const getIdData=async()=>{
    console.log("ID datas called...........")
    let res = await fetch ('https://jsonplaceholder.typicode.com/todos')
    let data = await res.json()//
    console.log(data)
    setidData(data)
}
useEffect(()=>{
    getIdData()
},[])
return(
    <div>
        <h1>API Call 2</h1>
        {
            idData.map((element,index)=>(
                <div>Id:{element.id} titile:{element.title}</div>
            ))
        }
    </div>
)  

}
export default APIcall2