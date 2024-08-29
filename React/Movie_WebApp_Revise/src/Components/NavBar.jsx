import {Link} from "react-router-dom"

function NavBar(){
    return(
        <>
    <nav className="navbar navbar-expand-lg bg-dark sticky-top">
      <div className="container ms-5">
        <span className="fs-4 text-warning"><i className="fa-solid fa-couch"></i><i className="fa-solid fa-wine-glass"></i></span>
        <a className="navbar-brand text-white ms-2 p-0 fs-5" href="#">MovieStation</a>
        
        <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
          <ul className="navbar-nav gap-3">
          <div ><Link to='/component1' className="text-secondary text-decoration-none">Component1</Link></div>
          <div><Link to='/component2' className="text-secondary text-decoration-none">Component2</Link></div>
          <div><Link to='/component3' className="text-secondary text-decoration-none">Component3</Link></div>
          <div><Link to='/component4' className="text-secondary text-decoration-none">Component4</Link></div>
          <div><Link to='/component5' className="text-secondary text-decoration-none">Component5</Link></div>
          <div><Link to='/component6' className="text-secondary text-decoration-none">Component6</Link></div>
          <div><Link to='/component7' className="text-secondary text-decoration-none">Component7</Link></div>
          <div><Link to='/component8' className="text-secondary text-decoration-none">Component8</Link></div>
          <div><Link to='/component9' className="text-secondary text-decoration-none">Component9</Link></div>
          </ul>
        </div>
      </div>
    </nav>
   </>
    )
}
export default NavBar