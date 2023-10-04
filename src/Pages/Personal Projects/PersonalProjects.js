import React from "react";
import NavbarComponent from "../../Components/Navbar";
import ApplachianSeedCard, { DawnOfAlinaCard, WVQuestCard } from "../../Components/Card";
import './PersonalProjects.css';
import { Grid } from "@mui/material"

function PersonalProjects() {
  return (
    document.title = "Zach Hubbard | Personal Projects",
    <div>
      <NavbarComponent />
      <h1 className="base-header">Personal Projects</h1>
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

export default PersonalProjects;