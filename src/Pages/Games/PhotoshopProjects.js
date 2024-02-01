import React from "react";
import NavbarComponent from "../../Components/Navbar/Navbar.js";
import './GamePages.css';
import '../../Components/App.css';
import Footer from '../../Components/Footer/Footer.js';
import { Grid } from "@mui/material"
import Box from '@mui/material/Box';
import SodaCanImg from '../../Images/SodaCan.png';


export default function PhotoshopProjects() {
  return (
    document.title = "Zach Hubbard | Blender Projects",
    <div className="Global">
      <NavbarComponent />
      <h1 className="base-header">Photoshop Projects</h1>
      <Box sx={{flexGrow: 1}} className="about-content">
        <Grid container spacing={5}>
          <Grid item className='media-item' xs={12} sm={6} md={6} lg={7}>
            <img className="image" src={SodaCanImg} width='1000px' height='889px'></img>
            <h3 className='subheader'>Soda Can Mockup</h3>
          </Grid>
          <Grid item className='info-item' xs={12} sm={12} md={6} lg={4}>
            <h3 className='subheader' style={{justifyContent: "left"}}>Soda Can Mockup Project</h3>
            <p className="text">Soda Can Mockup was created as a first project for teaching myself Adobe Photoshop.<br></br></p>
            <h3 className="attribution-subheader" style={{justifyContent:"left", paddingBottom:"0.5rem", paddingTop:"1rem"}}>Credits and Attribution: </h3>
            <li className='attribution-list'><a href= "https://www.pexels.com/photo/silver-can-in-white-background-8066771/">silver-can-in-white-background-8066771 by Mediamodifier</a> From Pexels using Creative Commons License</li>
            <p></p>
          </Grid>
        </Grid>
      </Box>
      <Footer />
    </div>
  );
}