function Test5({age,setAge}){
    return(
        <>
        <h1>Age is {age}</h1>
        <button onClick={()=>{
            setAge(age=age+1)
        }}>Press Me</button>
        </>
    )
}
export default Test5