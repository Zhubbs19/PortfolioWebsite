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
          {/* Blender Donut Section */}
          <Grid container spacing={4} className='about-grid'>
            <Grid item xs={12} md={6}>
              <div className="media-item">
                <video
                  className="responsive-iframe"
                  src={BlenderDonutVideo}
                  controls
                />
              </div>
            </Grid>
            <Grid item xs={12} md={6}>
              <div className='info-item'>
                <h3 className='subheader'>Blender Donut Animation</h3>
                <p>
                  This rotating Blender Donut render and animation was created using YouTube creator Blender Guru's popular Blender Beginner Tutorial Series.
                  The randomly colored sprinkles were rendered using Blender's Geometry Nodes feature.
                </p>
                <a style={{ fontWeight: "bold" }} href="https://youtube.com/playlist?list=PLjEaoINr3zgFX8ZsChQVQsuDSjEqdWMAD&si=u7BT7xM7adrHSsku">Blender 3.0 Beginner Tutorial Playlist by Blender Guru</a>
              </div>
            </Grid>
          </Grid>

          {/* Milk and Cookies Section */}
          <Grid container spacing={4} className='about-grid' sx={{ mt: 2 }}>
            <Grid item xs={12} md={6}>
              <div className="media-item">
                <img
                  className="responsive-image"
                  src={BlenderCookies}
                  alt="Cookies and Milk Render"
                />
              </div>
            </Grid>
            <Grid item xs={12} md={6}>
              <div className='info-item'>
                <h3 className='subheader'>Milk and Cookies Render</h3>
                <p>I created this render after completing the Blender Donut tutorial to better apply what I had learned from the beginner tutorial in order to create my own render.</p>
              </div>
            </Grid>
          </Grid>

          <Grid container spacing={2} sx={{ mt: 4 }}>
            <Grid item xs={12}>
              <h3 className="attribution-header">Attributions</h3>
              <div className="info-item">
                <ul className="attribution-list">
                  <li>
                    Learned about simulating fluid physics to create the physics for the milk in my glass through reading this article on CG Cookie by Wes Burke: <a href="https://cgcookie.com/posts/let-s-make-coffee-blender-fluid-sim-mantaflow-tutorial-for-beginners">Let's Make Coffee: Blender Fluid Simulation (Mantaflow) Tutorial For Beginners</a>
                  </li>
                </ul>
              </div>
            </Grid>
          </Grid>
        </Container>
      </PageWrapper>
    </ThemeProvider>
  );
}

export default BlenderProjects;