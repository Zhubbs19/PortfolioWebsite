import React from "react";
import { Grid, Container } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import PageWrapper from "../../Components/PageWrapper/PageWrapper";
import siteTheme from '../../SiteTheme';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../Components/App.css';
import './GamePages.css';
import DawnOfAlinaImg from '../../Images/Project_Images/DawnOfAlinaLarge.JPG';

function DawnOfAlina() {
  return (
    <ThemeProvider theme={siteTheme}>
      <PageWrapper title="Zach Hubbard | Dawn of Alina">
        <h1 className="base-header">Dawn of Alina</h1>

        <Container maxWidth="xl" className="about-content">
          <Grid container spacing={4} className='about-grid'>
            <Grid item xs={12} md={8}>
              <div className="media-item">
                <img 
                  src={DawnOfAlinaImg}
                  alt='Dawn of Alina'
                  className="responsive-image"
                />
              </div>
            </Grid>
            <Grid item xs={12} md={12}>
              <div className='info-item'>
                <p>
                  Dawn of Alina was a 3D action-adventure game prototype. The game was centered around main character Alina, who was tasked with ridding her world of the
                  evil that inhabits it using her magical powers. The game was created in Unity as part of Mon River Games' summer 2022 session. Development was discontinued following the end of the Fall 2022 session.
                </p>
                <a style={{ fontWeight: "bold" }} href="https://www.monrivergames.com/dawnofalina">Mon River Games - Dawn of Alina Page</a>
                
                <h3 className="subheader" style={{ paddingTop: "2rem" }}>Throughout the game's development, I implemented:</h3>
                <ul className="feature-list">
                  <li className="feature">A working inventory system using item scriptable objects, containing item pickup mechanics, item stacking/removal, and item info displays.</li>
                  <li className="feature">Scriptable Objects are used as a container for each items' immutable data, such as name, item type, gold value, and stack limit.</li>
                  <li className='feature'>Saving and loading system for the inventory.</li>
                  <li className='feature'>Item selling system.</li>
                  <li className='feature'>Cauldron crafting system.</li>
                </ul>
                
                <p>
                  To develop this system, I viewed tutorials such as Coding with Unity Inventory System Tutorial Series
                  and Brackey's Making an RPG Series episodes in order to conceptualize and plan out the
                  code for the system I implemented, particularly for helping to make my inventory update when items
                  were added/removed from the inventory. Some functionality and function names were
                  used from these and as such have been cited within the code.
                </p>
              </div>
            </Grid>
          </Grid>

          <Grid container spacing={2} sx={{ mt: 4 }}>
            <Grid item xs={12}>
              <h3 className="attribution-header">Tutorial Playlists Referenced</h3>
              <ul className='attribution-list'>
                <li><a href="https://youtube.com/playlist?list=PLPV2KyIb3jR4KLGCCAciWQ5qHudKtYeP7&si=e-dJQ52ikEBgA5TG">How to make an RPG in Unity by Brackeys on YouTube</a></li>
                <li><a href="https://youtube.com/playlist?list=PLJWSdH2kAe_Ij7d7ZFR2NIW8QCJE74CyT&si=HPn-h_TqZiedZOqY">Unity3D - Inventory System w/ Scriptable Objects by Coding With Unity</a></li>
              </ul>
            </Grid>
          </Grid>
        </Container>
      </PageWrapper>
    </ThemeProvider>
  );
}

export default DawnOfAlina;