//#region imports 
import React from "react";
import NavbarComponent from "../../Components/Navbar/Navbar";
import './GamePages.css';
import '../../Components/App.css';
import Footer from '../../Components/Footer/Footer.js';
import { Grid } from "@mui/material"
import WVQuestRegistration from '../../Images/Project_Images/RegistrationWVQuest.PNG';
import WVQuestCamera from '../../Images/Project_Images/WVQuestCameraScreen.PNG';
//#endregion imports 

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
              as part of my West Virginia University Senior Capstone project,
              continuing the project from the previous years&apos; group.</p>
            <a style={{ fontWeight: "bold" }} href="https://www.monrivergames.com/wvquest">Mon River Games - WV Quest Page</a>
            <h3 className="subheader"> Throughout the app&apos;s development, I have implemented:</h3>
            <li className='feature'>Unity and Firebase integration</li>
            <li className='feature'>User/Group registration and login</li>
            <li className='feature'>Creation of a Switchboard minigame prototype</li>
            <li className='feature'>A leaderboard displaying the top 8 players&apos; scores across minigames.</li>
            <li className='feature'>Improved QR code scanning system.</li>
            <li className='feature'>System for efficently loading/unloading UI elements.</li>
            <li className='feature'>User persistence mechanics.</li>
          </Grid>
        </Grid>
      </div>
      <Footer />
    </div>
  );
}
export default WVQuest;