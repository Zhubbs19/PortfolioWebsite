import React from "react";
import { Grid, Container } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import PageWrapper from "../../Components/PageWrapper/PageWrapper";
import siteTheme from '../../SiteTheme';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../Components/App.css';
import './GamePages.css';

function SeedAPult() {
  return (
    <ThemeProvider theme={siteTheme}>
      <PageWrapper title="Zach Hubbard | Seed-A-Pult">
        <h1 className="base-header">Appalachian Seed-A-Pult - 2023 Global Game Jam</h1>

        <Container maxWidth="xl" className="about-content">
          <Grid container spacing={4} className='about-grid'>
            <Grid item xs={12} md={8}>
              <div className="media-item">
                <iframe 
                  className="responsive-iframe"
                  src="https://www.youtube.com/embed/uF1FGmbfRDQ" 
                  title="Appalachian Seed-A-Pult Demo - Global Game Jam 2023" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                  referrerPolicy="strict-origin-when-cross-origin" 
                  allowFullScreen
                />
              </div>
            </Grid>
            <Grid item xs={12} md={12}>
              <div className='info-item'>
                <p>
                  Appalachian Seed-A-Pult is a 2D WebGL seed-launching game where you are tasked with catapulting a seed to the correct type of soil where it is fertile and is able to grow.
                  This game was created in the Unity Game Engine through Mon River Games' participation in the 2023 Global Game Jam, where the theme was "Roots".
                </p>
                
                <h3 className="subheader">Throughout the Game's development, I implemented:</h3>
                <ul className="feature-list">
                  <li className='feature'>Collision detection for seeds colliding on fertile/infertile ground and triggering plant growth</li>
                  <li className='feature'>Win and Fail Screens</li>
                  <li className='feature'>Tweaks to seed launch physics</li>
                  <li className='feature'>Audio and Asset imports</li>
                </ul>
                
                <h3 className="subheader">All asset attributions can be found on the game's itch.io page or game jam page linked below.</h3>
                <a style={{ fontWeight: "bold" }} href="https://globalgamejam.org/games/2023/appalachian-seed-pult">Appalachian Seed-A-Pult - Global Game Jam Submission</a>
              </div>
            </Grid>
          </Grid>

          <Grid container spacing={2} sx={{ mt: 4 }}>
            <Grid item xs={12}>
              <h3 className="attribution-header">2023 Global Game Jam Participants</h3>
              <ul className='attribution-list'>
                <li>Heather Cole (art and asset creation)</li>
                <li>Zachary Hubbard (programming)</li>
                <li>Tessla Muir (programming)</li>
                <li>Joshua Robinson (programming support and audio asset sourcing)</li>
                <li>Ryan Lee Eicheldinger (helped with game ideation)</li>
              </ul>
              
              <iframe 
                style={{ paddingTop: "2rem", border: "none" }} 
                src="https://itch.io/embed/1911063" 
                width="552" 
                height="167"
                title="Appalachian Seed-A-Pult on itch.io"
              >
                <a href="https://gdimwvu.itch.io/appalachian-seed-a-pult">Appalachian Seed-A-Pult by GDIM</a>
              </iframe>
            </Grid>
          </Grid>
        </Container>
      </PageWrapper>
    </ThemeProvider>
  );
}

export default SeedAPult;