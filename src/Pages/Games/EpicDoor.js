import React from "react";
import { Grid, Container } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import PageWrapper from "../../Components/PageWrapper/PageWrapper";
import siteTheme from '../../SiteTheme';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../Components/App.css';
import './GamePages.css';
import EpicDoorImg from '../../Images/Project_Images/EpicDoor.png';

function EpicDoor() {
  return (
    <ThemeProvider theme={siteTheme}>
      <PageWrapper title="Zach Hubbard | Epic Door">
        <h1 className="base-header">Epic Door - Unreal Engine 5.4</h1>

        <Container maxWidth="xl" className="about-content">
          <Grid container spacing={4} className='about-grid'>
            <Grid item xs={12} md={6}>
              <div className="media-item">
                <iframe 
                  className="responsive-iframe"
                  src="https://www.youtube.com/embed/mhS2s4bzIAk" 
                  title="GAME 710 Epic Door Project" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                  referrerPolicy="strict-origin-when-cross-origin" 
                  allowFullScreen
                />
              </div>
            </Grid>
            <Grid item xs={12} md={6}>
              <div className='info-item'>
                <p>Vault-style door opening cinematic created in Unreal Engine 5 for my GAME 710 - Game Art: Engine Pipelines and Practices course.</p>
              </div>
            </Grid>
          </Grid>

          <Grid container spacing={4} sx={{ mt: 2 }}>
            <Grid item xs={12}>
              <div className="media-item">
                <img 
                  src={EpicDoorImg} 
                  alt="Epic Door Screenshot"
                  className="responsive-image"
                  style={{ maxWidth: '800px', margin: '0 auto', display: 'block' }}
                />
              </div>
            </Grid>
          </Grid>

          <Grid container spacing={2} sx={{ mt: 4 }}>
            <Grid item xs={12}>
              <h3 className="attribution-header">Credits and Attributions</h3>
              
              <h4 className="attribution-subheader">Materials and Textures</h4>
              <ul className="attribution-list">
                <li><a href="https://substance3d.adobe.com/community-assets/assets/14fb5acfc679523f45d5b223eee64b45b5341ecd">Stone Wall by Ben Rosendahl from Adobe Substance 3D</a></li>
                <li><a href="https://substance3d.adobe.com/community-assets/assets/d7b1d54e2ea126228b3e3357b43d26b19833d7ff">Stone Floor Tiles by Shivam Shakya from Adobe Substance 3D</a></li>
                <li><a href="https://substance3d.adobe.com/community-assets/assets/59b5660de1ff1c92e1b4771c1aa3e2150d705c00">Gold Clean by KANISHKA A from Adobe Substance 3D</a></li>
                <li><a href="https://substance3d.adobe.com/community-assets/assets/9802692acc5108ea504175264f49a867ff7ac73c">Cobblestone Polar by farshad asbaghi from Adobe Substance 3D</a></li>
              </ul>

              <h4 className="attribution-subheader">Audio</h4>
              <ul className="attribution-list">
                <li><a href="https://freesound.org/people/tyops/sounds/577489/">Mystery Adventure Intro by tyops from Freesound.org</a></li>
                <li><a href="https://freesound.org/people/OGsoundFX/sounds/423146/">Secret door - Fantasy - WAV by OGsoundFX from Freesound.org</a></li>
              </ul>

              <h4 className="attribution-subheader">Assets from Quixel Megascans and Fab</h4>
              <ul className="attribution-list">
                <li><a href="https://www.fab.com/listings/c5b0270a-a295-4644-a4be-42cb1e56a197">Fire Particles from M5 VFX Vol2</a></li>
                <li><a href="https://www.fab.com/listings/1f65d477-f44e-4ccb-95c1-788c99e33b56">Norway Maple from Quixel Megascans</a></li>
                <li><a href="https://www.fab.com/listings/ca27cf6f-09bd-47b1-a43f-ee605318d902">Stone Pavement Material from Quixel Megascans</a></li>
                <li><a href="https://www.fab.com/listings/81bc7ba6-4686-4f94-9d2b-83eb1fdc4079">Common Hazel from Quixel Megascans</a></li>
                <li><a href="https://www.fab.com/listings/53c5c103-2495-45a0-b04d-a54e413fe56a">Small Tundra Rock from Quixel Megascans</a></li>
                <li><a href="https://www.fab.com/listings/70b6ac17-a842-48d9-81e4-41f80fe160d9">Grass Clumps from Quixel Megascans</a></li>
                <li><a href="https://www.fab.com/listings/5848d16a-f6ab-45a7-b69f-fe21dcbe4669">Wild Grass from Quixel Megascans</a></li>
                <li><a href="https://www.fab.com/listings/64575651-a81e-4c59-ae38-3ad9c75f737e">Mossy Grass Material from Quixel Megascans</a></li>
                <li><a href="https://www.fab.com/listings/14bd2176-7db9-47e2-a916-2444d7631e6b">Mossy Rocky Ground from Quixel Megascans</a></li>
                <li><a href="https://www.fab.com/listings/086310be-f1d6-4b84-84d8-ae6f907df428">Mossy Stone Floor from Quixel Megascans</a></li>
                <li><a href="https://www.fab.com/listings/75a694be-c45e-4847-aa39-15883277fe93">Huge Layered Boulder from Quixel Megascans</a></li>
                <li><a href="https://www.fab.com/listings/fc964883-8b7c-4b7e-97d8-3c557078ec9b">Small Beach Rock from Quixel Megascans</a></li>
                <li><a href="https://www.fab.com/listings/01d40602-eb64-448b-af63-a7896924280a">Granite Rock from Quixel Megascans</a></li>
                <li><a href="https://www.fab.com/listings/c6758445-1e7b-4d8b-9fc7-aee875d28e69">Tundra Boulder from Quixel Megascans</a></li>
                <li><a href="https://www.fab.com/listings/51d922cf-0bfe-4db7-a19d-a89eac65ac8c">Wooden Barrel from Quixel Megascans</a></li>
                <li><a href="https://www.fab.com/listings/ea9c89c3-ccd5-492d-972b-72d58815e7fc">Wooden Chest from Quixel Megascans</a></li>
                <li>Steam from Unreal Engine Starter Content</li>
              </ul>
            </Grid>
          </Grid>
        </Container>
      </PageWrapper>
    </ThemeProvider>
  );
}

export default EpicDoor;