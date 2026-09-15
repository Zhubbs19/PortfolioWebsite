import React from "react";
import { Grid, Container } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import PageWrapper from "../../Components/PageWrapper/PageWrapper";
import siteTheme from '../../SiteTheme';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../Components/App.css';
import './GamePages.css';
import LevelMapImg from '../../Images/Project_Images/ReactorLevel/slide04_level_map_img1.png';
import Enc1FlowImg from '../../Images/Project_Images/ReactorLevel/slide06_encounter1_design_img1.png';
import Enc1BlockoutImg from '../../Images/Project_Images/ReactorLevel/slide07_encounter1_blockout_img1.png';
import Enc2FlowImg from '../../Images/Project_Images/ReactorLevel/slide08_encounter2_design_img1.png';
import Enc3UmlImg from '../../Images/Project_Images/ReactorLevel/slide10_encounter3_uml_img1.png';

function ReactorLevelDesign() {
  return (
    <ThemeProvider theme={siteTheme}>
      <PageWrapper title="Zach Hubbard | Level Design">
        <h1 className="base-header">Shadow Energy - Level Design</h1>

        <Container maxWidth="xl" className="about-content">
          {/* Video and Description Row */}
          <Grid container spacing={4} className='about-grid'>
            <Grid item xs={12} md={8}>
              <div className="media-item">
                <iframe
                  className="responsive-iframe"
                  src="https://www.youtube.com/embed/b1GwUKBbMiI"
                  title="Shadow Energy - Level Design"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                />
              </div>
            </Grid>

            <Grid item xs={12} md={12}>
              <div className='info-item'>
                <p>
                  <strong>Shadow Energy</strong> is a first-person horror level created for my GAME 724 – Immersive Level Design course.
                  Set inside a dark, long-abandoned government power plant at midnight, the level places the player in the role of an urban
                  explorer who quickly discovers they are not alone. Armed with only a flashlight, the player must navigate tight corridors,
                  air ducts, and flickering halls while managing their flashlight battery — the only thing keeping the pursuing monster at bay.
                </p>
                <p>
                  The level is designed as a linear, single-player experience with an estimated completion time of <strong>10–15 minutes</strong>,
                  structured across three distinct encounters
                </p>
                <ul>
                  <li>
                    <strong>Encounter 1 – Introduction:</strong> The player wakes on the factory floor and learns core mechanics —
                    toggling the flashlight, collecting batteries, crouch-crawling through vents, and activating breaker switch checkpoints —
                    all while a large monster slowly closes in from behind.
                  </li>
                  <li>
                    <strong>Encounter 2 – Small Enemies:</strong> Agile small enemies are introduced alongside the persistent boss
                    threat.
                  </li>
                  <li>
                    <strong>Encounter 3 – Final Boss Fight:</strong> A three-phase climax set in the abandoned reactor core.
                    Phase 1 is a sprint-and-platforming chase as the flashlight loses effectiveness. Phase 2 moves into a large circular
                    reactor room where the player must locate three breaker switches to overload the reactor before escaping through a
                    closing blast door. Phase 3 is a timed escape from the self-destructing power plant.
                  </li>
                </ul>
                <p>
                  Core gameplay pillars center on two Bartle player types: <strong>Achievers</strong> — completing encounters and defeating
                  the boss — and <strong>Explorers</strong> — investigating the factory environment and discovering narrative notes scattered
                  throughout the level. The level was built and blockout-prototyped in <strong>Unreal Engine 5</strong>.
                </p>
              </div>
            </Grid>
          </Grid>

          {/* Level Map */}
          <Grid container spacing={4} sx={{ mt: 4 }}>
            <Grid item xs={12}>
              <h3 className="subheader">Level Map</h3>
              <img
                src={LevelMapImg}
                alt="Full level map showing all encounters and item placements"
                className="responsive-image"
                style={{ width: '100%', maxWidth: '1100px', margin: '0 auto', display: 'block' }}
              />
            </Grid>
          </Grid>

          {/* Encounter Flowcharts */}
          <Grid container spacing={4} sx={{ mt: 4 }}>
            <Grid item xs={12} md={6}>
              <h3 className="subheader">Encounter 1 – Introduction Flow</h3>
              <img
                src={Enc1FlowImg}
                alt="Encounter 1 flowchart: flashlight and monster mechanics"
                className="responsive-image"
                style={{ width: '100%', maxWidth: '500px', margin: '0 auto', display: 'block' }}
              />
            </Grid>
          </Grid>

          <Grid container spacing={4} sx={{ mt: 4 }}>
            <Grid item xs={12} md={6}>
              <h3 className="subheader">Encounter 2 – Planned Small Enemies Flow</h3>
              <img
                src={Enc2FlowImg}
                alt="Encounter 2 flowchart: small enemies and melee weapons"
                className="responsive-image"
                style={{ width: '100%', maxWidth: '500px', margin: '0 auto', display: 'block' }}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <h3 className="subheader">Encounter 3 – Final Boss UML</h3>
              <img
                src={Enc3UmlImg}
                alt="UML diagram of the three-phase final boss encounter"
                className="responsive-image"
                style={{ width: '100%', maxWidth: '500px', margin: '0 auto', display: 'block' }}
              />
            </Grid>
          </Grid>

          {/* Credits and Attributions */}
          <Grid container spacing={2} sx={{ mt: 4 }}>
            <Grid item xs={12}>
              <h3 className="attribution-header">Credits and Attributions</h3>

              <div className="info-item">
                <h4 className="attribution-subheader">Particles</h4>
                <ul className="attribution-list">
                  <li><a href="https://fab.com/s/2b919185c054">M5 VFX Vol2. Fire and Flames(Niagara) by M5VFX from Fab</a></li>
                  <li><a href="https://fab.com/s/b7603e0a549d">Realistic VFX Starter Pack by FX Cat UA from Fab</a></li>
                  <li><a href="https://fab.com/s/025dd2d54bc2">FX Variety Pack by Kakky from Fab</a></li>
                </ul>

                <h4 className="attribution-subheader">Materials</h4>
                <ul className="attribution-list">
                  <li><a href="https://fab.com/s/0a7b875ce8ae">Stylized Metallic Floor by Studio94Roots from Fab</a></li>
                  <li><a href="https://fab.com/s/310223900bd4">Twinmotion Materials Pack by Twinmotion from Fab</a></li>
                  <li><a href="https://fab.com/s/4b38403b56db">Cinder Blocks Wall by Quixel Megascans from Fab</a></li>
                  <li><a href="https://fab.com/s/c282e31479c4">Industrial Concrete floor by Quixel Megascans from Fab</a></li>
                  <li><a href="https://fab.com/s/93837380b770">Stained Concrete Ceiling by Quixel Megascans from Fab</a></li>
                  <li><a href="https://substance3d.adobe.com/community-assets/assets/70f65855af3bf0196f7fecfe30496c7bf4fb7a67">Metalic steel tiled 01 2K Material by Nicolás Acevedo from Adobe Substance Community Assets</a></li>
                  <li><a href="https://substance3d.adobe.com/community-assets/assets/ed2f129cfc35f2fc1d388cde8c65155fd7f57a65">Metallic Tile by Fernando Fergo from Adobe Substance Community Assets</a></li>
                  <li><a href="https://substance3d.adobe.com/community-assets/assets/4c8e5d19141b8af0cf55295c3dda227159b1e794">Concrete Lab Material by Fernando Fergo from Adobe Substance Community Assets</a></li>
                </ul>
                <h4 className="attribution-subheader">Sounds</h4>
                <ul className="attribution-list">
                  <li><a href="https://freesound.org/people/Qat/sounds/107640/">door-open.wav by Quat from Freesound.org</a></li>
                  <li><a href="https://freesound.org/people/Deathscyp/sounds/404049/">Breaker-1.wav by Deathscyp from Freesound.org</a></li>
                  <li><a href="https://freesound.org/people/Leadershinji/sounds/701497/">Reactor_Melt_InProg2.wav by Leadershinji from Freesound.org</a></li>
                  <li><a href="https://freesound.org/people/pdfpxf520/sounds/784771/">Hit02 by pdfpxf520 from Freesound.org</a></li>
                  <li><a href="https://freesound.org/people/Andromadax24/sounds/177433/">S_Death_Slith_10.wav by Andromadax24 from Freesound.org</a></li>
                  <li><a href="https://freesound.org/people/whisperbandnumber1/sounds/397276/">Grunt1.wav by whisperbandnumber1 from Freesound.org</a></li>
                  <li><a href="https://freesound.org/people/NicknameLarry/sounds/489901/">Scary Monster Roar #2 by NicknameLarry from Freesound.org</a></li>
                  <li><a href="https://freesound.org/people/LoudKevin/sounds/707274/">Countdown by loudkevin from Freesound.org</a></li>
                  <li><a href="https://freesound.org/people/miksmusic/sounds/424317/">Explosion in the Air by miksmusic from Freesound.org</a></li>
                  <li><a href="https://freesound.org/people/vintprox/sounds/352531/">challenging-countdown-20s.wav by vintprox from Freesound.org</a></li>
                  <li><a href="https://freesound.org/people/BlondPanda/sounds/659889/">Short Elevator Music Loop by BlondPanda from Freesound.org</a></li>
                  <li><a href="https://freesound.org/people/Leadstarson/sounds/559621/">monster_sound_medium_death.wav by Leadstarson from Freesound.org</a></li>
                  <li><a href="https://freesound.org/people/kernschall/sounds/411109/">thin metal sliding door close shut by kernschall from Freesound.org</a></li>
                  <li><a href="https://freesound.org/people/Matio888/sounds/793491/">Sinister Background Music by Matio888 from Freesound.org</a></li>
                  <li><a href="https://freesound.org/people/SquashedSkinner/sounds/564497/">The Corrupted Gates.wav by SquashedSkinner from Freesound.org</a></li>
                  <li><a href="https://freesound.org/people/blainksaint/sounds/740469/">80 bpm dark scary music loop sci fi by blainksaint from Freesound.org</a></li>
                  <li>All other sounds from gameplay templates</li>
                </ul>
                <h4 className="attribution-subheader">Assets</h4>
                <ul className="attribution-list">
                  <li><a href="https://fab.com/s/0e5fd148aab5">Factory Environment Collection by Denys Rutkovskyi from Fab</a></li>
                  <li><a href="https://fab.com/s/2a822654f66e">Double Doors by Crea2res.com from Fab</a></li>
                  <li><a href="https://fab.com/s/4dfd107fcb5a">Modular Industrial Catwalk Kit [Free] by LineKotsi from Fab</a></li>
                  <li><a href="https://fab.com/s/364544615d02">Industrial Wall Light by Haytham918 from Fab</a></li>
                  <li><a href="https://fab.com/s/fcca88304f72">Sci-Fi Laboratory - Modular Environment pack by ARK.KRA from Fab</a></li>
                  <li><a href="https://fab.com/s/bcd026f305b6">Dirty SciFi Electrical Lever Switch by DEICIDER78 from Fab</a></li>
                  <li><a href="https://fab.com/s/89d4bc985649">Sci-fi Industrial Door by NotARealStudio from Fab</a></li>
                  <li><a href="https://fab.com/s/9a3121956ac8">Monster Pack by Dary Palasky from Fab</a></li>
                  <li><a href="https://fab.com/s/a8ed54ad0a16">Battery Low Poly by Ele.G from Fab</a></li>
                  <li><a href="https://fab.com/s/d228b82c596c">Elevator with Animation LOWPOLY by EFX from Fab</a></li>
                </ul>

                <h4 className="attribution-subheader">Gameplay Templates</h4>
                <ul className="attribution-list">
                  <li><a href="https://fab.com/s/0842b1e00e26">First-Person Movement Template V1 by Treety from Fab</a></li>
                  <li><a href="https://fab.com/s/cd97934a1bcf">FREE Complete Horror Template by DNK Studios from Fab</a></li>
                  <li><a href="https://fab.com/s/fafddc5fcaf6">Bound Horror Framework by Breakboundstudios from Fab</a></li>
                </ul>

                <h4 className="attribution-subheader">Plugins</h4>
                <ul className="attribution-list">
                  <li>Blockout Tools Plugin by Dmitry Karpukhin from Fab</li>
                </ul>
              </div>
            </Grid>
          </Grid>
        </Container>
      </PageWrapper>
    </ThemeProvider>
  );
}

export default ReactorLevelDesign;
