import React from "react";
import { Grid, Container } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import PageWrapper from "../../Components/PageWrapper/PageWrapper";
import siteTheme from '../../SiteTheme';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../Components/App.css';
import './GamePages.css';

function MCDataTypesMod() {
  return (
    <ThemeProvider theme={siteTheme}>
      <PageWrapper title="Zach Hubbard | Minecraft Data Types Mod">
        <h1 className="base-header">Minecraft Game Modification - Data Types Mod</h1>

        <Container maxWidth="xl" className="about-content">
          {/* Video and Description Row */}
          <Grid container spacing={4} className='about-grid'>
            <Grid item xs={12} md={8}>
              <div className="media-item">
                {/* TODO: Replace with project video or screenshot */}
                <iframe
                  className="responsive-iframe"
                  src="https://www.youtube.com/embed/33XtXKlbD4c"
                  title="Minecraft Data Types Mod Demo"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                />
              </div>
            </Grid>

            <Grid item xs={12} md={12}>
              <div className='info-item'>
                <p>
                  The Data Types Mod is an in-development personal project — a digital game modification for the popular open-world
                  sandbox game Minecraft that focuses on teaching programming concepts of data types like Integers, Floats, Strings,
                  etc. through the gameplay of the modification.
                </p>
                <p>
                  A system exists in the Minecraft base game known as Redstone, which functions as an abstracted form of binary that
                  players are able to use in their in-game constructions, so an extension of the Redstone system that conveys three
                  other data types (integer, float, and string) could be an effective method to gamify the process of learning programming.
                </p>
                <p>
                  The goal of this mod is to add several similar types of Redstone to the game, but instead of transporting binary data,
                  they will be able to transport data of other types commonly found within many programming languages, such as Integers,
                  32-bit and 64-bit floats, doubles, and strings using existing game systems, such as items, blocks, and UI components,
                  as well as the community-made and supported Mod Development Kit, NeoForge, that allows creation of game modifications
                  for Minecraft. This will enable players to learn more about and use these data types in-game as they are critical,
                  foundational knowledge to have when programming.
                </p>
              </div>
            </Grid>
          </Grid>

          {/* Current Functionality */}
          <Grid container spacing={4} sx={{ mt: 2 }}>
            <Grid item xs={12}>
              <h3 className="subheader">Current Functionality</h3>
              <div className='info-item'>
                <ul className="feature-list">
                  <li className="feature">First iteration of Block/Item models and textures for each data type</li>
                  <li className="feature">Functional data storage block UI for Integers, Long integers, Floats, Doubles, and Strings</li>
                  <li className="feature">Guidebook item functionality and basic UI when right-clicking item or through a key bind</li>
                  <li className="feature">Modded Blocks and Items present in Minecraft creative mode inventory UI</li>
                </ul>
              </div>
            </Grid>
          </Grid>

          {/* Software and Tools */}
          <Grid container spacing={4} sx={{ mt: 2 }}>
            <Grid item xs={12}>
              <h3 className="subheader">Software and Tools</h3>
              <div className='info-item'>
                <ul className="feature-list">
                  <li className="feature">Original Game - Minecraft: Java Edition - Version 1.21+, Mojang, 2011</li>
                  <li className="feature">IntelliJ IDEA - Java Programming IDE</li>
                  <li className="feature">NeoForge - Community-made Mod Development Kit for Minecraft</li>
                  <li className="feature">Blockbench - 3D low-poly modeling software used to model in-game blocks and items and create textures</li>
                  <li className="feature">Git/GitHub - for Version Control Management</li>
                </ul>
              </div>
            </Grid>
          </Grid>

          {/* Credits and Attributions */}
          <Grid container spacing={2} sx={{ mt: 4 }}>
            <Grid item xs={12}>
              <h3 className="attribution-header">Credits and Attributions</h3>

              <div className="info-item">
                <ul className="attribution-list">
                  <li>All Block/Item Models and Block/Item textures created by Zach Hubbard using Blockbench</li>
                  <li>ChatGPT used for conceptualization to help narrow down initial mod ideas</li>
                  <li>Claude AI used to gain better understanding of NeoForge Mod Development Kit documentation</li>
                </ul>

                <h4 className="attribution-subheader">Tutorials and Resources</h4>
                <ul className="attribution-list">
                  <li>
                    <a href="https://www.youtube.com/playlist?list=PLKGarocXCE1G6CQOoiYdMVx-E1d9F_itF">
                      Used some tutorials from YouTube channel Kuapenjoe to assist in understanding and implementation of some mod components
                    </a>
                  </li>
                </ul>
              </div>
            </Grid>
          </Grid>
        </Container>
      </PageWrapper>
    </ThemeProvider>
  );
}

export default MCDataTypesMod;
