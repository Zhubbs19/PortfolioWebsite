import React from "react";
import { Grid, Container } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import PageWrapper from "../../Components/PageWrapper/PageWrapper";
import siteTheme from '../../SiteTheme';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../Components/App.css';
import './GamePages.css';
import PillarImg from '../../Images/Project_Images/PillarInteractive.png';
import CollapsingFloorImg from '../../Images/Project_Images/CollapsingTreasureFloor.png';

function EscapeRoom() {
  return (
    <ThemeProvider theme={siteTheme}>
      <PageWrapper title="Zach Hubbard | Depths of the Temple Project">
        <h1 className="base-header">Depths of the Temple</h1>

        <Container maxWidth="xl" className="about-content">
          <Grid container spacing={4} className='about-grid'>
            <Grid item xs={12} md={6}>
              <div className="media-item">
                <iframe 
                  className="responsive-iframe" 
                  src="https://www.youtube.com/embed/CMI6qtlBUSI?start=10" 
                  title="GAME 712: Gameplay Scripting - Depths of the Temple Demo" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                  referrerPolicy="strict-origin-when-cross-origin" 
                  allowFullScreen
                />
              </div>
            </Grid>
            <Grid item xs={12} md={6}>
              <div className='info-item'>
                <p>
                  A solo project I completed as part of my GAME 712 - Gameplay Scripting course. 
                  The project was created in Unreal Engine 5, and consists of a first-person player trying to escape a temple which is comprised of several unique 
                  puzzles and mechanics, including a rotating pillar puzzle, a pickupable torch, and collapsing platforms. 
                  Each individual mechanic was created using blueprints. Below are screenshots of some of the blueprints created for the project.
                </p>
              </div>
            </Grid>
          </Grid>

          <Grid container spacing={4} sx={{ mt: 2 }}>
            <Grid item xs={12} md={6}>
              <h3 className="subheader">Rotating Pillar Blueprint</h3>
              <iframe 
                src="https://blueprintue.com/render/uic_ki68/" 
                allowFullScreen 
                className="responsive-iframe"
                title="Rotating Pillar Blueprint"
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <h3 className="subheader">Pillar Puzzle Win Conditions Blueprint</h3>
              <iframe 
                src="https://blueprintue.com/render/oru14ihc/" 
                allowFullScreen 
                className="responsive-iframe"
                title="Pillar Puzzle Win Conditions"
              />
            </Grid>
          </Grid>

          <Grid container spacing={4} sx={{ mt: 2 }}>
            <Grid item xs={12} md={6}>
              <h3 className="subheader">Rotating Pillar Interaction Diagram</h3>
              <img 
                src={PillarImg} 
                alt="Pillar Interaction Diagram"
                className="responsive-image"
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <h3 className="subheader">Collapsing Platform Blueprint</h3>
              <iframe 
                src="https://blueprintue.com/render/kwkesuix/" 
                allowFullScreen 
                className="responsive-iframe"
                title="Collapsing Platform Blueprint"
              />
            </Grid>
          </Grid>

          <Grid container spacing={4} sx={{ mt: 2 }}>
            <Grid item xs={12}>
              <h3 className="subheader">Collapsing Floor Interaction Diagram</h3>
              <img 
                src={CollapsingFloorImg} 
                alt="Collapsing Floor Diagram"
                className="responsive-image"
                style={{ maxWidth: '800px', margin: '0 auto', display: 'block' }}
              />
            </Grid>
          </Grid>

          <Grid container spacing={2} sx={{ mt: 4 }}>
            <Grid item xs={12}>
              <h3 className="attribution-header">Credits and Attributions</h3>
              <ul className="attribution-list">
                <li>My Epic Door project was used as a part of this project, and all its credits and attributions can be found on its project page.</li>
                <li><a href="https://freesound.org/people/steprock/sounds/771164/">Treasure Chest Open by steprock from Freesound.org</a></li>
                <li><a href="https://freesound.org/people/patchytherat/sounds/530988/">moving stone platform.wav by patchytherat from Freesound.org</a></li>
                <li><a href="https://freesound.org/people/samuelreeder/sounds/734048/">audio by samuelreeder from Freesound.org</a></li>
                <li><a href="https://freesound.org/people/Psykoosiossi/sounds/398661/">Chime.wav by Psykoosiossi from Freesound.org</a></li>
                <li><a href="https://freesound.org/people/Jummit/sounds/528561/">Soft UI Button Click by Jummit from Freesound.org</a></li>
                <li><a href="https://freesound.org/people/el_boss/sounds/788611/">UI Button Press by el_boss from Freesound.org</a></li>
                <li><a href="https://freesound.org/people/steaq/sounds/577464/">User Interaction Reverb SFX by steaq from Freesound.org</a></li>
                <li><a href="https://freesound.org/people/nuria1512/sounds/483609/">epicmusic.wav by nuria1512 from freesound.org</a></li>
                <li><a href="https://freesound.org/people/magnuswaker/sounds/758581/">Rubble Trouble 2 by magnuswaker from freesound.org</a></li>
                <li><a href="https://freesound.org/people/iwanPlays/sounds/567249/">Bricks/Stones/Rocks/Gravel Falling by iwanPlays from freesound.org</a></li>
              </ul>

              <h4 className="attribution-subheader">Models and Assets</h4>
              <ul className="attribution-list">
                <li><a href="https://www.fab.com/listings/b40acc92-21e1-4d92-9248-2ecce53fc99b">Medieval Torch (Free) Model from Fab by Apex Wolf</a></li>
                <li><a href="https://www.fab.com/listings/ee0bbb45-1b8f-4dbf-bcce-46e5f64d633d">Old/Ancient Scroll Model from Fab by Kigha</a></li>
                <li><a href="https://www.fab.com/listings/44e4a0a7-ee2f-4da0-a605-41d7e3e70b92">Leather Wooden Chest Model from Fab by Quixel</a></li>
                <li><a href="https://www.fab.com/listings/ab5b7c5d-862d-47de-aa94-9aefe49d1e3e">Aztec Pillar by DRAGON STUDIO from Fab</a></li>
                <li><a href="https://www.fab.com/listings/7819dd81-475a-4d54-873e-e8c97571b9fb">Grey Sandstone from Quixel Megascans</a></li>
                <li><a href="https://www.fab.com/listings/4ce4b428-f1c3-422a-b759-8e261d3474ba">Rock Sandstone from Quixel Megascans</a></li>
                <li><a href="https://www.fab.com/listings/cf65582d-cbd2-4b06-aee2-93f6bc7e4a8d">Rock Granite from Quixel Megascans</a></li>
                <li><a href="https://fab.com/s/c33429192bd4">Pile of Coins (4) by Sebastian Sosnowski from Fab</a></li>
                <li><a href="https://fab.com/s/13e80675a64e">Human Skeleton by RogerSIQ3dstore from Fab</a></li>
                <li><a href="https://fab.com/s/b7b47f22c24c">Medieval Torch by Poligon District from Fab</a></li>
                <li><a href="https://fab.com/s/d04d782db154">Old Metal Pot by Quixel Megascans from Fab</a></li>
              </ul>

              <h4 className="attribution-subheader">Particles</h4>
              <ul className="attribution-list">
                <li><a href="https://www.fab.com/listings/c5b0270a-a295-4644-a4be-42cb1e56a197">Torch and Fire particle effects from M5 VFX Vol2. Fire and Flames(Niagara) from Fab</a></li>
                <li><a href="https://www.fab.com/listings/ac2818b3-7d35-4cf5-a1af-cbf8ff5c61c1">Smoke Effects from Realistic Starter VFX Pack Volume 2 from Fab</a></li>
              </ul>

              <h4 className="attribution-subheader">Fonts and UI Elements</h4>
              <ul className="attribution-list">
                <li>Paper vintage background. Recycle brown paper crumpled texture from Adobe Stock</li>
                <li>Intro Slide Image AI-Generated from Image Creator in Bing</li>
                <li><a href="https://fonts.google.com/specimen/Londrina+Solid">Londrina Solid Font from Google Fonts</a></li>
              </ul>
            </Grid>
          </Grid>
        </Container>
      </PageWrapper>
    </ThemeProvider>
  );
}

export default EscapeRoom;