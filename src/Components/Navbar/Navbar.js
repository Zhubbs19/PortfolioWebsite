import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './Navbar.css';
import logoImg from '../../Images/Logos/logo.svg'

function NavbarComponent() {
  return (
    <Navbar collaspeOnSelect expand="lg" bg="dark" data-bs-theme="dark" className="navbar">
      <a href="/"><img className="NavbarBrand" href="/" src={logoImg} width="64" height="64"></img></a>
      <text className="NavbarTitle">
        <Nav.Link className='link' href="/">Zach Hubbard</Nav.Link></text>
        <Navbar.Toggle classNamearia-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className='navbar-dropdown'>
          <Nav className='mr-auto'>
            <Nav.Link className='link' href="/">Home</Nav.Link>
            <Nav.Link className='link' href="/#game-projects">Game/Personal Projects</Nav.Link>
            <Nav.Link className='link' href="/#course-projects">Course Projects</Nav.Link>
            <Nav.Link className='link' href="/#experience">Experience</Nav.Link>
            <Nav.Link className='link' href="https://drive.google.com/file/d/1OCzhkLCWfZ5nWLExsAy0WAApGkR03BHa/view?usp=sharing">Resume</Nav.Link>
            <Nav.Link className='link' href="https://www.linkedin.com/in/zachary-hubbard-39645b204/">LinkedIn</Nav.Link>
          </Nav>
        </Navbar.Collapse>
    </Navbar>
  );
}

export default NavbarComponent;