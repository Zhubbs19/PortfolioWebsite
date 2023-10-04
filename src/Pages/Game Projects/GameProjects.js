import React from "react";
import NavbarComponent from "../../Components/Navbar";
import ApplachianSeedCard, { DawnOfAlinaCard, WVQuestCard } from "../../Components/Card";
import './GameProjects.css';
import { Grid } from "@mui/material"


function GameProjects() {
  return (
    document.title = "Zach Hubbard | Game Projects",
    <div>
      <NavbarComponent />
      <h1 className="base-header">Game Projects</h1>
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
  );
}

export default GameProjects;