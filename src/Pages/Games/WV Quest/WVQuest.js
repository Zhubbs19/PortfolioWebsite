import React from "react";
import NavbarComponent from "../../../Components/Navbar/Navbar";
import './WVQuest.css';
import '../../../Components/App.css';
import Footer from '../../../Components/Footer/Footer.js';
import VideoEmbed from '../../../Components/EmbeddedVideo/EmbeddedVideo.js';
import { Grid } from "@mui/material"

function WVQuest() {
  return (
    document.title = "Zach Hubbard | WV Quest",
    <div className="Global">
      <NavbarComponent />
      <h1 className="base-header">WV Quest</h1>
      <div className="about-content">
      <Grid container direction="row" justifyContent="left" className='about-grid'>
      <Grid item className='grid-item'>
          <VideoEmbed videoURL="https://drive.google.com/uc?id=1Bk-RdEVw2AvhL1ETO0B1dZNKIeOdyaZE"></VideoEmbed>
      </Grid>
        <Grid item className='grid-item'>
          <p className="grid-item">Appalachian Seed-A-Pult is a 2D WebGL seed-launching game where you are tasked with engaging in dialogue and retrieving collectibles with the various ghosts in a post-apocalyptic world. This game was created as part of Mon River Games' participation in the 2023 Global Game Jam, with 4 members participating over 2 days.
            <h3 className="subheader"> Throughout the game's development, I implemented:</h3> 
            <li className='feature-list'>Collision detection for seeds colliding on fertile/infertile ground and triggering plant growth</li>
            <li className='feature-list'>Win and Fail Screens</li>
            <li className='feature-list'>Tweaks to seed launch physics</li>
            <li className='feature-list'>Audio and Asset imports</li>            
            </p>
        </Grid>
      </Grid>
      </div>
      <Footer />
    </div>
  );
}

export default WVQuest;