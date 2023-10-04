import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Navbar.js';
import Footer from './Footer.js';
import ApplachianSeedCard, { DawnOfAlinaCard, WVQuestCard } from "./Card";
import { Grid } from "@mui/material"
import PortfolioImg from './Images/PortfolioCropped.jpg';
import GDCImg from './Images/GDC.JPG';


function App() {
  return (
    document.title = "Zach Hubbard | Home",
    <div className="App">
      <Navbar />
      <h1 className="base-header">Featured Projects</h1>
      <div className="CardsGrid">
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
      </div>
        <h1 className="base-header">About Me</h1>
      <div className="about-content">
        <Grid container direction="row" justifyContent="center" className='about-grid'>
          <Grid item className='grid-item'>
            <img className= 'about-item' src={PortfolioImg} alt='Zach Hubbard' width='365px' height='334px'></img>
          </Grid>
          <Grid item className='grid-item'>
            <img className='about-item' src={GDCImg} alt='Zach Hubbard' width='365px' height='334px'></img>
          </Grid>
          <Grid item className='grid-item'>
            <p className="about-item">Hello, my name is Zach Hubbard, and I have a huge passion 
             for software and web development, computer science, and video games.
             I primarily focus on the programming side of game and software development.
              I enjoy creating, problem-solving, learning new things, and challenging myself.</p>
            <h3 style={{ fontWeight: 'bold' }} className='about-item'>Email: Zhubbs19@gmail.com </h3>
          </Grid>
        </Grid>
      </div>
      <h1 className="base-header">Experience</h1>
        <div className="experience-job">
          <Grid container direction="row" justifyContent="left" className='experience-grid' >
            <Grid item xs='auto' className='grid-item'>
              <p style={{fontWeight:'bold'}}>Mon River Games</p> 
              <p>Morgantown, WV</p>
              <p>Member, Developer</p>            
            </Grid>
            <Grid item className='grid-item'>
              <p>Member/developer for a Non-Profit 501(c)(3) Voluntary Organization/game development studio 
                using C# and the Unity game engine, creating both 2D and 3D games.</p>
            </Grid>
            <Grid item className='grid-item'>
             <p style={{fontWeight: 'bold', textDecoration: 'underline'}}>May 2022 - Present</p>
            </Grid>
          </Grid>
        </div>
        <div className="experience-job">
          <Grid container direction="row" justifyContent="left" className='experience-grid' >
            <Grid item className='grid-item'>
              <p style={{fontWeight:'bold'}}>Senior Capstone Project - WV State Museum App - West Virginia University</p> 
              <p>Morgantown, WV</p>
              <p>Developer</p>            
            </Grid>
            <Grid item className='grid-item'>
              <p>Lead a team to develop an interactive educational app for visitors of the WV State Museum 
                using the Unity game engine, C# and a Firebase Realtime database. 
                Responsible for implementing user account creation and leaderboard system.</p>
            </Grid>
            <Grid item className='grid-item'>
             <p style={{fontWeight: 'bold', textDecoration: 'underline'}}>August 2022 - May 2023</p>
            </Grid>
          </Grid>
        </div>
        <div className="experience-job">
          <Grid container direction="row" justifyContent="left" className='experience-grid' >
            <Grid item className='grid-item'>
              <p style={{fontWeight:'bold'}}>LCSEE Learning Center, West Virginia University</p> 
              <p>Morgantown, WV</p>
              <p>Tutor</p>            
            </Grid>
            <Grid item className='grid-item'>
              <p className='ml-auto'>Tutored students in 100 to 400-level computer science courses, such as 
                Intro to Computer Science, Intro to Data Structures, Software Engineering, and Operating 
                Systems courses. </p>
            </Grid>
            <Grid item className='grid-item'>
             <p style={{fontWeight: 'bold', textDecoration: 'underline'}}>September 2022 - May 2023</p>
            </Grid>
          </Grid>
        </div>
        <Footer />
    </div>
      );
  }
      export default App;
