import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BPQuestSystemCard, ReactorLevelDesignCard, StepAheadCard} from "./Card/Card";
import { Link } from "react-router-dom";
import { Grid, Container, Box, Button } from "@mui/material";
import Image2Img from '../Images/Homepage/image2.png';
import siteTheme from '../SiteTheme.js';
import { ThemeProvider } from "@mui/material/styles";
import PageWrapper from './PageWrapper/PageWrapper';

const RESUME_URL = "https://drive.google.com/file/d/1OCzhkLCWfZ5nWLExsAy0WAApGkR03BHa/view?usp=sharing";
const GITHUB_URL = "https://github.com/Zhubbs19";
const SKILLS = ["Unreal Engine 5 & Blueprints", "Unity & C#", "Flutter & Dart", "React", "Blender & Maya", "Level design"];

const heroButton = { px: 4, py: 1.5, fontSize: "1rem", borderRadius: 1.5 };
const heroOutlined = {
  ...heroButton,
  borderColor: "rgba(255,255,255,0.5)",
  color: "#fff",
  "&:hover": { borderColor: "#fff", bgcolor: "rgba(255,255,255,0.1)" },
};

function App() {
  return (
    <ThemeProvider theme={siteTheme}>
      <PageWrapper title="Zach Hubbard | Home">

        {/* Hero Section */}
        <Box className="hero-section">
          <Container maxWidth="md">
            <h1 className="hero-title">Hi, I'm Zach Hubbard</h1>
            <p className="hero-subtitle">Game Developer &amp; Software Engineer</p>
            <p className="hero-pitch">
              I build games and apps, from gameplay systems and designer tools in Unreal Engine and Unity
              to community-driven mobile apps in Flutter. Recent work includes StepAhead, a walking navigation
              app with live hazard alerts, and a Blueprint quest-authoring tool.
            </p>
            <ul className="hero-skills" aria-label="Skills">
              {SKILLS.map(skill => <li key={skill}>{skill}</li>)}
            </ul>
            <Box className="hero-cta">
              <Button variant="contained" size="large" component={Link} to="/game-projects" sx={heroButton}>
                View Projects
              </Button>
              <Button variant="outlined" size="large" component="a" href={RESUME_URL} target="_blank" rel="noopener noreferrer" sx={heroOutlined}>
                Resume
              </Button>
              <Button variant="outlined" size="large" component="a" href={GITHUB_URL} target="_blank" rel="noopener noreferrer" sx={heroOutlined}>
                GitHub
              </Button>
              <Button variant="outlined" size="large" component="a" href="mailto:Zhubbs19@gmail.com" sx={heroOutlined}>
                Get in Touch
              </Button>
            </Box>
          </Container>
        </Box>

        <h2 className="base-header" style={{ marginLeft: '1rem', marginRight: '1rem' }}>Featured Projects</h2>

        <Container maxWidth="xl" sx={{ px: { xs: 2, sm: 3, md: 4 }, py: 6 }}>
          <Grid 
            container 
            spacing={3} 
            direction="row" 
            justifyContent="center" 
            alignItems="stretch"
          >
            <Grid item xs={12} sm={6} md={4}>
              <StepAheadCard />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <BPQuestSystemCard />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <ReactorLevelDesignCard />
            </Grid>
          </Grid>
          <Box sx={{ textAlign: 'center', mt: 5 }}>
            <Button component={Link} to="/game-projects" variant="contained" size="large" sx={{ px: 4, py: 1.5 }}>
              View All Projects
            </Button>
          </Box>
        </Container>

        <h2 className="base-header" style={{ marginLeft: '1rem', marginRight: '1rem' }}>About Me</h2>

        <Container maxWidth="xl" sx={{ px: { xs: 2, sm: 3, md: 4 } }}>
          <Box className="about-content" sx={{ margin: '0 auto 2rem' }}>
            <Grid container spacing={4} justifyContent="center" alignItems="center">
              <Grid item xs={12} sm={6} md={4} className='media-item'>
                <div className='img-container'>
                  <img src={Image2Img} alt='Zach Hubbard' style={{ objectPosition: 'top' }} />
                </div>
              </Grid>
              <Grid item xs={12} md={4} className='info-item'>
                <p style={{ padding: "1rem" }}>
                  Hello, I'm Zach Hubbard. I have a huge passion
                  for game and software development, computer science, and video games.
                  I primarily focus on the programming side of game and software development, and 
                  enjoy creating, problem-solving, learning new things, and challenging myself.
                </p>
              </Grid>
            </Grid>
          </Box>
        </Container>
      </PageWrapper>
    </ThemeProvider>
  );
}

export default App;