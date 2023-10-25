import React from "react";
import NavbarComponent from "../../Components/Navbar/Navbar";
import './GamePages.css';
import '../../Components/App.css';
import Footer from '../../Components/Footer/Footer.js';
import BlenderDonutVideo from '../../Images/BlenderDonut.mp4'
import { Grid } from "@mui/material"
import BlenderCookies from '../../Images/Cookies2.png';

function BlenderProjects() {
  return (
    document.title = "Zach Hubbard | Blender Projects",
    <div className="Global">
      <NavbarComponent />
      <h1 className="base-header">Blender Projects</h1>
      <div className="about-content">
        <Grid container direction="row" justifyContent="center" className='about-grid'>
          <Grid item className='info-item'>
            <iframe src={BlenderDonutVideo} width='540px' height='960px'></iframe>
          </Grid>
          <Grid item className='info-item'>
            <img src={BlenderCookies} alt='Registraition Screen' width='540px' height='960px'></img>
          </Grid>
          <Grid item className='info-item'>
            <p></p>
          </Grid>
        </Grid>
      </div>
      <Footer />
    </div>
  );
}

export default BlenderProjects;