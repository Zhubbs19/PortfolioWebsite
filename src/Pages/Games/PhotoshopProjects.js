//#region imports 
import React from "react";
import NavbarComponent from "../../Components/Navbar/Navbar.js";
import './GamePages.css';
import '../../Components/App.css';
import Footer from '../../Components/Footer/Footer.js';
import { Grid } from "@mui/material"
import Box from '@mui/material/Box';
import SodaCanImg from '../../Images/Project_Images/SodaCan.png';
//#endregion imports 

export default function PhotoshopProjects() {
  return (
    document.title = "Zach Hubbard | Blender Projects",
    <div className="Global">
      <NavbarComponent />
      <h1 className="base-header">Photoshop Project - Soda Can Mockup</h1>
      <Box sx={{ flexGrow: 1 }} className="about-content">
        <Grid container spacing={5}>
          <Grid item className='media-item' xs={12} sm={6} md={6} lg={7}>
            <img className="image" src={SodaCanImg} width='1000px' height='889px'></img>
            <h3 className='subheader'>Soda Can Mockup</h3>
          </Grid>
          <Grid item className='info-item' xs={12} sm={12} md={6} lg={4}>
            <p className="text">This Soda Can Mockup was created as a first project for teaching myself Adobe Photoshop. I was inspired by tutorials and articles like these for the project:</p>
            <p><a style={{ fontWeight: "bold" }} href="https://www.youtube.com/watch?v=xX2DA6__w04">Create Soda Can Mock-up in Photoshop</a> by Design Den on YouTube</p>
            <p><a style={{ fontWeight: "bold" }} href="https://design.tutsplus.com/articles/50-great-photoshop-tutorials-for-clever-beginners--psd-785">100+ Great Photoshop Tutorials for Clever Beginners | Envato Tuts+</a> by Danny Outlaw</p>
            <h3 className="attribution-subheader" style={{ justifyContent: "left", paddingBottom: "0.5rem", paddingTop: "1rem" }}>Credits and Attribution: </h3>
            <li className='attribution-list'>Base can image used in mockup - <a href="https://www.pexels.com/photo/silver-can-in-white-background-8066771/">silver-can-in-white-background-8066771 by Mediamodifier</a> From Pexels using Creative Commons License</li>
            <li className='attribution-list'>Photo used for can effect - <a href="https://www.pexels.com/photo/water-bubbles-2853937/">Water Bubbles Photo by Sebastian Sørensen</a> From Pexels using Creative Commons License </li>
          </Grid>
        </Grid>
      </Box>
      <Footer />
    </div>
  );
}