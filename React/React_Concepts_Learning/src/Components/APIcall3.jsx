import React, {useEffect,useState} from 'react'

function APIcall3(){
         {/* https://6624dd2604457d4aaf9d281d.mockapi.io/dogs */}
    const [dogsData,setDogsData] = useState([])
    const [count,setCount] = useState([100])
    const getDogsData =async() =>{
    console.log("Dogs data is called...........")
    let res = await fetch ('https://6624dd2604457d4aaf9d281d.mockapi.io/dogs')
    let data = await res.json()
    console.log(data)
    setDogsData(data)//to display the data in the browser
    }
    //1st way
    // useEffect(()=>{
    //     getDogsData()
    // }) //No dependancy array


    //2nd way
    useEffect(()=>{
        getDogsData()
    },[]) //empty dependancy array

    //3rd way
    useEffect(()=>{
        getDogsData()
    },[count]) //count is passed as dependency array
    return(
        <div>
               <h1>API3 </h1>
               <button onClick={()=>setCount(count-1)}>Decrement</button>
               <h6>{count}</h6>
            {
                dogsData.map((element,index)=>(
                    <div>
                        {element.name}
                    </div>
                ))
            }
        </div>
    )
}
export default APIcall3