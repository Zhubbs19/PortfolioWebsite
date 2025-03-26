//#region imports 
import React from "react";
import NavbarComponent from "../../Components/Navbar/Navbar.js";
import Footer from '../../Components/Footer/Footer.js';
import { Grid } from "@mui/material"
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../Components/App.css';
import './GamePages.css';
import EpicDoorImg from '../../Images/Project_Images/EpicDoor.png';
//#endregion imports 

function EscapeRoom() { // Handles the project page for Epic Door
  return (
    document.title = "Zach Hubbard | Escape Room",
    <div className="Global">
      <NavbarComponent />
      <h1 className="base-header">Escape Room - Unreal Engine 5.4 Project</h1>
      <div className="about-content">
        <Grid container spacing={6} direction="row" className='about-grid'>
        <Grid item className='media-item' xs={12} sm={12} md={12} lg={12} xl={6}>
            <iframe width="800" height="600" src="https://www.youtube.com/embed/mhS2s4bzIAk" title="GAME 712 Escape Room Project" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            <iframe src={EpicDoorImg} width="800px" height="600px" sandbox></iframe>
          </Grid>
          <Grid item className='info-item' xs={12} sm={12} md={12} lg={12} xl={6}>
            <p style={{ justifyContent: "left"}}>Vault-style door opening cinematic created in Unreal Engine 5 for my GAME 710 - Game Art: Engine Pipelines and Practices course.</p>
            <h3 className="attribution-subheader" style={{ justifyContent: "left", paddingBottom: "0.5rem", paddingTop: "2rem" }}>Credits and Attributions: </h3>
          </Grid>
        </Grid>
      </div>
      <Footer />
    </div>
  );
}

export default EscapeRoom;