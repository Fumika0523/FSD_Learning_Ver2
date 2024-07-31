import girl_image from '../assets/girl_image.jpg'

function NewMessage4 ({name,age,contactNum}){
    const MyDesign={
        border:"1px solid black",
        width:"270px",
        height:"260px"
    }
 
    return(
    <>
    <div style={MyDesign}>
        <img src={girl_image} alt="" height={180} width={270}/>
        <div className='contentDesign'>
        <div className='nameDesign'>{name} </div>
        <div className=' ageDesign'>{age}</div>
        <div className='contactNumDesign'>{contactNum}</div>
        </div>
        
    </div>
    </>
    )
}
export default NewMessage4