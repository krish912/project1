import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {  Link } from 'react-router-dom';



function Header() {
 
  return (
     <div>
   
    <Navbar expand="lg" className="bg-body-tertiary  fixed-top" style={{display:"flex"}}>
      <Container>
      <h3>ADOPET</h3>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Nav className="me-auto">
         
            <Nav.Link  as={Link} to="/" >Home</Nav.Link>
            <Nav.Link as={Link} to="/about" >About</Nav.Link>
            <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
            <Nav.Link  as={Link} to="/ngo">NGO</Nav.Link>
            <strong><Nav.Link as={Link} to="/donate">Donate</Nav.Link ></strong>
             </Nav>
          <Navbar.Collapse id="basic-navbar-nav"  className="justify-content-end">
          
          <Nav.Link href="#link">sign in</Nav.Link >
          
          
        </Navbar.Collapse>
      </Container>
     
    </Navbar>
     
   
     
    </div>
    
  );
}

export default Header;