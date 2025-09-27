import React from "react";
import { Grid, Container } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import PageWrapper from "../../Components/PageWrapper/PageWrapper";
import siteTheme from '../../SiteTheme';
import '../../Components/App.css';
import './GamePages.css';
import WVQuestRegistration from '../../Images/Project_Images/RegistrationWVQuest.PNG';
import WVQuestCamera from '../../Images/Project_Images/WVQuestCameraScreen.PNG';

function WVQuest() {
  return (
    <ThemeProvider theme={siteTheme}>
      <PageWrapper title="Zach Hubbard | WV Quest">
        <h1 className="base-header">WV Quest - State Museum Capstone Project</h1>

        <Container maxWidth="xl" className="about-content">
          <Grid container spacing={4} className='about-grid'>
            <Grid item xs={12} md={4}>
              <div className="media-item">
                <img 
                  className="responsive-image" 
                  src={WVQuestRegistration} 
                  alt='WV Quest Registration Screen'
                />
                <img 
                  className="responsive-image" 
                  src={WVQuestCamera} 
                  alt='WV Quest Camera Screen'
                  style={{ marginTop: '1.5rem' }}
                />
              </div>
            </Grid>
            <Grid item xs={12} md={6}>
              <div className='info-item'>
                <p>
                  WV Quest is an interactive educational app created in collaboration with the West
                  Virginia State Museum, West Virginia University, and Mon River Games.
                </p>
                <p>
                  The app allows visitors of the museum, either individually or as part of a group, to scan QR codes within the museum at particular
                  exhibits, prompting the user with a minigame based on the exhibit.
                </p>
                <p>
                  This project was developed in Unity and uses a Firebase realtime database
                  to store user data. The project was worked on in a seven-person group
                  as part of my West Virginia University Senior Capstone project,
                  continuing the project from the previous years' group.
                </p>
                <a style={{ fontWeight: "bold" }} href="https://www.monrivergames.com/wvquest">Mon River Games - WV Quest Page</a>
                
                <h3 className="subheader">Throughout the app's development, I have implemented:</h3>
                <ul className="feature-list">
                  <li className='feature'>Unity and Firebase integration</li>
                  <li className='feature'>User/Group registration and login</li>
                  <li className='feature'>Creation of a Switchboard minigame prototype</li>
                  <li className='feature'>A leaderboard displaying the top 8 players' scores across minigames</li>
                  <li className='feature'>Improved QR code scanning system</li>
                  <li className='feature'>System for efficiently loading/unloading UI elements</li>
                  <li className='feature'>User persistence mechanics</li>
                </ul>
              </div>
            </Grid>
          </Grid>
        </Container>
      </PageWrapper>
    </ThemeProvider>
  );
}

export default WVQuest;