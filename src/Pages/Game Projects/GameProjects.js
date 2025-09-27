import EscapeRoomCard, {
  EpicDoorCard, DawnOfAlinaCard, WVQuestCard,
  BlenderProjectsCard, CartSmashCard, ApplachianSeedCard, WeatheredHomeCard
} from "../../Components/Card/Card";
import '../../Components/App.css';
import '../../Components/Card/Card.css';
import { Grid, Container } from "@mui/material";
import siteTheme from '../../SiteTheme';
import { ThemeProvider } from "@mui/material/styles";
import PageWrapper from "../../Components/PageWrapper/PageWrapper";
import { Link } from "react-router-dom";


function GameProjects() {
  return (
    <ThemeProvider theme={siteTheme}>
      <PageWrapper title="Zach Hubbard | Game and Personal Projects">
        <h1 className="base-header">Game and Personal Projects</h1>

        <Container maxWidth="xl" sx={{ px: { xs: 2, sm: 3, md: 4 }, py: 4 }}>
          <Grid container spacing={4} direction="row" justifyContent="center" alignItems="stretch">
            <Grid item xs={12} sm={6} md={4}>
              <WeatheredHomeCard />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <EscapeRoomCard />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <EpicDoorCard />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <WVQuestCard />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <ApplachianSeedCard />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <CartSmashCard />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <DawnOfAlinaCard />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <BlenderProjectsCard />
            </Grid>
          </Grid>
        </Container>
      </PageWrapper>
    </ThemeProvider>
  );
}

export default GameProjects;