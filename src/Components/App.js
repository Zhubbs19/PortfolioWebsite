import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import EscapeRoomCard, {EpicDoorCard, WVQuestCard} from "./Card/Card";
import { Grid, Container, Box, Button } from "@mui/material";
import PortfolioImg from '../Images/Homepage/PortfolioCropped.jpg';
import Image2Img from '../Images/Homepage/image2.png';
import siteTheme from '../SiteTheme.js';
import { ThemeProvider } from "@mui/material/styles";
import PageWrapper from './PageWrapper/PageWrapper';

function App() {
  return (
    <ThemeProvider theme={siteTheme}>
      <PageWrapper title="Zach Hubbard | Home">

        {/* Hero Section */}
        <Box className="hero-section">
          <Container maxWidth="md">
            <p className="hero-eyebrow">Welcome to my portfolio</p>
            <h1 className="hero-title">Hi, I'm Zach Hubbard</h1>
            <p className="hero-subtitle">Game Developer &amp; Software Engineer</p>
            <Box className="hero-cta">
              <Button
                variant="contained"
                size="large"
                component="a"
                href="/#/game-projects"
                sx={{ px: 4, py: 1.5, fontSize: '1rem', borderRadius: 1.5, boxShadow: '0 4px 14px rgba(61,90,254,0.4)', '&:hover': { boxShadow: '0 6px 20px rgba(61,90,254,0.5)' } }}
              >
                View Projects
              </Button>
              <Button
                variant="outlined"
                size="large"
                component="a"
                href="mailto:Zhubbs19@gmail.com"
                sx={{ px: 4, py: 1.5, fontSize: '1rem', borderRadius: 1.5, borderColor: 'rgba(255,255,255,0.5)', color: '#fff', '&:hover': { borderColor: '#fff', bgcolor: 'rgba(255,255,255,0.1)' } }}
              >
                Get in Touch
              </Button>
            </Box>
          </Container>
        </Box>

        <h1 className="base-header" style={{ marginLeft: '1rem', marginRight: '1rem' }}>Featured Projects</h1>

        <Container maxWidth="xl" sx={{ px: { xs: 2, sm: 3, md: 4 }, py: 6 }}>
          <Grid 
            container 
            spacing={3} 
            direction="row" 
            justifyContent="center" 
            alignItems="stretch"
          >
            <Grid item xs={12} sm={6} md={4}>
              <EpicDoorCard />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <WVQuestCard />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <EscapeRoomCard />
            </Grid>
          </Grid>
        </Container>

        <h1 className="base-header" style={{ marginLeft: '1rem', marginRight: '1rem' }}>About Me</h1>

        <Container maxWidth="xl" sx={{ px: { xs: 2, sm: 3, md: 4 } }}>
          <Box className="about-content" sx={{ margin: '0 auto' }}>
            <Grid container spacing={4} justifyContent="center" alignItems="center">
              <Grid item xs={12} sm={6} md={4} className='media-item'>
                <div className='img-container'>
                  <img src={PortfolioImg} alt='Zach Hubbard Portfolio' />
                </div>
              </Grid>
              <Grid item xs={12} sm={6} md={4} className='media-item'>
                <div className='img-container'>
                  <img src={Image2Img} alt='Zach Hubbard' style={{ objectPosition: 'top' }} />
                </div>
              </Grid>
              <Grid item xs={12} md={4} className='info-item'>
                <p style={{ padding: "1rem" }}>
                  Hello, my name is Zach Hubbard, and I have a huge passion
                  for game and software development, computer science, and video games.
                  I primarily focus on the programming side of game and software development, and 
                  enjoy creating, problem-solving, learning new things, and challenging myself.
                </p>
                <h3 style={{ padding: "1rem", fontWeight: 'bold' }}>
                  Email: Zhubbs19@gmail.com
                </h3>
              </Grid>
            </Grid>
          </Box>
        </Container>
      </PageWrapper>
    </ThemeProvider>
  );
}

export default App;