import React from "react";
import NavbarComponent from "../../Components/Navbar";
import ApplachianSeedCard, { DawnOfAlinaCard, WVQuestCard } from "../../Components/Card";
import './GameProjects.css';
import '../../Components/App.css';
import { Grid } from "@mui/material"
import Footer from '../../Components/Footer.js';


function GameProjects() {
  return (
    document.title = "Zach Hubbard | Game Projects",
    <div className="GameProjects">
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