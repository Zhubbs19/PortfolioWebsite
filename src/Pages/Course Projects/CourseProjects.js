//#region imports 
import React from "react";
import NavbarComponent from "../../Components/Navbar/Navbar";
import {HighBytesOSCard, WVQuestCard} from "../../Components/Card/Card";
import './CourseProjects.css';
import '../../Components/App.css';
import '../../Components/Card/Card.css'
import { Grid } from "@mui/material"
import Footer from '../../Components/Footer/Footer.js';
import siteTheme from '../../SiteTheme';
import { ThemeProvider } from "@mui/material/styles";
//#endregion

function CourseProjects() {
  return (
    document.title = "Zach Hubbard | Course Projects",
    <ThemeProvider theme={siteTheme}>
    <div className="Global">
      <NavbarComponent />
      <h1 className="base-header">Course Projects</h1>
      <div className="CardsGrid">
      <Grid container direction="row" justifyContent="center">
        <Grid item className='Card'>
         <HighBytesOSCard />
        </Grid>
        <Grid item className='Card'>
          <WVQuestCard />
        </Grid>
      </Grid>
      </div>
      <Footer />
    </div>
    </ThemeProvider>
  );
}
export default CourseProjects;