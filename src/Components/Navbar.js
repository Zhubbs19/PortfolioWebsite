import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './Navbar.css';
import { Link } from 'react-router-dom';

function NavbarComponent() {
  return (
    <Navbar bg="dark" data-bs-theme="dark" className="navbar">
      <Container className="navbar-content">
        <text className="NavbarTitle">Zach Hubbard</text>
        <Navbar.Toggle classNamearia-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className='navbar-dropdown'>
          <Nav className="me-auto">
            <Nav.Link><Link className='link' to="/">Home</Link></Nav.Link>
            <Nav.Link className='link' href="/game-projects">Game Projects</Nav.Link>
            <Nav.Link className='link' href="/course-projects">Course Projects</Nav.Link>
            <Nav.Link className='link' href="/personal-projects">Personal Projects</Nav.Link>
            <Nav.Link className='link' href="https://drive.google.com/file/d/1OCzhkLCWfZ5nWLExsAy0WAApGkR03BHa/view?usp=sharing">Resume</Nav.Link>
            <Nav.Link className='link' href="https://www.linkedin.com/in/zachary-hubbard-39645b204/">LinkedIn</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarComponent;