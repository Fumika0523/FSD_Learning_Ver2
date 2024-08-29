import Design3 from "./Design3";
import flowerImage1 from '../assets/flowerImage1.avif'
import flowerImage from  '../assets/flowerImage.avif'
import Flower_image2 from '../assets/Flower_image2.jpg'
import Flower_image3 from '../assets/Flower_image3.jpg'
import Flower_image4 from '../assets/Flower_image4.jpg'
import Flower_image5 from '../assets/Flower_image5.jpg'
import Flower_image6 from '../assets/Flower_image6.jpg'
import Flower_image7 from '../assets/Flower_image7.jpg'
import Flower_image8 from '../assets/Flower_image8.jpg'
import Flower_image9 from '../assets/Flower_image9.jpg'
import Flower_image10 from '../assets/Flower_image10.jpg'

const ImageDisplay3 = () =>{
    //props> properties //parameter
    //likke an attribute passing to the argument
    
    let imageDesign={
        display:"flex",
        // border:"4px solid red",
        gap:"20px",
        flexWrap:"wrap"
    }
    // Design3 is called in this component, we are passing the props as imgsrc and imgName to the Design3,Design3 will receive it as props. since props is object, we have to write props.imgsrc & props.imgName in Design3
    return(
        <div style={imageDesign}>
            <Design3 imgsrc={flowerImage1} imgName={1}/>
            <Design3 imgsrc={flowerImage} imgName={2}/>
            <Design3 imgsrc={Flower_image2} imgName={3}/>
            <Design3 imgsrc={Flower_image3} imgName={4}/>
            <Design3 imgsrc={Flower_image4} imgName={5}/>
            <Design3 imgsrc={Flower_image5} imgName={6}/>
            <Design3 imgsrc={Flower_image6} imgName={7}/>
            <Design3 imgsrc={Flower_image7} imgName={8}/>
            <Design3 imgsrc={Flower_image8} imgName={9}/>
            <Design3 imgsrc={Flower_image9} imgName={10}/>
            <Design3 imgsrc={Flower_image10} imgName={11}/>
            <Design3 imgsrc={flowerImage1} imgName={12}/>
            <Design3 imgsrc={flowerImage} imgName={13}/>
            <Design3 imgsrc={Flower_image2} imgName={14}/>
            <Design3 imgsrc={Flower_image3} imgName={15}/>
            <Design3 imgsrc={Flower_image4} imgName={16}/>
            <Design3 imgsrc={Flower_image5} imgName={17}/>
            <Design3 imgsrc={Flower_image6} imgName={18}/>
            <Design3 imgsrc={Flower_image7} imgName={19}/>
            <Design3 imgsrc={Flower_image8} imgName={20}/>
        </div>
        )
     }
export default ImageDisplay3