//#region imports 
import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Navbar/Navbar.js';
import Footer from './Footer/Footer.js';
import EscapeRoomCard, { EpicDoorCard, WVQuestCard } from "./Card/Card";
import { Grid } from "@mui/material"
import PortfolioImg from '../Images/Homepage/PortfolioCropped.jpg';
import GDCImg from '../Images/Homepage/GDC.JPG';
import siteTheme from '../SiteTheme.js';
import { ThemeProvider } from "@mui/material/styles";
import Box from '@mui/material/Box';
//#endregion

// App.js - Handles the design of the homepage.
// Cards, Grid, and Box component used from Material UI
function App() {
  return (
    document.title = "Zach Hubbard | Home",
    <ThemeProvider theme={siteTheme}>
      <Box sx={{ flexGrow: 1 }} className="Global">
        <Navbar />
        <Box sx={{ flexGrow: 1 }} className="CardsGrid">
          <Grid container direction="row" justifyContent="center">
            <Grid item className='Card'>
              <EscapeRoomCard />
            </Grid>
            <Grid item className='Card'>
              <EpicDoorCard />
            </Grid>
            <Grid item className='Card'>
              <WVQuestCard />
            </Grid>
          </Grid>
        </Box>
        <h1 className="base-header">About Me</h1>
        <Box className="about-content">
          <Grid container spacing={4}>
            <Grid item className='media-item' xs={12} sm={6} md={6} lg={4} xl={4}>
              <img src={PortfolioImg} alt='Zach Hubbard' width='400px' height='366px'></img>
            </Grid>
            <Grid item className='media-item' xs={12} sm={6} md={6} lg={4} xl={4}>
              <img src={GDCImg} alt='Zach Hubbard' width='400px' height='366px'></img>
            </Grid>
            <Grid item className='info-item' xs={12} sm={12} md={12} lg={12} xl={4}>
              <p style={{padding: "1rem" }}> Hello, my name is Zach Hubbard, and I have a huge passion
                for game and software development, computer science, and video games.
                I primarily focus on the programming side of game and software development, and 
                enjoy creating, problem-solving, learning new things, and challenging myself.</p>
              <h3 style={{padding:"1rem", fontWeight: 'bold' }} >Email: Zhubbs19@gmail.com </h3>
            </Grid>
          </Grid>
        </Box>
        <Footer />
      </Box>
    </ThemeProvider>
  );
}
export default App;