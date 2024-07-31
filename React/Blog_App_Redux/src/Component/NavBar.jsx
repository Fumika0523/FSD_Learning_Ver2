import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useSelector } from 'react-redux';
import { Link,useLocation } from "react-router-dom"


function NavBar() {
  const location = useLocation();
  console.log(location)
  const includedPaths = ["/","/addblog","/allblogs"] 

  const shouldRenderHeader = includedPaths.includes(location.pathname)
  console.log(shouldRenderHeader)

  //subscribing to the store
  const blogItems=useSelector(store=>store.blog.items)
  console.log(blogItems.length)

  return (
    <Navbar expand="lg" className="navbar navbar-light bg-light">
      <Container fluid >
        <Navbar.Brand >Traveling Blog</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-na">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/cartpage">Redux {blogItems.length}</Nav.Link>
            <Nav.Link as={Link} to="/allblogs">All Blogs</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;