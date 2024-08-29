import { Link,useLocation } from "react-router-dom"
import cartContext from "../utils/cartContext";
import { useContext } from "react";
import { useSelector } from "react-redux";
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

function NavBar ({mode,setMode}){
  const location = useLocation();
  console.log(location)

  // const excludedPaths = [`/movie/in/The%20Godfather`]; //paths where header should be excpluded
  const includedPaths = ["/","/allmovies","/about","/services","/contact"] //2nd option, rount you wanted you mention the all pages that you want to show
  //Check if current path is in the excludedPaths array
  const shouldRenderHeader = includedPaths.includes(location.pathname)
  console.log(shouldRenderHeader)

  const cartNavbar=useContext(cartContext)
  console.log(cartNavbar)
  console.log(useContext(cartContext))

  //subscribing to the store
  const cartItems=useSelector(store=>store.cart.items)
  console.log(cartItems.length)

    return(
        <>
    <nav className="navbar bg-black navbar-expand-lg sticky-top">
      <div className="container ms-5">
        <span className="fs-4 text-warning"><i className="fa-solid fa-couch"></i><i className="fa-solid fa-wine-glass"></i></span>
        <a className="navbar-brand text-white ms-2 p-0 fs-5" href="#">MovieStation</a>
        
        <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
          <ul className="navbar-nav gap-3">
            {/* <!-- Home --> */}
          <div ><Link to='/' className="text-secondary text-decoration-none">Home</Link></div>
          {/* <!-- About Us --> */}
          <div><Link to='/about' className="text-secondary text-decoration-none" >About Us</Link></div>
          
          {/* Movie */}
          <div><Link to='/allmovies' className="text-secondary text-decoration-none">All Movies</Link></div>
          {/* AddMovie */}
          <div><Link to='/addmovie' className="text-secondary text-decoration-none">Add Movie</Link></div>
          {/* Cart */}
          {/* <div><Link to='/addtocart' className="text-secondary text-decoration-none">Add to Cart{cartNavbar}</Link></div> */}

            {/* Redux */}
            <span><Link to='/cartpage' className="text-secondary text-decoration-none"><ShoppingCartIcon/>{cartItems.length}</Link></span>

           
            {/* <!-- Service --> */}
          <div><Link to='/services' className="text-secondary text-decoration-none">Service</Link></div>
            {/* <!-- Contact Us --> */}
           <div><Link to='/contact' className="text-secondary text-decoration-none">Contact Us</Link></div>

            <input type="text" name="" id="" placeholder="Search movie" 
            onChange={()=>{
              this.setState({
                query: this.search.value
            }, this.filterArray)
            }
             
          }/>

            <div><span
            onClick={()=>{
              //setMode("light")
              //true?"truedata":"falsedata"
              setMode(mode=="light"?"dark":"light")//setMode(light)
              console.log(mode)
            }}>
              {mode==="light"?<DarkModeIcon/>:<LightModeIcon/>}
              </span></div>
          </ul>
        </div>
      </div>
      </nav>
      {/* {shouldRenderHeader && <Header/>} */}
    </>
    )
}
export default NavBar