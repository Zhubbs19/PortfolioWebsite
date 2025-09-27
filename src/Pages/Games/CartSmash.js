import React from "react";
import { Grid, Container } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import PageWrapper from "../../Components/PageWrapper/PageWrapper";
import siteTheme from '../../SiteTheme';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../Components/App.css';
import './GamePages.css';
import CartSmashImg1 from '../../Images/Project_Images/RampCrash2.png';

function CartSmash() {
  return (
    <ThemeProvider theme={siteTheme}>
      <PageWrapper title="Zach Hubbard | Cart Smash">
        <h1 className="base-header">Cart Smash - 2024 Global Game Jam</h1>

        <Container maxWidth="xl" className="about-content">
          <Grid container spacing={4} className='about-grid'>
            <Grid item xs={12} md={6.85}>
              <div className="media-item">
                <iframe 
                  src={CartSmashImg1} 
                  className="responsive-iframe"
                  title="Cart Smash Gameplay"
                />
              </div>
            </Grid>
            <Grid item xs={12} md={12}>
              <div className='info-item'>
                <p>
                  Cart Smash is a fun, simple 3D physics game that involves launching a shopping cart off a ramp while trying to keep all your items within the cart.
                  This game was created in the Unity Engine through participation in the 2024 Global Game Jam, where this years' theme was "make me laugh".
                </p>
                <a style={{ fontWeight: "bold" }} href="https://globalgamejam.org/games/2024/cart-smash-2">Cart Smash - 2024 Global Game Jam Submission</a>
                
                <h3 className="subheader" style={{ fontWeight: "bold" }}>2024 Global Game Jam Group Participants</h3>
                <p>Zachary Hubbard (programming), Tom Heckman (programming), and David Haley (music, audio, and 3D asset creation).</p>
              </div>
            </Grid>
          </Grid>

          <Grid container spacing={2} sx={{ mt: 4 }}>
            <Grid item xs={12}>
              <h3 className="attribution-header">Credits and Attributions</h3>
              <ul className='attribution-list'>
                <li><a href="https://www.freepik.com/3d-model/shopping-cart-001_3553">Shopping Cart 001 3D Model by freepik</a> using Freepik free license</li>
                <li><a href="https://www.freepik.com/free-vector/abstract-perspective-graph-pattern-grid-vector-design_51706871.htm">Free vector abstract perspective graph pattern grid by freepik</a></li>
                <li><a href="https://www.vecteezy.com/vector-art/7718306-black-and-white-checkered-flag-background">Checkered Flag Vectors by Vecteezy</a> using Vecteezy free license</li>
                <li><a href="https://sketchfab.com/3d-models/wooden-ramp-6e862a74dcab40bfa05ca823c764ccd0">Wooden Ramp by Prop Shop</a> using Creative Commons license</li>
                <li><a href="https://www.freepik.com/free-photo/artistic-texture-paint-brush-stroke_4553709">Artistic texture of paint brush stroke by freepik</a> using Freepik free license</li>
              </ul>
              
              <h4 className="attribution-subheader">All Sounds from Freesound.org</h4>
              <ul className='attribution-list'>
                <li><a href="https://freesound.org/people/kyles/sounds/453553/">shopping cart metal rattle push ext.flac by kyles</a> using Creative Commons license</li>
                <li><a href="https://freesound.org/people/qubodup/sounds/183993/">Shopping Cart Return.flac by qubodup</a> using Creative Commons license</li>
                <li><a href="https://freesound.org/people/Robinhood76/sounds/350609/">06576 leaving shopping cart.wav by Robinhood76</a> using Attribution NonCommercial 4.0 License</li>
              </ul>
            </Grid>
          </Grid>
        </Container>
      </PageWrapper>
    </ThemeProvider>
  );
}

export default CartSmash;