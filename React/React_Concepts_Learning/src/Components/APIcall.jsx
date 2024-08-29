import React, {useEffect, useState} from 'react'

const APIcall = () => {
    const [countryData,setCountryData] = useState([])
    const [count,setCount] = useState(0)
    //API call
    //https://restcountries.com/v3.1/all

    const getCountriesData=async()=>{
        console.log("Rest countries Called.............")
        let res = await fetch ('https://restcountries.com/v3.1/all')
        let data=await res.json()//
        console.log(data)
        setCountryData(data) // updated the state variable with the rest of API >> array of object 
    }
    // getCountriesDataa() >>> called again and again
    //useEffect(()=>{},[]) Syntax >> Best place to make an API Call
    //useEffect > async not allowed
    //neat and tidy >> break it and use it

    //1st way
    // useEffect(()=>{
    //     getCountriesData()
    // })

    //2nd Way
    // useEffect(()=>{
    //     getCountriesData()
    // },[]) //empty dependancy

    //3rd way
    useEffect(()=>{
        getCountriesData()
    },[count])

    return(
        <div>
            <h1>API Call</h1>
            <button onClick={()=>setCount(count+1)}>Inccrement</button>
            <h6>{count}</h6>
            {/* response > JSON >> String || Quick check */}
            {/* <h4>{JSON.stringify(countryData)}</h4> */}

            {
                countryData.map((element,index)=>(
                    <div>Area for a {element.name.common} Country is {element.area} and Google map is: {element.maps.googleMaps}</div>
                ))
            }
        </div>
    )
}
export default APIcall

//practice API with other url
//Navigate

// async is not allowed to use useEffect(), thats why it has to be seprated

//3ways of writing useEffect()
//useEffect(()=>{})         >Initial Render + Rendering again and again ....+ Continuout Trigger.
//useEffect(()=>{},[])      >Initial Render (Only once), only 1time the data is loading
//useEffect(()=>{},[count]) >Initial Render + Whenever my count changed, i will again render

//Innitial Render > When we start the App, App is loaded in the browser
//[] >>>>> Dependancy Array
//[]    > Empty Dependency
//[count]   > count is passed as Dependency