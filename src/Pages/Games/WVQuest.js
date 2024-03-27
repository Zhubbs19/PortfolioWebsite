import React from "react";
import NavbarComponent from "../../Components/Navbar/Navbar";
import './GamePages.css';
import '../../Components/App.css';
import Footer from '../../Components/Footer/Footer.js';
import { Grid } from "@mui/material"
import WVQuestRegistration from '../../Images/RegistraitionWVQuest.PNG';
import WVQuestCamera from '../../Images/WVQuestCameraScreen.PNG';

function WVQuest() { // Handles the project page for WV Quest App
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
                exhibits, prompting the user with a minigame based on the exhibit</p>
                <p>This project was developed in Unity and uses a Firebase realtime database
                to store user data. The project was worked on in a seven-person group
                as part of my West Virginia University Senior Capstone project.</p>
                <h3 className="subheader"> Throughout continuing the app&apos;s development, I implemented:</h3>
                <li className='feature'>Unity and Firebase Integration</li>
                <li className='feature'>User/Group Registration and Login</li>
                <li className='feature'>Creation of a Switchboard Minigame Prototype</li>
                <li className='feature'>Leaderboard System</li>
                <li className='feature'>UpdatedQR scanning system.</li>
          </Grid>
          </Grid>
      </div>
      <Footer />
    </div>
  );
}
export default WVQuest;