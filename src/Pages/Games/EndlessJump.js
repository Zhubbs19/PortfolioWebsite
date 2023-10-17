import React from "react";
import NavbarComponent from "../../Components/Navbar/Navbar";
import './GamePages.css';
import '../../Components/App.css';
import Footer from '../../Components/Footer/Footer.js';
import { Grid } from "@mui/material"

function WVQuest() {
  return (
    document.title = "Zach Hubbard | Endless Jump",
    <div className="Global">
      <NavbarComponent />
      <h1 className="base-header">Endless Jump</h1>
      <div className="about-content">
      <Grid container direction="row" justifyContent="left" className='about-grid'>
        <Grid item className='grid-item'>
          <p className="grid-item">Endless jump is a 2D-platforming game inspired by popular mobile games such as doodle jump. 
          The main objective is to achieve as high a score as possible by jumping from platform to platform. 
          Green platforms allow the player to bounce higher, red platforms delete under the player, 
          and blue platforms give the player a jump boost to ascend higher, inscreasing their score. </p>

          <p className="grid-item"> The game was created using the Unity Game Engine 
          and was created as part of Mon River Games Fall 2022 Session and MDIA 472 Capstone Course. </p>
        </Grid>
      </Grid>
      </div>
      <Footer />
    </div>
  );
}

export default WVQuest;