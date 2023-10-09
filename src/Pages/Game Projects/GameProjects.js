import React from "react";
import NavbarComponent from "../../Components/Navbar/Navbar";
import ApplachianSeedCard, { DawnOfAlinaCard, WVQuestCard } from "../../Components/Card/Card";
import './GameProjects.css';
import '../../Components/App.css';
import { Grid } from "@mui/material"
import Footer from '../../Components/Footer/Footer.js';


function GameProjects() {
  return (
    document.title = "Zach Hubbard | Game Projects",
    <div className="Global">
      <NavbarComponent />
      <h1 className="base-header">Game Projects</h1>
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
  );
}

export default GameProjects;