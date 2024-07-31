import Design2 from './Design2'

function Design3 ({nickName,pic}){
    // to avoid the repeatation,you use destructuring, Template for a card.
    return(
        <>
        <div className="contentDesign">
        <img src={pic} alt="" style={{height:"300px", width:"300px"}}/>
        <h3 className="nickName">{nickName}</h3>
        <Design2/>
        {/* to Make like/dislike individual, need to put in Design3 not Design4 */}
        </div>
        </>
    )
}

export default Design3