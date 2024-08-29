import Design4 from "./Design4"
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


const ImageDisplay4 = () =>{
    //props> properties //parameter
    //likke an attribute passing to the argument
    let imageDesign={
        display:"flex",
        // border:"4px solid red",
        gap:"20px",
        flexWrap:"wrap"
    }

    const imageArray=[
        {
            id:1,
            imgsrc:flowerImage1
        },
        {
            id:2,
            imgsrc:flowerImage
        },
        {
            id:3,
            imgsrc:Flower_image2
        },
        {
            id:4,
            imgsrc:Flower_image3
        },
        {
            id:5,
            imgsrc:Flower_image4
        },
        {
            id:6,
            imgsrc:Flower_image5
        },
        {
            id:7,
            imgsrc:Flower_image6
        },
        {
            id:8,
            imgsrc:Flower_image7
        },
        {
            id:9,
            imgsrc:Flower_image8
        },
        
        {
            id:10,
            imgsrc:Flower_image9
        },
        {
            id:11,
            imgsrc:flowerImage1
        },
        {
            id:12,
            imgsrc:flowerImage
        },
        {
            id:13,
            imgsrc:Flower_image2
        },
        {
            id:14,
            imgsrc:Flower_image9
        },
        {
            id:15,
            imgsrc:flowerImage1
        },
        {
            id:16,
            imgsrc:flowerImage
        },
        {
            id:17,
            imgsrc:Flower_image2
        },
        {
            id:18,
            imgsrc:Flower_image9
        },
        {
            id:19,
            imgsrc:flowerImage1
        },
        {
            id:20,
            imgsrc:flowerImage
        },
        
    ]

    return(
        <div style={imageDesign}>
        
        {/* console.log(imageArray) */}
        {
            imageArray.map((element,index)=>(
                <Design4 imgsrc={element.imgsrc} imgName={element.id} key={index}/>
            ))
        }
        </div>
    )
}
export default ImageDisplay4