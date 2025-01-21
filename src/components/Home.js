import React from 'react';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from '../images/spe.png';
import './Home.css';
function Home() {

  return (
    <>
    <Navbar bg="dark" data-bs-theme="dark" expand="lg" className="bg-body-tertiary ">
      <Container >
      <Navbar.Brand href="#home" className="logo-container">
        <img
          alt=""
          src={logo}
          width="50"
          height="50"
          className="d-inline-block align-top logo-image"
        />
        <div className="brand-title">SRI PUSHPA EXIM</div>
      </Navbar.Brand>



        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto navbar-links">
          <Nav.Link as={Link} to="/" style={{ color: "#AF47D2" }}>HOME</Nav.Link>
          <Nav.Link as={Link} to="/about" style={{ color: "#AF47D2" }}>ABOUT</Nav.Link>
            <Nav.Link as={Link} to="/contact" style={{color:"#AF47D2"}}>CONTACT</Nav.Link>
            <NavDropdown title="PRODUCTS" id="basic-nav-dropdown" className="custom-dropdown">
              <NavDropdown.Item as={Link} to="/fruits" style={{color:"#AF47D2"}}>Agro Products</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/coconuts" style={{color:"#AF47D2"}}> Coconuts</NavDropdown.Item>
               <NavDropdown.Item as={Link} to="/spices" style={{color:"#AF47D2"}}>Spices</NavDropdown.Item>
               <NavDropdown.Item as={Link} to="/seafoods" style={{color:"#AF47D2"}}>SeaFoods</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/textiles" style={{color:"#AF47D2"}}>Textiles & Garments</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/engineering" style={{color:"#AF47D2"}}>Engineering Products</NavDropdown.Item>             
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
    
  );
}

export default Home;