//#region imports 
import React from "react";
import NavbarComponent from "../../Components/Navbar/Navbar";
import './CourseProjects.css';
import '../../Components/App.css';
import Footer from '../../Components/Footer/Footer.js';
import { Grid } from "@mui/material"
import HighBytesOSImg from "../../Images/Project_Images/HighBytes.png";
//#endregion

function HighBytesOS() {
  return (
    document.title = "Zach Hubbard | High-Bytes OS - CS 450 Project",
    <div className="Global">
      <NavbarComponent />
      <h1 className="base-header">High-Bytes OS - CS 450 Semester Group Project</h1>
      <div className="about-content">
        <Grid container spacing={6} direction="row" justifyContent="left" className='about-grid'>
          <Grid item className='media-item' xs={12} sm={12} md={12} lg={12} xl={6}>
            <img className='image' src={HighBytesOSImg} alt='High-Bytes OS' width='500px' height='889px'></img>
            <p className="attribution"> - High-Bytes Command-Line UI (above) created by group member Jeryle Begay. </p>
          </Grid>
          <Grid item className='info-item' xs={12} sm={12} md={12} lg={12} xl={6}>
            <p>High-Bytes OS was a simple C-based Operating System created as part of a 3 - group project for an operating systems course.
              The OS uses a command-line terminal in order to execute commands and includes functionality for the following:</p>
            <li className='feature-list'>Process management (Creation of Process Control Blocks using a priority- based queue)</li>
            <li className='feature-list'>Blocking, readying, and deletion of processes</li>
            <li className='feature-list'>Memory allocation and deallocation of processes</li>
            <li className='feature-list'>Setting and retrieving the date and time</li>
            <li className='feature-list'>Alarm Creation</li>
          </Grid>
        </Grid>
      </div>
      <Footer />
    </div>
  );
}

export default HighBytesOS;