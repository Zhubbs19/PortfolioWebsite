import React from "react";
import NavbarComponent from "../../Components/Navbar/Navbar";
import './CourseProjects.css';
import '../../Components/App.css';
import Footer from '../../Components/Footer/Footer.js';
import { Grid } from "@mui/material"
import HighBytesOSImg from "../../Images/HighBytes.png";

function HighBytesOS() {
  return (
    document.title = "Zach Hubbard | WV Quest",
    <div className="Global">
      <NavbarComponent />
      <h1 className="base-header">WV Quest - State Musuem Capstone Project</h1>
      <div className="about-content">
      <Grid container direction="row" justifyContent="left" className='about-grid'>
      <Grid item className='about-item'>
        <img className='about-item' src={HighBytesOSImg} alt='High-Bytes OS' width='600px' height='800px'></img>
      </Grid>
        <Grid item className='grid-item'>
          <p className="grid-item">High-Bytes OS was a simple C-based Operating System created as part of a group project for an operating systems course.  
          The OS uses a command-line terminal in order to execute commands and includes functionality for the following:
            <li className='feature-list'>Process management (Creation of Process Control Blocks using a priority- based queue)</li>
            <li className='feature-list'>Blocking, readying, and deletion of processes</li>
            <li className='feature-list'>Memory allocation and deallocation of processes</li>
            <li className='feature-list'>Setting and retrieving the date and time</li>
            <li className='feature-list'>Alarm Creation</li>                
            </p>
        </Grid>
      </Grid>
      </div>
      <Footer />
    </div>
  );
}

export default HighBytesOS;