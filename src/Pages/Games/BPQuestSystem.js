import React from "react";
import { Grid, Container } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import PageWrapper from "../../Components/PageWrapper/PageWrapper";
import CreditsDisclosure from "../../Components/Credits/CreditsDisclosure";
import siteTheme from '../../SiteTheme';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../Components/App.css';
import './GamePages.css';
import QuestCreationFSM from '../../Images/Project_Images/QuestSystem/Quest Creation FSM Diagram.drawio.png';
import QuestClassDiagram from '../../Images/Project_Images/QuestSystem/Quest System Class Diagram.drawio.png';
import QuestStateDiagram from '../../Images/Project_Images/QuestSystem/Quest System State Diagram.drawio.png';
import BPInteractableParent from '../../Images/Project_Images/QuestSystem/BP_InteractableParent.png';
import QuestActor from '../../Images/Project_Images/QuestSystem/QuestActor.png';
import QuestManagement from '../../Images/Project_Images/QuestSystem/QuestManagement.png';

function BPQuestSystem() {
  return (
    <ThemeProvider theme={siteTheme}>
      <PageWrapper title="Zach Hubbard | Blueprint Quest Creator and Tracking System">
        <h1 className="base-header">Blueprint Quest Creator and Tracking System</h1>

        <Container maxWidth="xl" className="about-content">
          {/* Video and Description Row */}
          <Grid container spacing={4} className='about-grid'>
            <Grid item xs={12} md={8}>
              <div className="media-item">
                <iframe loading="lazy" className="responsive-iframe" src="https://www.youtube.com/embed/qWCNKJsuuOI" 
                title="Blueprint Quest Creator and Tracking System Overview" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; 
                encrypted-media; gyroscope; picture-in-picture; web-share" 
                referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
              </div>
            </Grid>

            <Grid item xs={12} md={12}>
              <div className='info-item'>
                <p>
                  For my GAME 734 - Systems and Simulation course, I was responsible for pitching and developing an innovative gameplay
                  system or approaching an existing system in a new way. I chose to expand on an existing popular system present within
                  multiple genres of games — a quest tracking and quest creation system.
                </p>
                <p>
                  My goal for the system was to function more as a tool for developers to easily create quests, with custom quest givers,
                  completion requirements, and quest prerequisites. The system was developed fully using Unreal Engine 5 Blueprint scripting.
                  For the quest system I focused on three core tenets:
                </p>
                <ul>
                  <li><strong>Reusability</strong> — The quest system should be easily reused across different UE projects/games and function with minimal setup or retrofitting.</li>
                  <li><strong>Flexibility</strong> — Designers/developers can modify and easily add quest parameters.</li>
                  <li><strong>Ease of Use/User-Centered Design</strong> — The system should be viewable within the editor, with easy to modify quests and easily accessible changes.</li>
                </ul>
              </div>
            </Grid>
          </Grid>

          {/* Quest System Components */}
          <Grid container spacing={4} sx={{ mt: 2 }}>
            <Grid item xs={12}>
              <h2 className="subheader">Quest System Components</h2>
              <div className='info-item'>
                <h3 className="attribution-subheader">Inputs</h3>
                <p>Developers can create a Quest through the following inputs:</p>
                <ul>
                  <li><strong>Quest Name</strong> — A name for the quest</li>
                  <li><strong>Quest Description</strong> — A text description of the quest</li>
                  <li><strong>Quest State</strong> — In-Progress, Complete, or Not Started</li>
                  <li><strong>Preset Quest Types (Enumerable):</strong>
                    <ul>
                      <li><strong>Collection-based</strong> — Collect a specified amount of an item. Developer chooses item amounts and locations.</li>
                      <li><strong>Interaction-based</strong> — Requires the player to interact with items in the game world.</li>
                      <li><strong>Custom Event Type</strong> — Tied to any game event returning true/false for quest completion, allowing more customization.</li>
                    </ul>
                  </li>
                  <li>All quest types have a timed-based option for setting up a timer.</li>
                  <li><strong>Prerequisite Quests List</strong> — Quests that need to be completed or in-progress to start the new quest.</li>
                </ul>

                <h3 className="attribution-subheader">Processes</h3>
                <ul>
                  <li>Created quests are added to the master quest list, awaiting start.</li>
                  <li>When started, the system automatically places necessary quest items in the world.</li>
                  <li>Continually tracks all quests and updates the current quest list as quests are completed.</li>
                </ul>

                <h3 className="attribution-subheader">Outputs</h3>
                <ul>
                  <li>Current states of all quests in the master quest list (not started, in-progress, completed).</li>
                  <li>Separate lists of all completed, current, and upcoming quests.</li>
                  <li>Displayed in an in-game quest UI.</li>
                </ul>

                <h3 className="attribution-subheader">Feedback Loops</h3>
                <ul>
                  <li><strong>Quest Creation</strong> — When a quest is created, there is a feedback loop of the quest that is created being the input.</li>
                  <li><strong>Quest States Tracking</strong> — Quest states are monitored throughout their stages of progress (not started, in-progress, completed) as the player completes them, changing the quest list in the process.</li>
                  <li><strong>Quest Prerequisite Tracking</strong> — Checks a list of prerequisite quests to make sure they have been completed to advance and begin the correct quests when available.</li>
                </ul>
              </div>
            </Grid>
          </Grid>

          {/* Diagrams */}
          <Grid container spacing={4} sx={{ mt: 2 }}>
            <Grid item xs={12}>
              <h2 className="subheader">Diagrams</h2>
            </Grid>
            <Grid item xs={12} md={6}>
              <h3 className="attribution-subheader">Quest Creation FSM Diagram</h3>
              <img loading="lazy"
                src={QuestCreationFSM}
                alt="Quest Creation FSM Diagram"
                className="responsive-image"
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <h3 className="attribution-subheader">Quest System State Diagram</h3>
              <img loading="lazy"
                src={QuestStateDiagram}
                alt="Quest System State Diagram"
                className="responsive-image"
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <h3 className="attribution-subheader">Quest System Class Diagram</h3>
              <img loading="lazy"
                src={QuestClassDiagram}
                alt="Quest System Class Diagram"
                className="responsive-image"
              />
            </Grid>
          </Grid>

          {/* Project Screenshots */}
          <Grid container spacing={4} sx={{ mt: 2 }}>
            <Grid item xs={12}>
              <h2 className="subheader">Project Screenshots</h2>
            </Grid>
            <Grid item xs={12}>
              <h3 className="attribution-subheader">BP Interactable Parent</h3>
              <a href={BPInteractableParent} target="_blank" rel="noopener noreferrer" title="Open full size" style={{ display: 'block' }}>
                <img loading="lazy"
                  src={BPInteractableParent}
                  alt="BP Interactable Parent Blueprint"
                  className="responsive-image"
                  style={{ display: 'block', margin: '0 auto', cursor: 'zoom-in', width: 'auto', maxWidth: '100%' }}
                />
              </a>
              <p style={{ textAlign: 'center', fontSize: '0.85rem', margin: '0.5rem 0 0' }}>Click to view full size</p>
            </Grid>
            <Grid item xs={12}>
              <h3 className="attribution-subheader">Quest Actor</h3>
              <a href={QuestActor} target="_blank" rel="noopener noreferrer" title="Open full size" style={{ display: 'block' }}>
                <img loading="lazy"
                  src={QuestActor}
                  alt="Quest Actor Blueprint"
                  className="responsive-image"
                  style={{ display: 'block', margin: '0 auto', cursor: 'zoom-in', width: 'auto', maxWidth: '100%' }}
                />
              </a>
              <p style={{ textAlign: 'center', fontSize: '0.85rem', margin: '0.5rem 0 0' }}>Click to view full size</p>
            </Grid>
            <Grid item xs={12}>
              <h3 className="attribution-subheader">Quest Management</h3>
              <a href={QuestManagement} target="_blank" rel="noopener noreferrer" title="Open full size" style={{ display: 'block' }}>
                <img loading="lazy"
                  src={QuestManagement}
                  alt="Quest Management Blueprint"
                  className="responsive-image"
                  style={{ display: 'block', margin: '0 auto', cursor: 'zoom-in', width: 'auto', maxWidth: '100%' }}
                />
              </a>
              <p style={{ textAlign: 'center', fontSize: '0.85rem', margin: '0.5rem 0 0' }}>Click to view full size</p>
            </Grid>
          </Grid>

          {/* Credits and Attributions */}
          <Grid container spacing={2} sx={{ mt: 4 }}>
            <Grid item xs={12}>
              <h2 className="attribution-header">Credits and Attributions</h2>

              <div className="info-item">
                <CreditsDisclosure>
                <h3 className="attribution-subheader">Sounds</h3>
                <ul className="attribution-list">
                  <li><a href="https://freesound.org/people/Kenneth_Cooney/sounds/609336/" target="_blank" rel="noopener noreferrer">Completed.wav by Kenneth_Cooney from Freesound.org</a></li>
                  <li><a href="https://freesound.org/people/kanyonwyvern/sounds/699008/" target="_blank" rel="noopener noreferrer">Hmm2.wav by kanyonwyvern from Freesound.org</a></li>
                  <li><a href="https://freesound.org/people/suntemple/sounds/253172/" target="_blank" rel="noopener noreferrer">Retro Bonus Pickup SFX by suntemple from Freesound.org</a></li>
                  <li><a href="https://freesound.org/people/Varnsworth/sounds/425165/" target="_blank" rel="noopener noreferrer">VideoGameRisingSfxPart2.mp3 by Varnsworth from Freesound.org</a></li>
                </ul>

                <h3 className="attribution-subheader">Assets</h3>
                <ul className="attribution-list">
                  <li><a href="https://fab.com/s/290161cfbf4b" target="_blank" rel="noopener noreferrer">Medieval Gloves by Paradoox Fashion from Fab Store</a></li>
                  <li><a href="https://fab.com/s/cc7ac41731d8" target="_blank" rel="noopener noreferrer">Ornate Antique Metal Key by MohmmadAslam from Fab Store</a></li>
                  <li><a href="https://fab.com/s/d3db016501ad" target="_blank" rel="noopener noreferrer">Fantasy Sword by Gerardo Justel from Fab Store</a></li>
                  <li><a href="https://fab.com/s/50a6b1c0fbbc" target="_blank" rel="noopener noreferrer">Medieval Barrel by Dimension Dazzle from Fab Store</a></li>
                  <li><a href="https://fab.com/s/4b169cef91a2" target="_blank" rel="noopener noreferrer">Old/Ancient Scroll by Kigha from Fab Store</a></li>
                  <li><a href="https://fab.com/s/b80031f83bb4" target="_blank" rel="noopener noreferrer">Stylized Golden Doubloon by Kimmy from Fab Store</a></li>
                  <li><a href="https://fab.com/s/bcdcf99021c6" target="_blank" rel="noopener noreferrer">Iron Juggernaut Game Ready FREE by IRON SPEAR from Fab Store</a></li>
                  <li><a href="https://fab.com/s/a3ed2b2c2ba7" target="_blank" rel="noopener noreferrer">Aztec Pillar by DRAGON STUDIO from Fab Store</a></li>
                  <li><a href="https://fab.com/s/4d9736bd1a39" target="_blank" rel="noopener noreferrer">Chest by Blackarus from Fab Store</a></li>
                </ul>

                <h3 className="attribution-subheader">Images/Textures</h3>
                <ul className="attribution-list">
                  <li><a href="https://stock.adobe.com/images/green-check-tick-mark-sign/519994541" target="_blank" rel="noopener noreferrer">Green check tick mark sign by Kavindu on Adobe Stock</a></li>
                  <li><a href="https://stock.adobe.com/search/images?k=red+x&search_type=usertyped&asset_id=1151536077" target="_blank" rel="noopener noreferrer">Red X graphic by Domingo on Adobe Stock</a></li>
                  <li><a href="https://stock.adobe.com/images/paper-vintage-background-recycle-brown-paper-crumpled-texture-old-paper-surface-on-transparent-background-isolated/534030108" target="_blank" rel="noopener noreferrer">Paper vintage background from Adobe Stock</a></li>
                </ul>
                </CreditsDisclosure>
              </div>
            </Grid>
          </Grid>
        </Container>
      </PageWrapper>
    </ThemeProvider>
  );
}

export default BPQuestSystem;
