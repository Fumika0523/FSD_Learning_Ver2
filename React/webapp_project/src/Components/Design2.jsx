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

function Design2 (){
    const design1={
        height:"150px",
        width:"200px",
        marginRight:"2%",
    }
 
    return(
        <>
        {/* {any pics of JS > {} } */}
        {console.log("Flower1")}
        <img src={flowerImage1} alt="flower_img1" style={design1}/>
        
        <img src={flowerImage} alt="flower_img" style={design1}/>

        <img src={Flower_image2} alt="flower_img2" style={design1} />

        <img src={Flower_image3} alt="flower_img3" style={design1}/>
        
        <img src={Flower_image4} alt="flower_img4" style={design1}/>

        <img src={Flower_image5} alt="flower_img5" style={design1}/>

        <img src={Flower_image6} alt="flower_img6" style={design1}/>

        <img src={Flower_image7} alt="flower_img7" style={design1} />

        <img src={Flower_image8} alt="flower_img8" style={design1}/>

        <img src={Flower_image8} alt="flower_img8" style={design1} />

        <img src={Flower_image9} alt="flower_img9" style={design1}/>

        <img src={Flower_image10} alt="flower_img10" style={design1} />
        </>
    )
}
export default Design2