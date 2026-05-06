import React from "react";
import { Grid, Container } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import PageWrapper from "../../Components/PageWrapper/PageWrapper";
import siteTheme from '../../SiteTheme';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../Components/App.css';
import './GamePages.css';
import CodeViewer from '../../Components/CodeViewer/CodeViewer';

const launchCode = `/* Launch.cs - Handles Seed Launch, Collision Detection, and Plant Growth
   ATTRIBUTION: Created by both Zachary Hubbard and Tessla Muir as part of
   Appalachian Seed-A-Pult for 2023 Global Game Jam.
   Individual contributions cited using code comments. */

public class Launch : MonoBehaviour
{
    [SerializeField] Slider powerBar;       // Tessla Muir
    [SerializeField] Slider verticalBar;    // Tessla Muir
    bool hasLaunched = false;               // Tessla Muir

    private bool hasLanded = false;         // Zachary Hubbard
    private float posBeforeLaunch;
    private float posAfterLaunch;
    private int WindSpeed;
    [SerializeField] TextMeshProUGUI DistanceTxt;
    [SerializeField] TextMeshProUGUI WindSpeedTxt;
    public AudioSource SeedLaunch;
    public AudioSource SeedThud;
    [SerializeField] GameObject seed;
    [SerializeField] Rigidbody2D seedRb;
    private WinAndLose winAndLose;
    public GameObject GrownPlant;

    void Start()
    {
        seed = GameObject.Find("Seed");
        seedRb = seed.GetComponent<Rigidbody2D>();
        winAndLose = GameObject.Find("GameManager").GetComponent<WinAndLose>();
        WindSpeed = Random.Range(0, 10);
        WindSpeedTxt.text = "Wind Speed: " + WindSpeed.ToString() + " MPH";
        posBeforeLaunch = seed.transform.position.x;
    }

    // SeedCollision - Zachary Hubbard
    public void SeedCollision()
    {
        if (hasLaunched && !hasLanded && seedRb.velocity.x <= 0.3 && seedRb.velocity.y <= 0.3)
        {
            SeedThud.Play();
            GetGroundType();
            hasLanded = true;
        }
        posAfterLaunch = seed.transform.position.x;
        int distance = (int)(posAfterLaunch - posBeforeLaunch);
        DistanceTxt.text = "Distance: " + distance.ToString() + " ft";
    }

    // GetGroundType - Zachary Hubbard
    // Determines whether seed landed on fertile or infertile ground
    public void GetGroundType()
    {
        Collider2D[] landsOn = Physics2D.OverlapCircleAll(seed.transform.position, 0.75f);
        foreach (Collider2D collider in landsOn)
        {
            if (collider.tag == "FertileGround")
            {
                GrowPlant();
                winAndLose.Win();
            }
            if (collider.tag == "SparseGround")
            {
                winAndLose.Lose();
            }
        }
    }

    // GrowPlant - Zachary Hubbard
    // Swaps the seed sprite for the grown plant on fertile ground
    public void GrowPlant()
    {
        seed.gameObject.SetActive(false);
        GrownPlant.transform.position = seed.transform.position;
        GrownPlant.SetActive(true);
    }
}`;

const winAndLoseCode = `/* WinAndLose.cs - Created by Zachary Hubbard
   Triggers the appropriate UI screen and sound on win or lose.
   Win  - seed lands on ground tagged as FertileGround.
   Lose - seed lands on ground tagged as SparseGround. */

public class WinAndLose : MonoBehaviour
{
    public AudioSource WinSound;
    public AudioSource LoseSound;
    public GameObject WinUI;
    public GameObject LoseUI;

    public void Win()
    {
        WinUI.SetActive(true);
        WinSound.Play();
    }

    public void Lose()
    {
        LoseUI.SetActive(true);
        LoseSound.Play();
    }
}`;

function SeedAPult() {
  return (
    <ThemeProvider theme={siteTheme}>
      <PageWrapper title="Zach Hubbard | Seed-A-Pult">
        <h1 className="base-header">Appalachian Seed-A-Pult - 2023 Global Game Jam</h1>

        <Container maxWidth="xl" className="about-content">
          <Grid container spacing={4} className='about-grid'>
            <Grid item xs={12} md={8}>
              <div className="media-item">
                <iframe 
                  className="responsive-iframe"
                  src="https://www.youtube.com/embed/uF1FGmbfRDQ" 
                  title="Appalachian Seed-A-Pult Demo - Global Game Jam 2023" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                  referrerPolicy="strict-origin-when-cross-origin" 
                  allowFullScreen
                />
              </div>
            </Grid>
            <Grid item xs={12} md={12}>
              <div className='info-item'>
                <p>
                  Appalachian Seed-A-Pult is a 2D WebGL seed-launching game where you are tasked with catapulting a seed to the correct type of soil where it is fertile and is able to grow.
                  This game was created in the Unity Game Engine through Mon River Games' participation in the 2023 Global Game Jam, where the theme was "Roots".
                </p>
                
                <h3 className="subheader">Throughout the Game's development, I implemented:</h3>
                <ul className="feature-list">
                  <li className='feature'>Collision detection for seeds colliding on fertile/infertile ground and triggering plant growth</li>
                  <li className='feature'>Win and Fail Screens</li>
                  <li className='feature'>Tweaks to seed launch physics</li>
                  <li className='feature'>Audio and Asset imports</li>
                </ul>
                
                <p>All asset attributions can be found on the game's itch.io page or game jam page linked below.</p>
                <a style={{ fontWeight: "bold" }} href="https://globalgamejam.org/games/2023/appalachian-seed-pult">Appalachian Seed-A-Pult - Global Game Jam Submission</a>
              </div>
            </Grid>
          </Grid>

          {/* Code Samples */}
          <Grid container spacing={4} sx={{ mt: 2 }}>
            <Grid item xs={12}>
              <h3 className="subheader">Code Samples</h3>
            </Grid>
            <Grid item xs={12} md={6}>
              <div className='info-item'>
                <h4 className="attribution-subheader">Seed Launch, Collision & Plant Growth</h4>
                <p>Handles seed velocity detection on landing, ground type checking via overlap circle, distance tracking, and swapping the seed sprite for a grown plant on fertile soil. Collaboration with Tessla Muir — individual contributions cited in comments.</p>
                <CodeViewer code={launchCode} filename="Launch.cs" />
              </div>
            </Grid>
            <Grid item xs={12} md={6}>
              <div className='info-item'>
                <h4 className="attribution-subheader">Win / Lose Screens</h4>
                <p>Activates the correct UI screen and plays the corresponding audio when the seed lands on fertile or sparse ground.</p>
                <CodeViewer code={winAndLoseCode} filename="WinAndLose.cs" />
              </div>
            </Grid>
          </Grid>

          <Grid container spacing={2} sx={{ mt: 4 }}>
            <Grid item xs={12}>
              <h3 className="attribution-header">2023 Global Game Jam Participants</h3>
              <div className="info-item">
                <ul className='attribution-list'>
                  <li>Heather Cole (art and asset creation)</li>
                  <li>Zachary Hubbard (programming)</li>
                  <li>Tessla Muir (programming)</li>
                  <li>Joshua Robinson (programming support and audio asset sourcing)</li>
                  <li>Ryan Lee Eicheldinger (helped with game ideation)</li>
                </ul>
              </div>

              <div style={{ marginTop: '1rem' }}>
                <a style={{ fontWeight: "bold" }} href="https://gdimwvu.itch.io/appalachian-seed-a-pult">
                  Appalachian Seed-A-Pult on itch.io
                </a>
              </div>
            </Grid>
          </Grid>
        </Container>
      </PageWrapper>
    </ThemeProvider>
  );
}

export default SeedAPult;