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
            <Nav.Link><Link className='link' to="/">Home</Link></Nav.Link>
            <Nav.Link><Link className='link' to="/game-projects">Game Projects</Link></Nav.Link>
            <Nav.Link><Link className='link' to="/course-projects">Course Projects</Link></Nav.Link>
            <Nav.Link><Link className='link' to="https://docs.google.com/document/d/1H1XwJ3p6x9V9Zm2vF0q4r6uQJXy5Yb1j/edit?usp=sharing&ouid=116077486025085684967&rtpof=true&sd=true" target="_blank">Resume</Link></Nav.Link>
            <Nav.Link><Link className='link' to="https://www.linkedin.com/in/zachary-hubbard-39645b204/" target="_blank">LinkedIn</Link></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarComponent;