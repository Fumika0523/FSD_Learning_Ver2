import Design3 from './Design3'
function Design4(props){
    console.log(props)
    return(
        <>
        {/* Mapping you need entire array, so no need to destructuring. */}
            {
    props?.students?.map((element)=>(
       <Design3  nickName={element.nickName} pic={element.pic} />
    ))
  }
        </>
    )
}
export default Design4  