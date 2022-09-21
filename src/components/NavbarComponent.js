import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

const NavbarComponent = () => {
  return (
    <Navbar
      style={{
        background: "linear-gradient(45deg, #85FFBD 0%, #FFFB7D 100%)",
        color: "#367E18",
      }}
      sticky="top"
      expand="lg"
    >
      <Container fluid >
        <Navbar.Brand href="#home" className="fs-2 px-2">
          Personal-Portfolio
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav className="mx-4 fs-5">
            <Nav.Link className="mx-3" href="#home">
              Home
            </Nav.Link>
            <Nav.Link className="mx-3" href="#education">
              Education
            </Nav.Link>
            <Nav.Link className="mx-3" href="#skills">
              Skills
            </Nav.Link>
            <Nav.Link className="mx-3" href="#projects">
              Projects
            </Nav.Link>
            <Nav.Link className="mx-3" href="#contact">
              Contact me
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarComponent;
