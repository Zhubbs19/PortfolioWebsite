import React from "react";
import NavbarComponent from "../../Components/Navbar/Navbar";
import Footer from '../../Components/Footer/Footer.js';
import '../../Components/App.css';
import './GamePages.css';
import { Grid } from "@mui/material"
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../Components/App.css';
import DawnOfAlinaImg from '../../Images/DawnOfAlinaLarge.JPG';

function DawnOfAlina() {
  return (
    document.title = "Zach Hubbard | Dawn of Alina",
    <div className="Global">
    <NavbarComponent />
    <h1 className="base-header">Dawn of Alina</h1>
    <div className="about-content">
      <Grid container direction="row" justifyContent="center" className='about-grid'>
        <Grid item className='grid-item'>
        <img className='about-item' src={DawnOfAlinaImg} alt='Dawn of Alina' width='742px' height='419px'></img>
        </Grid>
        <Grid item className='grid-item'>
        Dawn of Alina is a 3D action-adventure game, with the main character Alina tasked with ridding her world of the 
        evil that inhabits it, using her magical powers. The game was created in Unity as part of Mon River Games.
            <h3 className="subheader"> Throughout the game&apos;s development, I implemented:</h3>
            <li className='feature-list'>A working inventory with scriptable objects, item pickup mechanics, and item stacking.</li>
            <li className='feature-list'>Inventory saving and loading system</li>
            <li className='feature-list'>Cauldron crafting system</li>
        </Grid>
      </Grid>
    </div>
    <Footer />
  </div>
  );
}

export default DawnOfAlina;