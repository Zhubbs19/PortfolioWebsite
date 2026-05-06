import React from "react";
import { Grid, Container } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import PageWrapper from "../../Components/PageWrapper/PageWrapper";
import siteTheme from '../../SiteTheme';
import '../../Components/App.css';
import './GamePages.css';
import WVQuestRegistration from '../../Images/Project_Images/RegistrationWVQuest.PNG';
import WVQuestCamera from '../../Images/Project_Images/WVQuestCameraScreen.PNG';
import CodeViewer from '../../Components/CodeViewer/CodeViewer';
import SwitchboardDemo from '../../Images/Project_Videos/SwitchboardMinigameDemo.mp4';
import SwitchboardDiagram from '../../Images/Project_Images/SwitchboardDiagram.png';
import LeaderboardDiagram from '../../Images/Project_Images/LeaderboardDiagram.png';

const switchboardGameCode = `/* SwitchboardGame.cs - Manages the core game loop for the Switchboard minigame
   in the WV Quest App, and wire color randomization functions. */

public class SwitchboardGame : MonoBehaviour
{
    [System.Serializable]
    public class WireData
    {
        [SerializeField] public int index;
        public WireData(int index, bool isAvailable) { this.index = index; }
    }

    private Color previousColor;
    [SerializeField] private List<Color> GeneratedColors = new List<Color>();
    [SerializeField] public List<Image> BottomLights = new List<Image>();
    [SerializeField] public List<Image> TopLights = new List<Image>();
    [SerializeField] public List<Image> TopLights2 = new List<Image>();
    [SerializeField] public Dictionary<Wire, WireData> TopWiresDict = new Dictionary<Wire, WireData>();
    [SerializeField] public Dictionary<Wire, WireData> BottomWiresDict = new Dictionary<Wire, WireData>();
    [SerializeField] TextMeshProUGUI ScoreTxt;
    [SerializeField] TextMeshProUGUI ScoreAddedTxt;
    [SerializeField] private MenuOrganizer organizer;

    private void FixedUpdate()
    {
        if (IsGameComplete()) CompleteGame();
    }

    private bool IsGameComplete() // Checks if all bottom lights are green and all wires are connected or if time has run out to end the game
    {
        int connectedWires = 0;
        for (int i = 0; i < BottomWiresDict.Count; i++)
        {
            if (BottomLights[i].color == Color.green) connectedWires++;
        }
        if (connectedWires >= BottomWiresDict.Count || GetComponent<TimerManager>().GetTimeLeft() <= 0)
            return true;
        return false;
    }

    public void CompleteGame() // Ends the game, adds score to the user's total app score, and switches to the end game menu
    {
        organizer.SwitchToMenu(2);
        ScoreAddedTxt.text = "Score Added: 1000";
    }

    private Color ColorRandomizer() // Randomizes the hue of the wires, checks for a minimum hue difference to ensure easily distinguishable colors
    {
        float hueMin = 0, hueMax = 1, hueDiff = 0.3f;
        float saturationMin = 1, saturationMax = 1;
        Color newColor = Random.ColorHSV(hueMin, hueMax, saturationMin, saturationMax);
        bool isNotUniqueColor = false;

        foreach (Color color in GeneratedColors)
        {
            if (Mathf.Abs(newColor.r - color.r) < hueDiff &&
                Mathf.Abs(newColor.g - color.g) < hueDiff &&
                Mathf.Abs(newColor.b - color.b) < hueDiff)
                isNotUniqueColor = true;
        }
        if (isNotUniqueColor) ColorRandomizer();
        return newColor;
    }

    private List<Color> GetColorList() // Generates a list of the 5 unique colors for the wires in the game
    {
        int maxColors = 5;
        while (GeneratedColors.Count < maxColors)
            GeneratedColors.Add(ColorRandomizer());
        return GeneratedColors;
    }
}`;

const timerManagerCode = `/* TimerManager.cs - Created by Zachary Hubbard for managing the
   60 second in-game timer for the WV Quest switchboard minigame */

public class TimerManager : MonoBehaviour
{
    [SerializeField] private TextMeshProUGUI TimerText;
    [SerializeField] private int TimerDuration = 13;

    private void OnEnable()
    {
        StartCoroutine(Timer());
    }

    public int GetTimeLeft()
    {
        return TimerDuration;
    }

    public IEnumerator Timer()
    {
        while (TimerDuration > 0)
        {
            WaitForSeconds waitForSeconds = new WaitForSeconds(1);
            yield return waitForSeconds;
            TimerDuration--;
            TimerText.text = "Time: " + TimerDuration.ToString();
        }
    }
}`;

const wireCode = `/* Wire.cs - Manages the rendering and dragging of Wires across the Game UI.
   Code developed by Zachary Hubbard for WV Quest - Switchboard Minigame */

public class Wire : MonoBehaviour
{
    public LineRenderer lineRenderer { get; private set; }
    public Image WireImage { get; private set; }
    private RectTransform RectTransform;
    private SwitchboardGame switchboardGame;
    public Wire connectedWire;

    private void Awake()
    {
        WireImage = GetComponent<Image>();
        lineRenderer = GetComponent<LineRenderer>();
        RectTransform = GetComponentInParent<RectTransform>();
        switchboardGame = GetComponentInParent<SwitchboardGame>();
    }

    public void StartDrag() // Starts the drag of the wire, creates a line from the wire to the mouse position
    {
        Vector2 wireVector;
        RectTransformUtility.ScreenPointToLocalPointInRectangle(
            RectTransform, Input.mousePosition, Camera.main, out wireVector);
        lineRenderer.SetPosition(0, transform.position);
        lineRenderer.SetPosition(1, RectTransform.transform.TransformPoint(wireVector));
    }

    public void EndDrag() // Ends the drag of the wire, checks for a collider with a Wire component to connect to and checks for matching colors to light up the board
        Collider2D collider = Physics2D.OverlapCircle(lineRenderer.GetPosition(1), 1f);
        if (collider != null && collider.GetComponent<Wire>() != null)
            connectedWire = collider.GetComponent<Wire>();

        if (connectedWire != null &&
            this.GetComponent<Image>().color == connectedWire.GetComponent<Image>().color)
        {
            switchboardGame.BottomLights[switchboardGame.BottomWiresDict[this].index].color = Color.green;
            string wireName = connectedWire.gameObject.name;

            if (wireName == "Wire1" || wireName == "Wire6")  switchboardGame.TopLights[0].color = Color.green;
            if (wireName == "Wire2" || wireName == "Wire7")  switchboardGame.TopLights[1].color = Color.green;
            if (wireName == "Wire3" || wireName == "Wire8")  switchboardGame.TopLights[2].color = Color.green;
            if (wireName == "Wire4" || wireName == "Wire9")  switchboardGame.TopLights[3].color = Color.green;
            if (wireName == "Wire5" || wireName == "Wire10") switchboardGame.TopLights[4].color = Color.green;
            if (wireName == "Wire11"|| wireName == "Wire16") switchboardGame.TopLights2[0].color = Color.green;
            if (wireName == "Wire12" || wireName == "Wire17") switchboardGame.TopLights2[1].color = Color.green;
            if (wireName == "Wire13" || wireName == "Wire18") switchboardGame.TopLights2[2].color = Color.green;
            if (wireName == "Wire14" || wireName == "Wire19") switchboardGame.TopLights2[3].color = Color.green;
            if (wireName == "Wire15" || wireName == "Wire20") switchboardGame.TopLights2[4].color = Color.green;
        }
    }
}`;

const leaderboardCode = `/* Leaderboard.cs - Created by Zachary Hubbard as part of the WV Quest mobile app.
   Manages the in-app leaderboard through communication with a Google Firebase
   realtime database. Uses the Firebase Unity SDK and Newtonsoft Json Unity Package. */

public class Leaderboard : MonoBehaviour
{
    [Header("Leaderboard Data")]
    [SerializeField] private string DatabaseURL; // URL for the Firebase realtime database
    [SerializeField] private string JSONString; // JSON string retrieved from the Firebase realtime database, deserialized into a dictionary for easier access to user data
    [SerializeField] private Dictionary<string, Dictionary<string, string>> JSONDict; // Dictionary for deserialized JSON data from Firebase, with the structure of {username: {score: userScore}} for each user in the database
    [SerializeField] private string DataPath;
    [SerializeField] private List<string> Names = new List<string>(); // List of usernames retrieved from the Firebase realtime database
    [SerializeField] private List<int> Scores = new List<int>(); // List of user scores retrieved from the Firebase realtime database, with matching indices to the Names list
    [SerializeField] private Dictionary<string, int> LeaderboardDict = new Dictionary<string, int>();

    private async void Start()
    {
        await GetUserData();
        GetLeaderboardData();
    }

    public async Task UpdateScoreInLeaderboard(int scoretoAdd) // Adds the score from a minigame to the user's total score stored in the Firebase realtime database and updates the leaderboard
    {
        int score = AppManager.instance.CurrentScore + scoretoAdd;
        FirebaseDatabase db = FirebaseDatabase.GetInstance(DatabaseURL);
        DatabaseReference Users = db.GetReference(DataPath + AppManager.instance.CurrentUser);
        Dictionary<string, object> data = new Dictionary<string, object>();
        data.Add("score", score);
        await Users.UpdateChildrenAsync(data);
        await GetUserData();
    }

    public async Task GetUserData()
    {
        await FirebaseDatabase.DefaultInstance.GetReference(DataPath).GetValueAsync().ContinueWith(task =>
        {
            JSONString = task.Result.GetRawJsonValue();
            JSONDict = Newtonsoft.Json.JsonConvert.DeserializeObject<
                Dictionary<string, Dictionary<string, string>>>(JSONString);
        });
    }

    public void GetLeaderboardData()
    {
        if (JSONDict != null)
        {
            Names = JSONDict.Keys.ToList();
            var UserData = JSONDict.Values;
            Scores = (new List<string>(UserData.Select(Data => Data["score"]))).ConvertAll(int.Parse);

            for (int i = 0; i < Names.Count && i < Scores.Count; i++)
                LeaderboardDict.Add(Names[i], Scores[i]);

            // Sort descending by score using LINQ
            LeaderboardDict = (from entry in LeaderboardDict
                               orderby entry.Value descending
                               select entry).ToDictionary(x => x.Key, x => x.Value); // Recreate the Names and Scores lists after sorting the dictionary

            Names = LeaderboardDict.Keys.ToList();
            Scores = LeaderboardDict.Values.ToList();
        }
        UpdateLeaderboard();
    }

    public void UpdateLeaderboard() // Updates the leaderboard UI with the top 8 scores and usernames from the Firebase realtime database
    {
        if (Names.Count >= 1) { FirstPlaceName.text = Names[0]; FirstPlaceScore.text = Scores[0].ToString(); }
        if (Names.Count >= 2) { SecondPlaceName.text = Names[1]; SecondPlaceScore.text = Scores[1].ToString(); }
        if (Names.Count >= 3) { ThirdPlaceName.text = Names[2]; ThirdPlaceScore.text = Scores[2].ToString(); }
        if (Names.Count >= 4) { FourthPlaceName.text = Names[3]; FourthPlaceScore.text = Scores[3].ToString(); }
        if (Names.Count >= 5) { FifthPlaceName.text = Names[4]; FifthPlaceScore.text  = Scores[4].ToString(); }
        if (Names.Count >= 6) { SixthPlaceName.text = Names[5]; SixthPlaceScore.text  = Scores[5].ToString(); }
        if (Names.Count >= 7) { SeventhPlaceName.text= Names[6]; SeventhPlaceScore.text= Scores[6].ToString();}
        if (Names.Count >= 8) { EighthPlaceName.text = Names[7]; EighthPlaceScore.text = Scores[7].ToString(); }
    }
}`;


function WVQuest() {
  return (
    <ThemeProvider theme={siteTheme}>
      <PageWrapper title="Zach Hubbard | WV Quest">
        <h1 className="base-header">WV Quest - State Museum Capstone Project</h1>

        <Container maxWidth="xl" className="about-content">
          <Grid container spacing={4} className='about-grid'>
            <Grid item xs={12} md={4}>
              <div className="media-item">
                <img 
                  className="responsive-image" 
                  src={WVQuestRegistration} 
                  alt='WV Quest Registration Screen'
                />
                <img 
                  className="responsive-image" 
                  src={WVQuestCamera} 
                  alt='WV Quest Camera Screen'
                  style={{ marginTop: '1.5rem' }}
                />
              </div>
            </Grid>
            <Grid item xs={12} md={6}>
              <div className='info-item'>
                <p>
                  WV Quest is an interactive educational app created in collaboration with the West
                  Virginia State Museum, West Virginia University, and Mon River Games.
                  The app allows visitors of the museum, either individually or as part of a group, to scan QR codes at particular
                  exhibits, prompting the user with a minigame based on the exhibit.
                </p>
                <p>
                  This project was developed in Unity Game Engine and uses a Firebase realtime database
                  to store user data. The project was worked on in a seven-person group
                  as part of my West Virginia University Senior Capstone project from Fall 2022 to Spring 2023, 
                  continuing the project from the previous years' group.
                </p>
                <a style={{ fontWeight: "bold" }} href="https://www.monrivergames.com/wvquest">Mon River Games - WV Quest Page</a>
                
                <h3 className="subheader">Throughout the app's development, I have implemented:</h3>
                <ul className="feature-list">
                  <li className='feature'>Unity and Firebase integration</li>
                  <li className='feature'>User/Group registration and login</li>
                  <li className='feature'>Creation of a Switchboard minigame prototype</li>
                  <li className='feature'>A leaderboard displaying the top 8 players' scores across minigames</li>
                  <li className='feature'>Improved QR code scanning system</li>
                  <li className='feature'>System for efficiently loading/unloading UI elements</li>
                  <li className='feature'>User persistence mechanics</li>
                </ul>
              </div>
            </Grid>
          </Grid>

          {/* Switchboard Minigame Section */}
          <Grid container spacing={4} sx={{ mt: 2 }}>
            <Grid item xs={12}>
              <h3 className="subheader">Switchboard Minigame</h3>
            </Grid>

            {/* Demo video + Diagram side by side */}
            <Grid item xs={12} md={7}>
              <div className='info-item'>
                <h4 className="attribution-subheader">Demo</h4>
                <video controls style={{ width: '100%', borderRadius: '8px' }}>
                  <source src={SwitchboardDemo} type="video/mp4" />
                </video>
              </div>
            </Grid>
            <Grid item xs={12} md={5}>
              <div className='info-item'>
                <h4 className="attribution-subheader">Game Loop Diagram</h4>
                <img
                  src={SwitchboardDiagram}
                  alt="Switchboard Minigame Game Loop Diagram"
                  style={{ width: '100%', maxWidth: '420px', display: 'block' }}
                />
              </div>
            </Grid>

            {/* SwitchboardGame.cs full width */}
            <Grid item xs={12}>
              <div className='info-item'>
                <h4 className="attribution-subheader">Game Loop & Color Randomization — SwitchboardGame.cs</h4>
                <p>Manages the core game loop: initializes wire colors randomly, tracks which wires are correctly connected via lights, and ends the game when all wires match or time runs out.</p>
                <CodeViewer code={switchboardGameCode} filename="SwitchboardGame.cs" />
              </div>
            </Grid>

            {/* Wire and TimerManager side by side */}
            <Grid item xs={12} md={12}>
              <div className='info-item'>
                <h4 className="attribution-subheader">Wire Dragging & Connection — Wire.cs</h4>
                <p>Handles rendering and drag interaction for each wire, detecting color matches on drop to light up the corresponding board indicators.</p>
                <CodeViewer code={wireCode} filename="Wire.cs" />
              </div>
            </Grid>
            <Grid item xs={12} md={12}>
              <div className='info-item'>
                <h4 className="attribution-subheader">Timer Manager — TimerManager.cs</h4>
                <p>Coroutine-based countdown timer that ticks once per second and exposes the remaining time to the game loop.</p>
                <CodeViewer code={timerManagerCode} filename="TimerManager.cs" />
              </div>
            </Grid>
          </Grid>

          {/* Leaderboard Section */}
          <Grid container spacing={4} sx={{ mt: 2 }}>
            <Grid item xs={12}>
              <h3 className="subheader">Firebase Leaderboard</h3>
            </Grid>

            {/* Diagram left, code right */}
            
            <Grid item xs={12} md={12}>
              <div className='info-item'>
                <h4 className="attribution-subheader">Leaderboard.cs</h4>
                <p>Queries the Firebase realtime database for all user scores, deserializes the JSON response with Newtonsoft, sorts entries descending with LINQ, and populates the top-8 leaderboard UI.</p>
                <CodeViewer code={leaderboardCode} filename="Leaderboard.cs" />
              </div>
            </Grid>
          </Grid>

          <Grid item xs={12} md={12}>
              <div className='info-item'>
                <h4 className="attribution-subheader">Leaderboard Update Diagram</h4>
                <img
                  src={LeaderboardDiagram}
                  alt="Leaderboard Update Diagram"
                  style={{ width: '100%', maxWidth: '760px', display: 'block' }}
                />
              </div>
            </Grid>

          {/* Attributions */}
          <Grid container spacing={2} sx={{ mt: 4 }}>
            <Grid item xs={12}>
              <h3 className="attribution-header">Credits and Attributions</h3>

              {/* Capstone Groups */}
              <div className="info-item">
                <h4 className="attribution-subheader">Fall 2022 – Spring 2023 Capstone Group Mentors/Members</h4>
                <ul className="attribution-list">
                  <li>Group Mentors – Professor Heather Cole, Dr. Y. V. Ramana Reddy, and Aron Ludwinski</li>
                  <li>CSEE Capstone Group Students – Zachary Hubbard, London Bowen, Tessla Muir, David Snodgrass, Joseph Bradford, Tyler Troutman, and Amy Farson-Ciccone</li>
                  <li>MDIA 472 Capstone Collaborator – Jackson Sigler</li>
                </ul>

                <h4 className="attribution-subheader">Fall 2023 – Spring 2024 Capstone Group Mentors/Members</h4>
                <ul className="attribution-list">
                  <li>Group Mentors – Breanne Myers, Ted Eicher, Tom Heckman, Zachary Hubbard, and Heather Cole</li>
                  <li>CSEE Capstone Group Students – Jayanth Dhage, Masashi Takahashi, Benjamin Bradford, Harrison York, and David Clark</li>
                  <li>MDIA 472 Capstone Collaborators – Alan Lin, Max Goins, and Joud Sabag</li>
                </ul>
              </div>

              {/* Switchboard Minigame */}
              <h4 className="attribution-subheader">WV Quest – Switchboard Minigame Prototype</h4>
              <div className="info-item">
                <h4 className="attribution-subheader">Influences</h4>
                <ul className="attribution-list">
                  <li>Inspired by the wiring task present on maps within the multiplayer video game Among Us. Also inspired by the large switchboard exhibit present at the West Virginia State Museum in Charleston, WV, which is the inspiration for the minigame.</li>
                </ul>

                <h4 className="attribution-subheader">Code Attributions</h4>
                <ul className="attribution-list">
                  <li>Script – Wire.cs – (Lines 19–20, StartDrag() function lines 38–40) – Use of Unity's built-in LineRenderer and RectTransform as a method for rendering and dragging the wires inspired from the Unity tutorial during initial development – <a href="https://www.youtube.com/watch?v=bILijwzJrZg&list=PLbrNQtHGAmEnSptE6uGTsXR2_TF5N6wwB&index=4">How to Make Among Us in Unity #4 | Wire Task (Complete) (youtube.com)</a> by Redefine Gamedev YouTube channel. Code comments are included in the file with the proper attribution.</li>
                  <li>Script – SwitchboardGame.cs – Initial ideation for the script inspired by watching the Unity tutorial <a href="https://www.youtube.com/watch?v=bILijwzJrZg&list=PLbrNQtHGAmEnSptE6uGTsXR2_TF5N6wwB&index=4">How to Make Among Us in Unity #4 | Wire Task (Complete) (youtube.com)</a> by Redefine Gamedev YouTube channel, but code for SwitchboardGame.cs was written by Zachary Hubbard.</li>
                  <li>Script – TimerManager.cs – Code for this script created by Zachary Hubbard.</li>
                </ul>

                <h4 className="attribution-subheader">Game Loop Diagram Attributions</h4>
                <ul className="attribution-list">
                  <li>Switchboard Game Loop Diagram – Created by Zachary Hubbard using the <a href="https://www.drawio.com/">Draw.io</a> diagram tool.</li>
                </ul>

                <h4 className="attribution-subheader">UI and Art Asset Attributions</h4>
                <ul className="attribution-list">
                  <li>Switchboard Main Game UI Background Asset – Created by Alan Lin, a student part of West Virginia University's MDIA 472 capstone course and Mon River Games Fall 2023 session.</li>
                  <li>Start Game Screen Background – <a href="https://www.freepik.com/free-photo/grunge-wall-texture_955569.htm">Grunge wall texture - Free Photo | Grunge wall texture (freepik.com)</a> – Image by kjpargeter on Freepik using Freepik License.</li>
                </ul>
              </div>

              {/* Leaderboard */}
              <h4 className="attribution-subheader">WV Quest – Leaderboard</h4>
              <div className="info-item">
                <h4 className="attribution-subheader">Influences</h4>
                <ul className="attribution-list">
                  <li>The idea to implement a leaderboard was inspired by games that engage users with friendly competition through some type of leaderboard, such as educational quiz apps/websites like <a href="https://kahoot.com/">Kahoot! | Learning games | Make learning awesome!</a></li>
                </ul>

                <h4 className="attribution-subheader">Code Attributions</h4>
                <ul className="attribution-list">
                  <li>C# Script – Leaderboard.cs – The code for this script was created by Zachary Hubbard.</li>
                </ul>

                <h4 className="attribution-subheader">UI and Art Asset Attributions</h4>
                <ul className="attribution-list">
                  <li>Leaderboard UI Panel – Implementation of UI panel by Tessla Muir in the 2023 capstone group.</li>
                  <li>Leaderboard UI Design – Design of leaderboard UI created by Jackson Sigler, a member of Mon River Games and Fall 2022 MDIA Capstone Course.</li>
                  <li>Leaderboard UI Assets – UI assets for the leaderboard were used from Figma by Jackson Sigler.</li>
                </ul>

                <h4 className="attribution-subheader">Leaderboard Update Diagram Attributions</h4>
                <ul className="attribution-list">
                  <li>The leaderboard update diagram was created by Zachary Hubbard using the <a href="https://www.drawio.com/">Draw.io</a> diagram tool.</li>
                </ul>
              </div>
            </Grid>
          </Grid>
        </Container>
      </PageWrapper>
    </ThemeProvider>
  );
}

export default WVQuest;