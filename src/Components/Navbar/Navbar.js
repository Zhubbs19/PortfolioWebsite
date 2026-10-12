import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';
import logoImg from '../../Images/Logos/SiteLogoNew.svg';

/*
  Navbar.js - Contains the narbar component present on the top of all my pages for navigation.
  Navbar component from React Bootstrap used. Internal links use the router so they work
  under any base path and highlight the current section.
*/
const RESUME_URL = 'https://drive.google.com/file/d/1OCzhkLCWfZ5nWLExsAy0WAApGkR03BHa/view?usp=sharing';
const GITHUB_URL = 'https://github.com/Zhubbs19';
const LINKEDIN_URL = 'https://www.linkedin.com/in/zachary-hubbard-39645b204/';

function NavbarComponent() {
  const { pathname } = useLocation();
  const onHome = pathname === '/';

  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" data-bs-theme="dark" className="navbar">
      <Link to="/" aria-label="Zach Hubbard - Home"><img className="NavbarBrand" src={logoImg} width="64" height="64" alt="" /></Link>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav" className='navbar-dropdown'>
        <Nav className='mr-auto'>
          <Nav.Link as={Link} className='link' to="/" active={onHome} aria-current={onHome ? 'page' : undefined}>Home</Nav.Link>
          <Nav.Link as={Link} className='link' to="/game-projects" active={!onHome} aria-current={!onHome ? 'page' : undefined}>Projects</Nav.Link>
          <Nav.Link className='link' href={RESUME_URL} target="_blank" rel="noopener noreferrer">Resume</Nav.Link>
          <Nav.Link className='link' href={GITHUB_URL} target="_blank" rel="noopener noreferrer">GitHub</Nav.Link>
          <Nav.Link className='link' href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer">LinkedIn</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavbarComponent;
