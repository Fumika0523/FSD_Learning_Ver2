import coverPage from '../assets/coverPage.png'


function Header (){
    // Use location hook, ex
    return(
        <>
        <img src={coverPage} alt="" className="opacity-50" style={{height:"650px",width:"100%"}}/>
        <div className="card-img-overlay mt-5">
        <div className="text-white text-center mt-5 fw-bold" style={{fontSize:"80px",marginLeft:"20%", width:"65%"}}>Your Streaming guide for movies, TV shows & sport</div>
        <div className='text-secondary text-center fs-4'>Find where to stream new, popular & upcoming entertainment with JustWatch.</div>   
        <div className='d-flex justify-content-center mt-5' style={{width:"60%",marginLeft:"260px"}}>
        <button type="button" className="btn btn-warning fs-5 fw-bold py-3 px-5">Discover Movies & TV shows</button>
        <button type="button" className="btn btn-outline-secondary fs-5 fw-bold py-3 px-5 ms-5" >Features</button>
        </div>
        {/* Amazon */}
        {/* <i className="bi bi-amazon fs-1"></i> */}
        {/* Netflix */}
        {/* <div className='text-white'>NextFlix</div>
        <i className="text-white cib-netflix"></i> */}
        {/* hulu */}
        {/* U-NEXT */}
        {/* Disney */}
        {/* Prime Video */}
        {/* AMazon */}
        {/* Apple TV */}
        {/* Microsoft */}
        {/* GooglePlay */}
        {/* <i className="bi bi-google-play"></i> */}
        {/* MUBI */}
        {/* AppleTV + */}
        {/* Curiosity Stream */}
        {/* Spamflix */}
        {/* Button SEE ALL */}
            </div>
        </>
    )
}
export default Header