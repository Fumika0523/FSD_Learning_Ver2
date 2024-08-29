function Design4 ({imgsrc,imgName}){
    //console.log(props)//object
    //destructuring in JS
    // const {imgsrc,imgName}=props

        return(
            <div>
                <div><b style={{fontSize:"25px"}}>Image-{imgName}</b></div>
                <img src={imgsrc} alt="" height={200} width={296.7}/>
            </div>
        )

}
export default Design4