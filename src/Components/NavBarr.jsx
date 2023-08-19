import React from "react";
import { Container, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { Navbar } from "react-bootstrap";
import { HashLink } from "react-router-hash-link";
const NavBarr = () => {
  return (
    <>
      <Navbar bg="dark"  expand="lg">
        <Container id="Navbar">
        <NavLink to="/" >
        
          <img src="images/618b5b33c589e179c2c8b27c_Shiloh New Logo-01-p-3200.png" />
        </NavLink>
        <Navbar.Toggle aria-controls="basic-navbar-nav"/>
        <Navbar.Collapse  id="basic-navbar-nav">
          <Nav className="navlinks ">
          <HashLink to="/#latest">latest</HashLink>
          <HashLink to="/#process">process</HashLink>
          <HashLink to="/#service">Services</HashLink>
          <HashLink to="/#contact">Contact Us</HashLink>
          <NavLink to="/Projects">Projects</NavLink>
          </Nav>
       
        </Navbar.Collapse>
        
        </Container>
      </Navbar>



     
    </>
  );
};

export default NavBarr;
