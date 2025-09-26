import React from "react";
import { Grid, Container } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import PageWrapper from "../../Components/PageWrapper/PageWrapper";
import siteTheme from '../../SiteTheme';
import './GamePages.css';
import '../../Components/App.css';
import SodaCanImg from '../../Images/Project_Images/SodaCan.png';

function PhotoshopProjects() {
  return (
    <ThemeProvider theme={siteTheme}>
      <PageWrapper title="Zach Hubbard | Photoshop Projects">
        <h1 className="base-header">Photoshop Project - Soda Can Mockup</h1>

        <Container maxWidth="xl" className="about-content">
          <Grid container spacing={4} className='about-grid'>
            <Grid item xs={12} md={6}>
              <div className="media-item">
                <img 
                  className="responsive-image" 
                  src={SodaCanImg} 
                  alt="Soda Can Mockup"
                />
                <h3 className='subheader'>Soda Can Mockup</h3>
              </div>
            </Grid>
            <Grid item xs={12} md={6}>
              <div className='info-item'>
                <p className="text">
                  This Soda Can Mockup was created as a first project for teaching myself Adobe Photoshop. I was inspired by tutorials and articles like these for the project:
                </p>
                <p><a style={{ fontWeight: "bold" }} href="https://www.youtube.com/watch?v=xX2DA6__w04">Create Soda Can Mock-up in Photoshop</a> by Design Den on YouTube</p>
                <p><a style={{ fontWeight: "bold" }} href="https://design.tutsplus.com/articles/50-great-photoshop-tutorials-for-clever-beginners--psd-785">100+ Great Photoshop Tutorials for Clever Beginners | Envato Tuts+</a> by Danny Outlaw</p>
              </div>
            </Grid>
          </Grid>

          <Grid container spacing={2} sx={{ mt: 4 }}>
            <Grid item xs={12}>
              <h3 className="attribution-header">Credits and Attribution</h3>
              <ul className='attribution-list'>
                <li><a href="https://www.pexels.com/photo/silver-can-in-white-background-8066771/">silver-can-in-white-background by Mediamodifier</a> From Pexels using Creative Commons License</li>
                <li><a href="https://www.pexels.com/photo/water-bubbles-2853937/">Water Bubbles Photo by Sebastian Sørensen</a> From Pexels using Creative Commons License</li>
              </ul>
            </Grid>
          </Grid>
        </Container>
      </PageWrapper>
    </ThemeProvider>
  );
}

export default PhotoshopProjects;