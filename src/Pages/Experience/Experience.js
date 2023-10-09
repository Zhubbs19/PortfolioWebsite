
import './Experience.css';
import '../../Components/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from '../../Components/Navbar.js';
import Footer from '../../Components/Footer.js';
import { Grid } from "@mui/material"

function Experience () {
    return (
        document.title = "Zach Hubbard | Home",
    <div className="Global">
      <Navbar />
      <h1 className="base-header">Experience</h1>
      <div className="experience-job">
        <Grid container direction="row" justifyContent="left" className='experience-grid' >
          <Grid item xs='auto' className='grid-item'>
            <p style={{ fontWeight: 'bold' }}>Mon River Games</p>
            <p>Morgantown, WV</p>
            <p>Member, Developer</p>
          </Grid>
          <Grid item className='grid-item'>
            <p>Member/developer for a Non-Profit 501(c)(3) Voluntary Organization/game development studio
              using C# and the Unity game engine, creating both 2D and 3D games.</p>
          </Grid>
          <Grid item className='grid-item'>
            <p style={{ fontWeight: 'bold', textDecoration: 'underline' }}>May 2022 - Present</p>
          </Grid>
        </Grid>
      </div>
      <div className="experience-job">
        <Grid container direction="row" justifyContent="left" className='experience-grid' >
          <Grid item className='grid-item'>
            <p style={{ fontWeight: 'bold' }}>Senior Capstone Project - WV State Museum App - West Virginia University</p>
            <p>Morgantown, WV</p>
            <p>Developer</p>
          </Grid>
          <Grid item className='grid-item'>
            <p>Lead a team to develop an interactive educational app for visitors of the WV State Museum
              using the Unity game engine, C# and a Firebase Realtime database.
              Responsible for implementing user account creation and leaderboard system.</p>
          </Grid>
          <Grid item className='grid-item'>
            <p style={{ fontWeight: 'bold', textDecoration: 'underline' }}>August 2022 - May 2023</p>
          </Grid>
        </Grid>
      </div>
      <div className="experience-job">
        <Grid container direction="row" justifyContent="left" className='experience-grid' >
          <Grid item className='grid-item'>
            <p style={{ fontWeight: 'bold' }}>LCSEE Learning Center, West Virginia University</p>
            <p>Morgantown, WV</p>
            <p>Tutor</p>
          </Grid>
          <Grid item className='grid-item'>
            <p className='ml-auto'>Tutored students in 100 to 400-level computer science courses, such as
              Intro to Computer Science, Intro to Data Structures, Software Engineering, and Operating
              Systems courses. </p>
          </Grid>
          <Grid item className='grid-item'>
            <p style={{ fontWeight: 'bold', textDecoration: 'underline' }}>September 2022 - May 2023</p>
          </Grid>
        </Grid>
      </div>
      <div className="experience-skills">
        <Grid container direction="Row" justifyContent="left" className='experience-grid' >
          <Grid item className='grid-item'>
            <h3 style={{ fontWeight: 'bold', textDecoration: 'underline', fontSize: '24px', paddingBottom: '2%'}}>Relevant Courses</h3>
            <li className='bullet-list'><strong>MDIA 472: Advanced Game Design</strong> -
              Developed 2D and 3D Games as a member of a nonprofit games development studio.</li>
            <li className='bullet-list'><strong>CS 210: File and Data Structures</strong> - Development of Java database that can create, store, 
              and print tables and can interpret SQL queries.</li>
            <li className='bullet-list'><strong>CS 440: Database Design and Theory</strong> - Developed an interactive database application using SQL and Oracle Database 
              for the queries and tables, alongside Python and Tkinter for the application UI.</li>
            <li className='bullet-list'><strong>CS 450: Operating Systems Structures</strong> - Worked in a team to implement functionality to a C operating system, such as a 
              command-line terminal, process/memory management, and interrupt-driven IO.</li>
              <li className='bullet-list'><strong>CS 470: Intro to Computer Graphics</strong> - Used Python, Pygame, 
                Tkinter and OpenGL to create simple computer graphics applications.</li>
          </Grid>
          <Grid item className='grid-item'>
            <h3 style={{ fontWeight: 'bold', textDecoration: 'underline', fontSize: '24px', padding: '2%'}}>Education</h3>
            <li className='bullet-list'><strong>West Virginia University, Morgantown, WV</strong></li>
            <li className='bullet-list'><strong>Bachelor of Science in Computer Science, Minor in Philosophy</strong></li>
            <li className='bullet-list'><strong>GPA: 3.34</strong></li>
            <li className='bullet-list'><strong>Graduated May 2023</strong></li>

            <h3 style={{ fontWeight: 'bold', textDecoration: 'underline', fontSize: '24px', padding: '2%'}}>Skills</h3>
            <li className='bullet-list'><strong>Languages: </strong> C#, Java, C, C++, Python, Javascript, HTML, CSS</li>
            <li className='bullet-list'><strong>Operating Systems: </strong>Windows, Linux</li>
            <li className='bullet-list'><strong>Graphics and Design: </strong>Unity, OpenGL</li>
            <li className='bullet-list'><strong>Databases: </strong>MySQL, Firebase, Oracle Database</li>
            <li className='bullet-list'><strong>Version Control: </strong>Git, Github, BitBucket</li>

            <h3 style={{ fontWeight: 'bold', textDecoration: 'underline', fontSize: '24px', padding: '2%'}}>Activites</h3>
            <li className='bullet-list'><strong>2022-2023 Vice President - WVU Game Developers Club</strong></li>
            <li className='bullet-list'><strong>2022-2023 Treasurer - WVU X-Reality (VR/AR Club)</strong></li>
          </Grid>
        </Grid>
      </div>
      <Footer />
    </div>
      );
    }
    export default Experience;