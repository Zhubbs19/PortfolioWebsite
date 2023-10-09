import React from "react";
import NavbarComponent from "../../Components/Navbar/Navbar";
import ApplachianSeedCard, { DawnOfAlinaCard, WVQuestCard } from "../../Components/Card/Card";
import './PersonalProjects.css';
import '../../Components/App.css'
import Footer from '../../Components/Footer/Footer.js';
import { Grid } from "@mui/material"

function PersonalProjects() {
  return (
    document.title = "Zach Hubbard | Personal Projects",
    <div className="Global">
      <NavbarComponent />
      <h1 className="base-header">Personal Projects</h1>
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
        <Footer />
      </div>
  );
}

export default PersonalProjects;