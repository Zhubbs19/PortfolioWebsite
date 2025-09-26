import React from "react";
import { Grid, Container } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import PageWrapper from "../../Components/PageWrapper/PageWrapper";
import siteTheme from '../../SiteTheme';
import './GamePages.css';
import '../../Components/App.css';
import BlenderDonutVideo from '../../Images/Project_Videos/BlenderDonut.mp4';
import BlenderCookies from '../../Images/Project_Images/Cookies2.png';

function BlenderProjects() {
  return (
    <ThemeProvider theme={siteTheme}>
      <PageWrapper title="Zach Hubbard | Blender Projects">
        <h1 className="base-header">Blender Projects</h1>

        <Container maxWidth="xl" className="about-content">
          <Grid container spacing={4} className='about-grid'>
            <Grid item xs={12} md={6}>
              <div className="media-item">
                <video 
                  className="responsive-iframe" 
                  src={BlenderDonutVideo} 
                  controls 
                />
                <h3 className='subheader'>Blender Donut Animation</h3>
              </div>
            </Grid>
            <Grid item xs={12} md={6}>
              <div className="media-item">
                <img 
                  className="responsive-image" 
                  src={BlenderCookies} 
                  alt="Cookies and Milk Render"
                />
                <h3 className='subheader'>Cookies and Milk Render</h3>
              </div>
            </Grid>
          </Grid>

          <Grid container spacing={4} sx={{ mt: 2 }}>
            <Grid item xs={12}>
              <div className='info-item'>
                <h3 className='subheader'>Blender Donut Animation</h3>
                <p className="text">
                  This rotating Blender Donut render and animation was created using YouTube creator Blender Guru's popular Blender Beginner Tutorial Series.
                  The randomly colored sprinkles were rendered using Blender's Geometry Nodes feature.
                </p>
                <a style={{ fontWeight: "bold" }} href="https://youtube.com/playlist?list=PLjEaoINr3zgFX8ZsChQVQsuDSjEqdWMAD&si=u7BT7xM7adrHSsku">Blender 3.0 Beginner Tutorial Playlist by Blender Guru</a>
                
                <h3 className='subheader' style={{ paddingTop: "2rem" }}>Milk and Cookies Render</h3>
                <p className="text">I created this render after completing the Blender Donut tutorial to better apply what I had learned from the beginner tutorial in order to create my own render.</p>
              </div>
            </Grid>
          </Grid>

          <Grid container spacing={2} sx={{ mt: 4 }}>
            <Grid item xs={12}>
              <h3 className="attribution-header">Attributions</h3>
              <p>Learned about simulating fluid physics to create the physics for the milk in my glass through reading this article on CG Cookie by Wes Burke:</p>
              <a style={{ fontWeight: "bold" }} href="https://cgcookie.com/posts/let-s-make-coffee-blender-fluid-sim-mantaflow-tutorial-for-beginners">Let's Make Coffee: Blender Fluid Simulation (Mantaflow) Tutorial For Beginners by Wes Burke</a>
            </Grid>
          </Grid>
        </Container>
      </PageWrapper>
    </ThemeProvider>
  );
}

export default BlenderProjects;