const Design3 = (props) =>{
    console.log(props.imgsrc)
    //Flower1,Flowe2...
    return(
        <div>
            <div><b style={{fontSize:"25px"}}>Image-{props.imgName}</b></div>
            <img src={props.imgsrc} alt="" height={200} width={296.7}/>
        </div>
    )
}

export default Design3