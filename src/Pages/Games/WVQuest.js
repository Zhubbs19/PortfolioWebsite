import React from "react";
import NavbarComponent from "../../Components/Navbar/Navbar";
import './GamePages.css';
import '../../Components/App.css';
import Footer from '../../Components/Footer/Footer.js';
import { Grid } from "@mui/material"
import WVQuestRegistration from '../../Images/RegistraitionWVQuest.PNG';
import WVQuestCamera from '../../Images/WVQuestCameraScreen.PNG';

function WVQuest() {
  return (
    document.title = "Zach Hubbard | WV Quest",
    <div className="Global">
      <NavbarComponent />
      <h1 className="base-header">WV Quest - State Musuem Capstone Project</h1>
      <div className="about-content">
        <Grid container className='about-grid' spacing={4}>
          <Grid item className='media-item' xs={12} sm={6} md={6} lg={4}>
            <img className="image" src={WVQuestRegistration} alt='Camera Screen' width='404px' height='795px'></img>
          </Grid>
          <Grid item className='media-item' xs={12} sm={6} md={6} lg={4}>
            <img className="image" src={WVQuestCamera} alt='Camera Screen' width='404px' height='795px'></img>
          </Grid>
          <Grid item className='info-item' xs={12} sm={12} md={6} lg={4}>
            <p> WV Quest is a interactive educational app created in collaboration with the West
                Virginia State Musuem, West Virginia University, and Mon River Games.</p>
                <p>The app allows visitors of the museum, either individually or as part of a group, to scan QR codes within the museum at particular
                exhibits, prompting the user with a minigame based on the exhibit. Completing the minigame increases the user&apos;s score.</p>
                <p>This project was developed in Unity and uses a Firebase realtime database
                to store user data. The project was worked on in a seven-person group
                as part of my West Virginia University Senior Capstone project. 
                A previous iteration of the app was created in 2021-2022 and development was continued by my group in 2022-2023.</p>
                I am continuing to mentor the current 2023-2024 capstone group with Mon River Games as they continue development of the app.
                <h3 className="subheader"> Throughout the game&apos;s development, I implemented:</h3>
                <li className='feature-list'>Unity and Firebase Integration</li>
                <li className='feature-list'>User/Group Registration and Login</li>
                <li className='feature-list'>Creation of a Switchboard Minigame Prototype</li>
                <li className='feature-list'>Leaderboard System</li>
                <li className='feature-list'>Reimplementation of QR scanning system.</li>
          </Grid>
          </Grid>
      </div>
      <Footer />
    </div>
  );
}
export default WVQuest;