import React from "react";
import NavbarComponent from "../../Components/Navbar/Navbar";
import Footer from '../../Components/Footer/Footer.js';
import { Grid } from "@mui/material"
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../Components/App.css';
import './GamePages.css';

function SeedAPult() { // Handles the project page for Appalachian Seed-A-Pult
  return (
    document.title = "Zach Hubbard | Seed-A-Pult", 
    <div className="Global">
      <NavbarComponent />
      <h1 className="base-header">Appalachian Seed-A-Pult</h1>
      <div className="about-content">
        <Grid container spacing={6} direction="row" className='about-grid'>
          <Grid item className='media-item' xs={12} sm={12} md={12} lg={12} xl={6}>
            <iframe src="https://drive.google.com/uc?id=126AtST8CIzQISODfxTkthe8DrFR7xvrU" width="800px" height="600px" sandbox></iframe>
          </Grid>
          <Grid item className='info-item' xs={12} sm={12} md={12} lg={12} xl={6}>
            <p>Appalachian Seed-A-Pult is a 2D WebGL seed-launching game where you are tasked with catapulting a seed to the correct type of soil where it is fertile and is able to grow. 
            This game was created in the Unity Game Engine through Mon River Games&apos; participation in the 2023 Global Game Jam.</p>
              <h3 className="subheader"> Throughout the Game&apos;s development, I implemented:</h3>
              <li className='feature-list'>Collision detection for seeds colliding on fertile/infertile ground 
              and triggering plant growth</li>
              <li className='feature-list'>Win and Fail Screens</li>
              <li className='feature-list'>Tweaks to seed launch physics</li>
              <li className='feature-list'>Audio and Asset imports</li>
              <iframe src="https://itch.io/embed/1911063" width="552" height="167"><a href="https://gdimwvu.itch.io/appalachian-seed-a-pult">Appalachian Seed-A-Pult by GDIM</a></iframe>
          </Grid>
        </Grid>
      </div>
      <Footer />
    </div>
  );
}

export default SeedAPult;