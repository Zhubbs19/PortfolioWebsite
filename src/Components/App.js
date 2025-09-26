import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import EscapeRoomCard, { WeatheredHomeCard, EpicDoorCard } from "./Card/Card";
import { Grid, Container, Box } from "@mui/material";
import PortfolioImg from '../Images/Homepage/PortfolioCropped.jpg';
import GDCImg from '../Images/Homepage/GDC.JPG';
import siteTheme from '../SiteTheme.js';
import { ThemeProvider } from "@mui/material/styles";
import PageWrapper from './PageWrapper/PageWrapper';

function App() {
  return (
    <ThemeProvider theme={siteTheme}>
      <PageWrapper title="Zach Hubbard | Home">
        <Container maxWidth="xl" sx={{ px: { xs: 2, sm: 3, md: 4 }, py: 6 }}>
          <Grid 
            container 
            spacing={3} 
            direction="row" 
            justifyContent="center" 
            alignItems="stretch"
          >
            <Grid item xs={12} sm={6} md={4}>
              <EscapeRoomCard />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <EpicDoorCard />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <WeatheredHomeCard />
            </Grid>
          </Grid>
        </Container>

        <h1 className="base-header" style={{ marginLeft: '1rem', marginRight: '1rem' }}>About Me</h1>

        <Container maxWidth="xl" sx={{ px: { xs: 2, sm: 3, md: 4 } }}>
          <Box className="about-content" sx={{ margin: '0 auto' }}>
            <Grid container spacing={4} justifyContent="center" alignItems="center">
              <Grid item xs={12} sm={6} md={4} className='media-item'>
                <img src={PortfolioImg} alt='Zach Hubbard Portfolio' width='400' height='366' />
              </Grid>
              <Grid item xs={12} sm={6} md={4} className='media-item'>
                <img src={GDCImg} alt='Zach Hubbard at GDC' width='400' height='366' />
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