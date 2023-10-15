import React from "react";
import NavbarComponent from "../../../Components/Navbar/Navbar";
import Footer from '../../../Components/Footer/Footer.js';
import VideoEmbed from '../../../Components/EmbeddedVideo/EmbeddedVideo.js';
import { Grid } from "@mui/material"
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../../Components/App.css';
import '../GamePages.css';

function SeedAPult() {
  return (
    document.title = "Zach Hubbard | Seed-A-Pult",
    <div className="Global">
      <NavbarComponent />
      <h1 className="base-header">Appalachian Seed-A-Pult</h1>
      <div className="about-content">
        <Grid container direction="row" justifyContent="center" className='about-grid'>
          <Grid item className='grid-item'>
            <VideoEmbed videoURL="https://drive.google.com/uc?id=1Bk-RdEVw2AvhL1ETO0B1dZNKIeOdyaZE"></VideoEmbed>
          </Grid>
          <Grid item className='grid-item'>
            Appalachian Seed-A-Pult is a 2D WebGL seed-launching game where you are tasked with launching a seed to the correct location where it is fertile and can grow. This game was created through Mon River Games&apos; participation in the 2023 Global Game Jam, with 4 members participating over 2 days.
              <h3 className="subheader"> Throughout the game &apos; development, I implemented:</h3>
              <li className='feature-list'>Collision detection for seeds colliding on fertile/infertile ground and triggering plant growth</li>
              <li className='feature-list'>Win and Fail Screens</li>
              <li className='feature-list'>Tweaks to seed launch physics</li>
              <li className='feature-list'>Audio and Asset imports</li>
          </Grid>
        </Grid>
      </div>
      <Footer />
    </div>
  );
}

export default SeedAPult;