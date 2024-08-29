import Design1 from './Design1'
import Design2 from './Design2'

function ImageDisplay1_2(){
    return(
        <>
        {/* We are calling a entire component Design1 and Design, in the ImageDisplay1_2.jsx */}
        {/* We are calling this component in App.jsx */}
        <Design1/>
        <Design1/>
     
        <Design2/>
        <Design2/>
        </>
    )
}
export default ImageDisplay1_2