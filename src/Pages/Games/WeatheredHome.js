//#region imports 
import React from "react";
import NavbarComponent from "../../Components/Navbar/Navbar.js";
import Footer from '../../Components/Footer/Footer.js';
import { Grid } from "@mui/material"
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../Components/App.css';
import './GamePages.css';
import ForestFire from '../../Images/Project_Images/ForestFire.png';
import RepairTotalsImg from '../../Images/Project_Images/RepairTotals.png';

//#endregion imports 

function AWeatheredHome() { // Handles the project page for Epic Door
  return (
    document.title = "Zach Hubbard | A Weathered Home Group Project",
    <div className="Global">
      <NavbarComponent />
      <h1 className="base-header">A Weathered Home</h1>
      <div className="about-content">
        <Grid container spacing={2} direction="row" className='about-grid'>
          <Grid item className='media-item' xs={12} sm={12} md={12} lg={12} xl={5.75}>
          <iframe width="800" height="480" src="https://www.youtube.com/embed/33XtXKlbD4c" title="A Weathered Home - Gameplay Slice Demo" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>      
          <h3 className="subheader" style={{ justifyContent: "left", padding: "1rem" }}>Forest Fire Weather Event - Blueprint Event Graph</h3>
            <iframe src="https://blueprintue.com/render/h401jhuc/" scrolling="no" allowfullscreen width="960px" height="420px" sandbox></iframe>            
            <h3 className="subheader" style={{ justifyContent: "left", padding: "1rem" }}>Get Repair Totals Blueprint Function</h3>
            <iframe src="https://blueprintue.com/render/8-ztj4qp/" scrolling="no" allowfullscreen width="960px" height="420px" sandbox></iframe>            
          </Grid>
          <Grid item className='info-item' xs={12} sm={12} md={12} lg={12} xl={6}>
            <p className='about-content' style={{ justifyContent: "left", padding: "1rem" }}>A group project and game proof of concept completed as part of 
            my GAME 714 - Ludic Methodology course. In A Weathered Home, the player must prep and repair their home for intense weather events. 
            The proof of concept includes 3 turns of gameplay, each with its own weather event: an earthquake, dust storm, and forest fire. 
            The weather damages the player’s home components (Roof, Walls, Foundation, and Garden) that they must keep standing by using and 
            buying various repair resources at their disposal with the stamina and money they have each turn. <br></br>
            <p></p>
            The game was created in Unreal Engine 5. Autodesk Maya was used for 3D asset creation and Adobe Photoshop for 2D asset creation and UI.</p>
          
            <h3 className="attribution-header" style={{ justifyContent: "left", paddingTop: "1rem" }}>Credits and Attributions: </h3>
        <div className="info-item" style={{ justifyContent: "left", padding: "1rem" }}>
          <div className="attribution-list">
          <li className='attribution-list'>All Blueprint scripting created by Zach Hubbard</li>
          <li className='attribution-list'>3D House and Shop Model created by Shuhan Wei</li>
          <li className='attribution-list'>All UI Art, Backgrounds, and Icons created by Yoru Chen</li>

          <h3 className="attribution-header" style={{ justifyContent: "left", paddingTop: "1rem", fontSize:"1.25rem"}}>Sounds: </h3>
            <li className='attribution-list'>Earthquake.mp3 by AvaDrevis from Freesound.org - https://freesound.org/people/AyaDrevis/sounds/677404/</li>
            <li className='attribution-list'>desertwind1FINAL.wav by slugzilla from Freesound.org - https://freesound.org/people/slugzilla/sounds/112296/</li>
            <li className='attribution-list'>Fire, Campfire, Bonfire by yaros_nov from Freesound.org - https://freesound.org/people/yaros_nov/sounds/434026/</li>
            <li className='attribution-list'>Woodland Ambience Sound Effect - Duddingston Village.wav by from BurghRecords from Freesound.org - 
            https://freesound.org/people/BurghRecords/sounds/434712/</li>
            <li className='attribution-list'>ui-submit.wav by StavSounds from Freesound.org - https://freesound.org/people/StavSounds/sounds/701704/</li>
            <li className='attribution-list'>button-pressed.wav by StavSounds from Freesound.org - https://freesound.org/people/StavSounds/sounds/546078/</li>
            <li className='attribution-list'>button-selected.wav by StavSounds from Freesound.org - https://freesound.org/people/StavSounds/sounds/546079/</li>
            <h3 className="attribution-header" style={{ justifyContent: "left", paddingTop: "1rem", fontSize:"1.25rem"}}>Assets: </h3>
            
            <li className='attribution-list'>Low Poly Nature Pack Lite from Fab Asset Store - https://www.fab.com/listings/d2c038a0-302b-4197-b22b-b6a1b21a703b</li>
            <li className='attribution-list'>FANTASTIC - Village Pack from Fab Asset Store -  https://www.fab.com/listings/52529a12-e88e-41a0-8834-b87306f20c24</li>
            <h3 className="attribution-header" style={{ justifyContent: "left", paddingTop: "1rem", fontSize:"1.25rem" }}>Particles: </h3>
            <li className='attribution-list'>Fountain particle from Unreal Engine DefaultAssets used in creation of Dust particle effect.</li>
            <li className='attribution-list'>NFire_BP_04 particle effect from M5 VFX Vol2. Fire and Flames(Niagara) by M5VFX from Fab Asset Store - 
            https://www.fab.com/listings/c5b0270a-a295-4644-a4be-42cb1e56a197</li>
            <h3 className="attribution-header" style={{ justifyContent: "left", paddingTop: "1rem", fontSize:"1.25rem" }}>Fonts: </h3>
            <li className='attribution-list'>Special Elite Font by Astigmatic from Google Fonts - https://fonts.google.com/specimen/Special+Elite</li>
            </div>
        </div>
          </Grid>
        </Grid>
      </div>
      <Footer />
    </div>
  );
}
export default AWeatheredHome;