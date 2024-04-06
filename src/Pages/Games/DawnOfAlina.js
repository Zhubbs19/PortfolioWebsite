//#region imports 
import React from "react";
import NavbarComponent from "../../Components/Navbar/Navbar";
import Footer from '../../Components/Footer/Footer.js';
import '../../Components/App.css';
import './GamePages.css';
import { Grid } from "@mui/material"
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../Components/App.css';
import DawnOfAlinaImg from '../../Images/Project_Images/DawnOfAlinaLarge.JPG';
//#endregion imports 

function DawnOfAlina() {
  return (
    document.title = "Zach Hubbard | Dawn of Alina",
    <div className="Global">
      <NavbarComponent />
      <h1 className="base-header">Dawn of Alina</h1>
      <div className="about-content">
        <Grid container direction="row" justifyContent="center" className='about-grid'>
          <Grid item className='media-item' xs={12} sm={12} md={12} lg={12} xl={6}>
            <iframe className="image" src={DawnOfAlinaImg} alt='Dawn of Alina' width='1000px' height='450px'></iframe>
          </Grid>
          <Grid item className='info-item' xs={12} sm={12} md={12} lg={12} xl={6}>
            <p> Dawn of Alina was a 3D action-adventure game prototype. The game was centered around main character Alina, who was tasked with ridding her world of the
              evil that inhabits it using her magical powers. The game was created in Unity as part of Mon River Games&apos; summer 2022 session. Development was discontinued following the end of the Fall 2022 session.</p>
            <a style={{ fontWeight: "bold" }} href="https://www.monrivergames.com/dawnofalina">Mon River Games - Dawn of Alina Page</a>
            <h3 className="subheader" style={{ paddingTop: "2rem" }}> Throughout the game&apos;s development, I implemented:</h3>
            <ul className="feature-list">
              <li className="feature">A working inventory system using item scriptable objects, containing item pickup mechanics, item stacking/removal, and item info displays.</li>
              <li className="sublist">Scriptable Objects are used as a container for each items&apos; immutable data, such as name, item type, gold value, and stack limit.</li>
              <li className='feature'>Saving and loading system for the inventory.</li>
              <li className='feature'>Item selling system.</li>
              <li className="sublist">Alina can sell items to gain gold.</li>
              <li className='feature'>Cauldron crafting system.</li>
              <li className="sublist">Alina can craft potions by interacting with a cauldron.</li>
            </ul>
            <p>To develop this system, I viewed tutorials such as Coding with Unity Inventory System Tutorial Series
              and Brackey&apos;s Making an RPG Series episodes in order to conceptualize and plan out the
              code for the system I implemented, particularly for helping to make my inventory update when items
              were added/removed from the inventory. Some functionality and function names were
              used from these and as such have been cited within the code.</p>
            <h3 className="attribution-header" style={{ justifyContent: "left", paddingBottom: "0.5rem", paddingTop: "1rem" }}>Tutorial Playlists Referenced:</h3>
            <li className='attribution-list'><a href="https://youtube.com/playlist?list=PLPV2KyIb3jR4KLGCCAciWQ5qHudKtYeP7&si=e-dJQ52ikEBgA5TG">How to make an RPG in Unity Playlist by Brackeys on YouTube</a></li>
            <li className='attribution-list'><a href="https://youtube.com/playlist?list=PLJWSdH2kAe_Ij7d7ZFR2NIW8QCJE74CyT&si=HPn-h_TqZiedZOqY">Unity3D - Inventory System w/ Scriptable Objects Playlist by Coding With Unity on YouTube</a></li>
          </Grid>
        </Grid>
      </div>
      <Footer />
    </div>
  );
}
export default DawnOfAlina;