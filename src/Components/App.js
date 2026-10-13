import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BPQuestSystemCard, ReactorLevelDesignCard, StepAheadCard, RerunTVCard } from "./Card/Card";
import { Link } from "react-router-dom";
import { Grid, Container, Box, Button } from "@mui/material";
import Image2Img from '../Images/Homepage/image2.png';
import siteTheme from '../SiteTheme.js';
import { ThemeProvider } from "@mui/material/styles";
import PageWrapper from './PageWrapper/PageWrapper';

const SKILLS = ["Unreal Engine 5 & Blueprints", "Unity & C#", "Flutter & Dart", "React", "Blender & Maya", "Level design", "Electron & Node.js", "CI/CD & test automation", "Secure software supply chain"];

const heroButton = { px: 4, py: 1.5, fontSize: "1rem", borderRadius: 1.5 };

function App() {
  return (
    <ThemeProvider theme={siteTheme}>
      <PageWrapper title="Zach Hubbard | Home">

        {/* Hero Section */}
        <Box className="hero-section">
          <Container maxWidth="md">
            <img src={Image2Img} alt="Zach Hubbard" className="hero-photo" />
            <h1 className="hero-title">Hi, I'm Zach Hubbard</h1>
            <p className="hero-subtitle">Game Developer &amp; Software Engineer</p>
            <p className="hero-pitch">
              I have a huge passion for game and software development, computer science, and video games.
              I primarily focus on the programming side of game and software development, and
              enjoy creating, problem-solving, learning new things, and challenging myself.
            </p>
            <ul className="hero-skills" aria-label="Skills">
              {SKILLS.map(skill => <li key={skill}>{skill}</li>)}
            </ul>
            <Box className="hero-cta">
              <Button variant="contained" size="large" component="a" href="mailto:Zhubbs19@gmail.com" sx={heroButton}>
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
            <Grid item xs={12} sm={6} md={3}>
              <StepAheadCard />
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <RerunTVCard />
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <BPQuestSystemCard />
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <ReactorLevelDesignCard />
            </Grid>
          </Grid>
          <Box sx={{ textAlign: 'center', mt: 5 }}>
            <Button component={Link} to="/game-projects" variant="contained" size="large" sx={{ px: 4, py: 1.5 }}>
              View All Projects
            </Button>
          </Box>
        </Container>
      </PageWrapper>
    </ThemeProvider>
  );
}

export default App;