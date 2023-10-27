import React from "react";
import NavbarComponent from "../../Components/Navbar/Navbar";
import './GamePages.css';
import '../../Components/App.css';
import Footer from '../../Components/Footer/Footer.js';
import BlenderDonutVideo from '../../Images/BlenderDonut.mp4'
import { Grid } from "@mui/material"
import Box from '@mui/material/Box';
import BlenderCookies from '../../Images/Cookies2.png';


export default function BlenderProjects() {
  return (
    document.title = "Zach Hubbard | Blender Projects",
    <div className="Global">
      <NavbarComponent />
      <h1 className="base-header">Blender Projects</h1>
      <Box sx={{flexGrow: 1}} className="about-content">
        <Grid container spacing={4}>
          <Grid item className='media-item' xs={12} sm={6} md={6} lg={4}>
            <iframe className="responsive-iframe" src={BlenderDonutVideo} width='540px' height='960px'></iframe>
            <h3 className='subheader'>Blender Donuts</h3>
          </Grid>
          <Grid item className='media-item' xs={12} sm={6} md={6} lg={4}>
            <iframe className="image" src={BlenderCookies} width='540px' height='960px'></iframe>
            <h3 className='subheader'>Cookies and Milk Render</h3>
          </Grid>
          <Grid item className='info-item' xs={12} sm={12} md={6} lg={4}>
            <p className="text">Appalachian Seed-A-Pult is a 2D WebGL seed-launching game where you are tasked with catapulting a seed to the correct type of soil where it is fertile and is able grow. 
            This game was created in the Unity Game Engine through Mon River Games&apos; participation in the 2023 Global Game Jam, with 4 members participating over 2 days. 
            The theme of the game jam was &quot;Roots&quot;, and we decided to create a game that used both of its definitions, as the player is both rooting a seed 
            while in the backdrop of three notable locations of West Virginia for each of its three levels, where Mon River Games has its roots, namely Coopers Rock, New River Gorge,
            and Douglas Falls.</p>
          </Grid>
        </Grid>
      </Box>
      <Footer />
    </div>
  );
}