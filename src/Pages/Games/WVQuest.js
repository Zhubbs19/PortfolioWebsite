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
      <Grid container direction="row" justifyContent="left" className='about-grid'>
      <Grid item className='about-item'>
        <img className='about-item' src={WVQuestRegistration} alt='Registraition Screen' width='404px' height='795px'></img>
      </Grid>
      <Grid item className='about-item'>
        <img className='about-item' src={WVQuestCamera} alt='Camera Screen' width='404px' height='795px'></img>
      </Grid>
        <Grid item className='grid-item'>
          <p className="grid-item">WV Quest is a interactive app that was created in collaboration with the West 
          Virginia State Musuem in Charleston, WV. The app allows visitors of the museum, 
          either individually or as part of a group,  to scan QR codes placed throughout the museum at particular 
          exhibits that will allow them to play minigames based on the exhibit, increasing their score 
          which is shown on a leaderboard. This project was developed in Unity and uses a Firebase database 
          to store user data. The project was worked on in a small group 
          as part of my West Virginia University Senior Capstone project.  
          A previous iteration of the app was created in 2021-2022 that was continued on in my group in 2022-2023.
            <h3 className="subheader"> Throughout the game&apos;s development, I implemented:</h3> 
            <li className='feature-list'>Unity and Firebase Integration</li>
            <li className='feature-list'>User/Group Registration and Login</li>
            <li className='feature-list'>Creation of a Switchboard Minigame</li>
            <li className='feature-list'>Leaderboard System</li>
            <li className='feature-list'>Reimplementation of QR scanning system.</li>                
            </p>
        </Grid>
      </Grid>
      </div>
      <Footer />
    </div>
  );
}

export default WVQuest;