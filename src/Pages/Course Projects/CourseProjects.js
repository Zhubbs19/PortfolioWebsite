import React from "react";
import NavbarComponent from "../../Components/Navbar";
import ApplachianSeedCard, { DawnOfAlinaCard, WVQuestCard } from "../../Components/Card";
import './CourseProjects.css';
import { Grid } from "@mui/material"
import Footer from '../../Components/Footer.js';



function CourseProjects() {
  return (
    document.title = "Zach Hubbard | Game Projects",
    <div className="CourseProjects">
      <NavbarComponent />
      <h1 className="base-header">Course Projects</h1>
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
        <Footer />
      </div>
  );
}

export default CourseProjects;