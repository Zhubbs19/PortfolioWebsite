import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Navbar.js';
import ApplachianSeedCard, { DawnOfAlinaCard, WVQuestCard } from "./Card";
import { Grid } from "@mui/material"
import Container from '@mui/material/Container';
import PortfolioImg from './Images/PortfolioCropped.jpg';
import GDCImg from './Images/GDC.JPG';


function App() {
  return (
    document.title = "Zach Hubbard | Home",
    <div className="App">
      <Navbar />
      <div className="Content">
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
      <div>
        <h1 className="about-header">About Me</h1>
      </div>
      <div className="about-content">
        <Grid container direction="row" justifyContent="center" className='about-grid'>
          <Grid item xs={3}>
            <img src={PortfolioImg} alt='Zach Hubbard' width='365px' height='334px'></img>
          </Grid>
          <Grid item xs={3}>
            <img src={GDCImg} alt='Zach Hubbard' width='365px' height='334px'></img>
          </Grid>
          <Grid item xs={3}>
            <p className="about-text">Hello, my name is Zach Hubbard, and I have a huge passion for software and web development, computer science, as well as video games.
              I primarily focus on the programming side of game and software development.
              I enjoy creating, problem-solving, learning new things, and challenging myself.</p>
          </Grid>
        </Grid>
      </div>
      <div>
        <h1 className="about-header">Experience</h1>
      </div>
    </div>
  );
}


export default App;
