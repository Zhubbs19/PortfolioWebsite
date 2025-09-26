import React from "react";
import { Grid, Container } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import PageWrapper from "../../Components/PageWrapper/PageWrapper";
import siteTheme from '../../SiteTheme';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../Components/App.css';
import './GamePages.css';

function AWeatheredHome() {
  return (
    <ThemeProvider theme={siteTheme}>
      <PageWrapper title="Zach Hubbard | A Weathered Home Group Project">
        <h1 className="base-header">A Weathered Home</h1>

        <Container maxWidth="xl" className="about-content">
          {/* Video and Description Row */}
          <Grid container spacing={4} className='about-grid'>
            <Grid item xs={12} md={6}>
              <div className="media-item">
                <iframe 
                  className="responsive-iframe"
                  src="https://www.youtube.com/embed/33XtXKlbD4c" 
                  title="A Weathered Home - Gameplay Slice Demo" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                  referrerPolicy="strict-origin-when-cross-origin" 
                  allowFullScreen
                />
              </div>
            </Grid>
            
            <Grid item xs={12} md={6}>
              <div className='info-item'>
                <p>
                  A group project and game proof of concept completed as part of 
                  my GAME 714 - Ludic Methodology course. In A Weathered Home, the player must prep and repair their home for intense weather events. 
                  The proof of concept includes 3 turns of gameplay, each with its own weather event: an earthquake, dust storm, and forest fire. 
                  The weather damages the player's home components (Roof, Walls, Foundation, and Garden) that they must keep standing by using and 
                  buying various repair resources at their disposal with the stamina and money they have each turn.
                </p>
                <p>The game was created in Unreal Engine 5. Autodesk Maya was used for 3D asset creation and Adobe Photoshop for 2D asset creation and UI.</p>
              </div>
            </Grid>
          </Grid>

          {/* Blueprint Sections */}
          <Grid container spacing={4} sx={{ mt: 2 }}>
            <Grid item xs={12} md={6}>
              <h3 className="subheader">Forest Fire Weather Event - Blueprint Event Graph</h3>
              <iframe 
                src="https://blueprintue.com/render/h401jhuc/" 
                allowFullScreen 
                className="responsive-iframe"
                title="Forest Fire Blueprint"
              />
            </Grid>
            
            <Grid item xs={12} md={6}>
              <h3 className="subheader">Get Repair Totals Blueprint Function</h3>
              <iframe 
                src="https://blueprintue.com/render/8-ztj4qp/" 
                allowFullScreen 
                className="responsive-iframe"
                title="Repair Totals Blueprint"
              />
            </Grid>
          </Grid>

          {/* Credits Section */}
          <Grid container spacing={2} sx={{ mt: 4 }}>
            <Grid item xs={12}>
              <h3 className="attribution-header">Credits and Attributions</h3>
              
              <div className="info-item">
                <ul className="attribution-list">
                  <li>All Blueprint scripting created by Zach Hubbard</li>
                  <li>3D House and Shop Model created by Shuhan Wei</li>
                  <li>All UI Art, Backgrounds, and Icons created by Yoru Chen</li>
                </ul>

                <h4 className="attribution-subheader">Sounds</h4>
                <ul className="attribution-list">
                  <li><a href="https://freesound.org/people/AyaDrevis/sounds/677404/">Earthquake.mp3 by AvaDrevis from Freesound.org</a></li>
                  <li><a href="https://freesound.org/people/slugzilla/sounds/112296/">desertwind1FINAL.wav by slugzilla from Freesound.org</a></li>
                  <li><a href="https://freesound.org/people/yaros_nov/sounds/434026/">Fire, Campfire, Bonfire by yaros_nov from Freesound.org</a></li>
                  <li><a href="https://freesound.org/people/BurghRecords/sounds/434712/">Woodland Ambience Sound Effect by BurghRecords from Freesound.org</a></li>
                  <li><a href="https://freesound.org/people/StavSounds/sounds/701704/">ui-submit.wav by StavSounds from Freesound.org</a></li>
                  <li><a href="https://freesound.org/people/StavSounds/sounds/546078/">button-pressed.wav by StavSounds from Freesound.org</a></li>
                  <li><a href="https://freesound.org/people/StavSounds/sounds/546079/">button-selected.wav by StavSounds from Freesound.org</a></li>
                </ul>

                <h4 className="attribution-subheader">Assets</h4>
                <ul className="attribution-list">
                  <li><a href="https://www.fab.com/listings/d2c038a0-302b-4197-b22b-b6a1b21a703b">Low Poly Nature Pack Lite from Fab</a></li>
                  <li><a href="https://www.fab.com/listings/52529a12-e88e-41a0-8834-b87306f20c24">FANTASTIC - Village Pack from Fab</a></li>
                </ul>

                <h4 className="attribution-subheader">Particles</h4>
                <ul className="attribution-list">
                  <li>Fountain particle from Unreal Engine DefaultAssets used in creation of Dust particle effect.</li>
                  <li><a href="https://www.fab.com/listings/c5b0270a-a295-4644-a4be-42cb1e56a197">NFire_BP_04 particle effect from M5 VFX Vol2. Fire and Flames(Niagara) by M5VFX</a></li>
                </ul>

                <h4 className="attribution-subheader">Fonts</h4>
                <ul className="attribution-list">
                  <li><a href="https://fonts.google.com/specimen/Special+Elite">Special Elite Font by Astigmatic from Google Fonts</a></li>
                </ul>
              </div>
            </Grid>
          </Grid>
        </Container>
      </PageWrapper>
    </ThemeProvider>
  );
}

export default AWeatheredHome;