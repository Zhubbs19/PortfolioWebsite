import React from "react";
import NavbarComponent from "../../Components/Navbar";
import ApplachianSeedCard, { DawnOfAlinaCard, WVQuestCard } from "../../Components/Card";
import './GameProjects.css';
import { Grid } from "@mui/material"


function GameProjects() {
  return (
    <div>
      <NavbarComponent />
      <div>
        <h1 className="main-header">Game Projects</h1>
        <div>
       <Grid container direction="row" justifyContent="center">
          <Grid item xs={3}>
            <ApplachianSeedCard />
          </Grid>
          <Grid item xs={3}>
            <WVQuestCard />
          </Grid>
          <Grid item xs={3}>
            <DawnOfAlinaCard />
          </Grid>
        </Grid>
      </div>
    </div>
    </div >
  );
}

export default GameProjects;