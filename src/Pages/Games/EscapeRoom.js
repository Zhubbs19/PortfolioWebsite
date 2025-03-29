//#region imports 
import React from "react";
import NavbarComponent from "../../Components/Navbar/Navbar.js";
import Footer from '../../Components/Footer/Footer.js';
import { Grid } from "@mui/material"
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../Components/App.css';
import './GamePages.css';
import CollapsingPlatformImg from '../../Images/Project_Images/CollapsingPlatform_BP.png';
import RotatingPillarImg from '../../Images/Project_Images/RotatingPillar.png';
import TorchPickupImg from '../../Images/Project_Images/TorchPickup.png';
//#endregion imports 

function EscapeRoom() { // Handles the project page for Epic Door
  return (
    document.title = "Zach Hubbard | Escape Room",
    <div className="Global">
      <NavbarComponent />
      <h1 className="base-header">Depths of the Temple - GAME 712 - Gameplay Scripting Project</h1>
      <div className="about-content">
        <Grid container spacing={2} direction="row" className='about-grid'>
          <Grid item className='media-item' xs={12} sm={12} md={12} lg={12} xl={6}>
            <h3 className="subheader" style={{ justifyContent: "left", padding: "1rem" }}>Demo Video</h3>
            <iframe className="responsive-iframe" width="800" height="600" src="https://www.youtube.com/embed/CMI6qtlBUSI" title="GAME 712: Gameplay Scripting - Depths of the Temple Demo" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            <h3 className="subheader" style={{ justifyContent: "left", padding: "1rem" }}>Collapsing Platform Blueprint</h3>
            <img src={CollapsingPlatformImg} width="800px" height="350px" sandbox></img>
            </Grid>
          <Grid item className='info-item' xs={12} sm={12} md={12} lg={12} xl={6}>
            <p className='about-content' style={{ justifyContent: "left", padding: "1rem" }}>A solo project I completed as part of my my GAME 712 - Gameplay Scripting course. 
              The project was created in Unreal Engine 5. The project consists of a player traversing a level comprised of several mechanics, 
              including collapsing platforms, a rotating pillar puzzle, and a pickupable torch. Each individual mechanic was created using blueprint actors. below are images of some of the scripts created for the project.</p>
            <h3 className="subheader" style={{ justifyContent: "left", padding: "1rem" }}>Rotating Pillar Blueprint</h3>
            <img src={RotatingPillarImg} width="800px" height="450px" sandbox></img>
            <h3 className="subheader" style={{ justifyContent: "left", padding: "1rem" }}>Torch Pickup Blueprint</h3>
            <img src={TorchPickupImg} width="800px" height="350px" sandbox></img>
          </Grid>
        </Grid>
        <h3 className="attribution-header" style={{ justifyContent: "left", paddingTop: "1rem" }}>Credits and Attributions: </h3>
        <div className="info-item" style={{ justifyContent: "left", padding: "1rem" }}>
            <h3 className="attribution-subheader">Sounds: </h3>
          <div className="attribution-list">
            <li className='attribution-list'>Treasure Chest Open by steprock from Freesound.org - https://freesound.org/people/steprock/sounds/771164/</li>
            <li className='attribution-list'>moving stone platform.wav by patchytherat from Freesound.org - https://freesound.org/people/patchytherat/sounds/530988/</li>
            <li className='attribution-list'>audio by samuelreeder from Freesound.org - https://freesound.org/people/samuelreeder/sounds/734048/</li>
            <li className='attribution-list'>Chime.wav by Psykoosiossi from Freesound.org - https://freesound.org/people/Psykoosiossi/sounds/398661/</li>
            <li className='attribution-list'>Soft UI Button Click by Jummit from Freesound.org - https://freesound.org/people/Jummit/sounds/528561/</li>
            <li className='attribution-list'>UI Button Press by el_boss from Freesound.org - https://freesound.org/people/el_boss/sounds/788611/</li>
            <li className='attribution-list'>User Interaction Reverb SFX by steaq from Freesound.org - https://freesound.org/people/steaq/sounds/577464/</li>
            <li className='attribution-list'>epicmusic.wav by nuria1512 from freesound.org - https://freesound.org/people/nuria1512/sounds/483609/</li>
            <li className='attribution-list'>Rubble Trouble 2 by magnuswaker from freesound.org - https://freesound.org/people/magnuswaker/sounds/758581/</li>
            <li className='attribution-list'>Bricks/Stones/Rocks/Gravel Falling by iwanPlays from freesound.org - https://freesound.org/people/iwanPlays/sounds/567249/</li>
            <h3 className="attribution-subheader" style={{ justifyContent: "left", paddingBottom: "0.5rem", paddingTop: "2rem" }}>Models and Assets: </h3>
            <li className='attribution-list'>Medieval Torch (Free) Model and Thumbnail from Fab by Apex Wolf - https://www.fab.com/listings/b40acc92-21e1-4d92-9248-2ecce53fc99b</li>
            <li className='attribution-list'>Old/Ancient Scroll Model and Thumbnail from Fab by Kigha - https://www.fab.com/listings/ee0bbb45-1b8f-4dbf-bcce-46e5f64d633d</li>
            <li className='attribution-list'>Leather Wooden Chest Model and Thumbnail from Fab by Quixel - https://https://www.fab.com/listings/44e4a0a7-ee2f-4da0-a605-41d7e3e70b92</li>
            <li className='attribution-list'>Pillar Thumbnail from Model from Fab - Aztec Pillar by DRAGON STUDIO – https://www.fab.com/listings/ab5b7c5d-862d-47de-aa94-9aefe49d1e3e</li>
            <li className='attribution-list'>Grey Sandstone from Quixel Megascans on Fab - https://www.fab.com/listings/7819dd81-475a-4d54-873e-e8c97571b9fb</li>
            <li className='attribution-list'>Rock Sandstone from Quixel Megascans on Fab - https://www.fab.com/listings/4ce4b428-f1c3-422a-b759-8e261d3474ba</li>
            <li className='attribution-list'>Rock Granite from Quixel Megascans on Fab - https://www.fab.com/listings/cf65582d-cbd2-4b06-aee2-93f6bc7e4a8d</li>
            <li className='attribution-list'>Pile of Coins (4) by Sebastian Sosnowski on Fab - https://fab.com/s/c33429192bd4</li>
            <li className='attribution-list'>Human Skeleton Download FREE by RogerSIQ3dstore on Fab - https://fab.com/s/13e80675a64e</li>
            <li className='attribution-list'>Medieval Torch by Poligon District on Fab - https://fab.com/s/b7b47f22c24c</li>
            <li className='attribution-list'>Old Metal Pot by Quixel Megascans on Fab - https://fab.com/s/d04d782db154</li>
            <h3 className="attribution-subheader" style={{ justifyContent: "left", paddingBottom: "0.5rem", paddingTop: "2rem" }}>Particles: </h3>
            <li className='attribution-list'>Torch and Fire particle effects from M5 VFX Vol2. Fire and Flames(Niagara) on Fab - https://www.fab.com/listings/c5b0270a-a295-4644-a4be-42cb1e56a197 </li>
            <li className='attribution-list'>Smoke Effects from Realistic Starter VFX Pack Volume 2 - https://www.fab.com/listings/ac2818b3-7d35-4cf5-a1af-cbf8ff5c61c1</li>
            <h3 className="attribution-subheader" style={{ justifyContent: "left", paddingBottom: "0.5rem", paddingTop: "2rem" }}>Fonts and UI Elements: </h3>
            <li className='attribution-list'>Paper vintage background. Recycle brown paper crumpled texture, Old paper surface on transparent background, isolated from Adobe Stock - https://as2.ftcdn.net/v2/jpg/05/34/03/01/1000_F_534030108_jJJ94aK4095j1R5p1jx6tMwD4G3hPY6U.webp</li>
            <li className='attribution-list'>Intro Slide Image AI-Generated from Image Creator in Bing - https://www.bing.com/images/create/an-ancient2c-run-down-secret-temple-room-that-is-la/1-67b0f94788124f79918f6e9846bca697?id=BzihViL6%2f4V8mvy8UfzvMg%3d%3d&view=detailv2&idpp=genimg&thId=OIG2.Eocb4fzlWP71TPnRSCSV&skey=-JE92ItPlc9lJdYx4ZOYROakTsfHZWbaHkUY2-v3Fmw&FORM=GCRIDP&ajaxhist=0&ajaxserp=0</li>
            <li className='attribution-list'>Londrina Solid Font from Google Fonts - https://fonts.google.com/specimen/Londrina+Solid</li>
            </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
export default EscapeRoom;