//#region imports 
import React from "react";
import NavbarComponent from "../../Components/Navbar/Navbar.js";
import Footer from '../../Components/Footer/Footer.js';
import { Grid } from "@mui/material"
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../Components/App.css';
import './GamePages.css';
import CartSmashImg1 from '../../Images/Project_Images/RampCrash2.png';
//#endregion imports 

function CartSmash() { // Handles the project page for Cart Smash
  return (
    document.title = "Zach Hubbard | Cart Smash",
    <div className="Global">
      <NavbarComponent />
      <h1 className="base-header">Cart Smash - 2024 Global Game Jam Submission</h1>
      <div className="about-content">
        <Grid container spacing={6} direction="row" className='about-grid'>
          <Grid item className='media-item' xs={12} sm={12} md={12} lg={6} xl={6}>
            <iframe src={CartSmashImg1} width="800px" height="600px" sandbox></iframe>
          </Grid>
          <Grid item className='CartSmashInfo' xs={12} sm={12} md={12} lg={12} xl={6}>
            <p> Cart Smash is a fun, simple 3D physics game that involves launching a shopping cart off a ramp while trying to keep all your items within the cart.
              This game was created in the Unity Engine through participation in the 2024 Global Game Jam, where this years&apos; theme was &quot;make me laugh&quot;.</p>
            <a style={{ fontWeight: "bold" }} href="https://globalgamejam.org/games/2024/cart-smash-2">Cart Smash - 2024 Global Game Jam Submission</a>
            <h3 className="subheader" style={{ fontWeight: "bold" }}>2024 Global Game Jam Group Participants</h3>
            <p>Zachary Hubbard (programming), Tom Heckman (programming), and David Haley (music, audio, and 3D asset creation).</p>
            <h3 className="attribution-subheader" style={{ justifyContent: "left", paddingBottom: "0.5rem", paddingTop: "2rem" }}>Credits and Attribution: </h3>
            <li className='attribution-list'><a href="https://www.freepik.com/3d-model/shopping-cart-001_3553">Shopping Cart 001 3D Model by freepik</a> using Freepik free license</li>
            <li className='attribution-list'><a href="https://www.freepik.com/free-vector/abstract-perspective-graph-pattern-grid-vector-design_51706871.htm#query=grid&position=19&from_view=search&track=sph&uuid=6ba28faa-0978-4a4f-880e-c04fafec8a7a">Free vector abstract perspective graph pattern grid vector design by freepik</a></li>
            <li className='attribution-list'><a href="https://www.vecteezy.com/vector-art/7718306-black-and-white-checkered-flag-background">Checkered Flag Vectors by Vecteezy</a> using Vecteezy free license</li>
            <li className='attribution-list'><a href="https://sketchfab.com/3d-models/wooden-ramp-6e862a74dcab40bfa05ca823c764ccd0">Wooden Ramp by Prop Shop</a> using Creative Commons license</li>
            <li className='attribution-list'><a href="https://www.freepik.com/free-photo/artistic-texture-paint-brush-stroke_4553709">Artistic texture of paint brush stroke by freepik</a> using Freepik free license</li>
            <h3 className="attribution-subheader" style={{ justifyContent: "left", paddingBottom: "0.5rem", paddingTop: "1rem" }}>All Sounds from Freesound.org: </h3>
            <li className='attribution-list'><a href="https://freesound.org/people/kyles/sounds/453553/">shopping cart metal rattle push ext.flac by kyles </a> using Creative Commons license</li>
            <li className='attribution-list'><a href="https://freesound.org/people/qubodup/sounds/183993/">Shopping Cart Return.flac by qubodup</a> using Creative Commons license</li>
            <li className='attribution-list'><a href="https://freesound.org/people/Robinhood76/sounds/350609/">06576 leaving shopping cart.wav by Robinhood76</a> using Attribution NonCommercial 4.0 License</li>
          </Grid>
        </Grid>
      </div>
      <Footer />
    </div>
  );
}

export default CartSmash;