import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './Navbar.css';
import { Link } from 'react-router-dom';

function NavbarComponent() {
  return (
    <Navbar expand="lg" className="navbar">
      <Container className="navbar-content">
        <text className="NavbarTitle">Zach Hubbard</text>
        <Navbar.Toggle classNamearia-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link><Link to="/">Home</Link></Nav.Link>
            <Nav.Link><Link to="/game-projects">Game Projects</Link></Nav.Link>
            <Nav.Link><Link to="/course-projects">Course Projects</Link></Nav.Link>
            <Nav.Link href="https://drive.google.com/file/d/1OCzhkLCWfZ5nWLExsAy0WAApGkR03BHa/view?usp=drive_link">Resume</Nav.Link>
            <Nav.Link href="https://www.linkedin.com/in/zachary-hubbard-39645b204/">LinkedIn</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarComponent;