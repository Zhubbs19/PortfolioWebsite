import React from "react";
import NavbarComponent from "../../Components/Navbar/Navbar";
import ApplachianSeedCard, { DawnOfAlinaCard, WVQuestCard } from "../../Components/Card/Card";
import '../../Components/App.css';
import '../../Components/Card/Card.css'
import { Grid } from "@mui/material"
import Footer from '../../Components/Footer/Footer.js';
import siteTheme from '../../SiteTheme';
import { ThemeProvider } from "@mui/material/styles";

function GameProjects() {
  return (
    document.title = "Zach Hubbard | Game and Personal Projects",
    <ThemeProvider theme={siteTheme}>
    <div className="Global">
      <NavbarComponent />
      <h1 className="base-header">Game and Personal Projects</h1>
      <div className="CardsGrid">
        <Grid container direction="row" justifyContent="center">
          <Grid item className='Card'>
            <ApplachianSeedCard />
          </Grid>
          <Grid item className='Card'>
            <WVQuestCard />
          </Grid>
          <Grid item className='Card'>
            <DawnOfAlinaCard />
          </Grid>
        </Grid>
      </div>
      <Footer />
    </div>
    </ThemeProvider>
  );
}

export default GameProjects;