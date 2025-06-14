//#region imports 
import React from 'react';
import './Experience.css';
import '../../Components/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from '../../Components/Navbar/Navbar.js';
import Footer from '../../Components/Footer/Footer.js';
import { Grid } from "@mui/material"
//#endregion imports 

function Experience() { /* Handles Experience Page */
  return (
    document.title = "Zach Hubbard | Home",
    <div className="Global">
      <Navbar />
      <h1 className="base-header">Experience</h1>
      <div className="experience-job">
        <Grid container direction="row" justifyContent="left" className='experience-grid' >
          <Grid item className='grid-item' xs={12} sm={4}>
            <p className="name" style={{ fontWeight: 'bold', fontStyle: 'italic' }}>Hatch Coding</p>
            <p className="name">Remote</p>
            <p className="name" style={{ fontWeight: 'bold' }}>Online Coding Coach</p>
          </Grid>
          <Grid item className='grid-item' xs={12} sm={4}>
            <p className='info'>Online programming coach/tutor for middle through high school students, 
            helping students improve their programming skills through JavaScript, Python, and the Unity game engine.</p>
          </Grid>
          <Grid item className='grid-item' xs={12} sm={4}>
            <p className='date' style={{ fontWeight: 'bold', textDecoration: 'underline' }}>July 2024 - Present</p>
          </Grid>
        </Grid>
      </div>
      <div className="experience-job">
        <Grid container direction="row" justifyContent="left" className='experience-grid' >
          <Grid item className='grid-item' xs={12} sm={4}>
            <p className="name" style={{ fontWeight: 'bold', fontStyle: 'italic' }}>My Tutoring Partners</p>
            <p className="name">Remote</p>
            <p className="name" style={{ fontWeight: 'bold' }}>Online Tutor</p>
          </Grid>
          <Grid item className='grid-item' xs={12} sm={4}>
            <p className='info'>Seasonal online tutor for middle school through college students in mathematics, reading, and writing, helping them
              achieve their academic goals and attain grade-level milestones.</p>
          </Grid>
          <Grid item className='grid-item' xs={12} sm={4}>
            <p className='date' style={{ fontWeight: 'bold', textDecoration: 'underline' }}>October 2023 - May 2024</p>
          </Grid>
        </Grid>
      </div>
      <div className="experience-job">
        <Grid container direction="row" justifyContent="left" className='experience-grid' >
          <Grid item className='grid-item' xs={12} sm={4}>
            <p className="name" style={{ fontWeight: 'bold', fontStyle: 'italic' }}>Mon River Games</p>
            <p className="name">Morgantown, WV</p>
            <p className="name" style={{ fontWeight: 'bold' }}>Member, Developer</p>
          </Grid>
          <Grid item className='grid-item' xs={12} sm={4}>
            <p className='info'>Member/developer for a Non-Profit 501(c)(3) Voluntary Organization/game development studio
              using C# and the Unity game engine, creating both 2D and 3D games.</p>
          </Grid>
          <Grid item className='grid-item' xs={12} sm={4}>
            <p className='date' style={{ fontWeight: 'bold', textDecoration: 'underline' }}>May 2022 - Present</p>
          </Grid>
        </Grid>
      </div>
      <div className="experience-job">
        <Grid container direction="row" justifyContent="left" className='experience-grid' >
          <Grid item className='grid-item' xs={12} sm={4}>
            <p className="name" style={{ fontWeight: 'bold', fontStyle: 'italic' }}>Senior Capstone Project - WV State Museum App - West Virginia University</p>
            <p className="name">Morgantown, WV</p>
            <p className="name" style={{ fontWeight: 'bold' }}>Developer</p>
          </Grid>
          <Grid item className='grid-item' xs={12} sm={4}>
            <p className='info'>Lead a team to develop an interactive educational app for visitors of the WV State Museum
              using the Unity game engine, C# and a Firebase Realtime database.
              Responsible for implementing user account creation and leaderboard system.</p>
          </Grid>
          <Grid item className='grid-item' xs={12} sm={4}>
            <p className='date' style={{ fontWeight: 'bold', textDecoration: 'underline' }}>August 2022 - May 2023</p>
          </Grid>
        </Grid>
      </div>
      <div className="experience-job">
        <Grid container direction="row" justifyContent="left" className='experience-grid' >
          <Grid item className='grid-item' xs={12} sm={4}>
            <p className="name" style={{ fontWeight: 'bold', fontStyle: 'italic' }}>LCSEE Learning Center, West Virginia University</p>
            <p className="name" >Morgantown, WV</p>
            <p className="name" style={{ fontWeight: 'bold' }}>Tutor</p>
          </Grid>
          <Grid item className='grid-item' xs={12} sm={4}>
            <p className='info'>Tutored students in 100 to 400-level computer science courses, such as
              Intro to Computer Science, Intro to Data Structures, Software Engineering, and Operating
              Systems courses. </p>
          </Grid>
          <Grid item className='grid-item' xs={12} sm={4}>
            <p className='date' style={{ fontWeight: 'bold', textDecoration: 'underline' }}>September 2022 - May 2023</p>
          </Grid>
        </Grid>
      </div>
      <div className="experience-job">
        <Grid container direction="row" justifyContent="left" className='experience-grid' >
          <Grid item className='grid-item' xs={12} sm={4}>
            <p className="name" style={{ fontWeight: 'bold', fontStyle: 'italic' }}>Cleveland State University</p>
            <p className="name" >Cleveland, OH</p>
            <p className="name" style={{ fontWeight: 'bold' }}>Undergraduate Researcher - Rehabilitation Engineering</p>
          </Grid>
          <Grid item className='grid-item' xs={12} sm={4}>
            <p className='info'>Created new and worked with existing MATLAB scripts to analyze and graph motion-capture data for post-stroke individuals participating in motion-based balance tasks as part of a summer internship and research project.
              Presented my work at the Midwest American Society of Biomechanics Conference in Cleveland, OH in September 2021. </p>
          </Grid>
          <Grid item className='grid-item' xs={12} sm={4}>
            <p className='date' style={{ fontWeight: 'bold', textDecoration: 'underline' }}>May 2021 - August 2021</p>
          </Grid>
        </Grid>
      </div>
      <div className="experience-skills">
        <Grid container direction="row" className='experience-grid' >
          <Grid item className='grid-item' xs={12} sm={12}>
          <div className='education'>
            <h3 style={{ fontWeight: 'bold', textDecoration: 'underline', fontSize: '1.5rem', paddingBottom: '1%'}}>Education</h3>
            <strong className='subheader' style={{ padding: '1%' }}>Savannah College of Art and Design (SCAD), Savannah GA</strong>
            <li className='bullet-list'><strong>Master of Fine Arts, Interactive Design and Game Development</strong></li>
                  <li className='bullet-list'><strong>GPA: 3.85</strong></li>
            <li className='bullet-list'><strong>Expected Graduation June 2026</strong></li>
          </div>
          <div className='education'>
            <strong className='subheader' style={{ padding: '1%' }}>West Virginia University, Morgantown, WV</strong>
            <li className='bullet-list'><strong>Bachelor of Science in Computer Science, Minor in Philosophy</strong></li>
            <li className='bullet-list'><strong>GPA: 3.37</strong></li>
            <li className='bullet-list'><strong>Graduated May 2023</strong></li>
          </div>
            <h3 style={{ fontWeight: 'bold', textDecoration: 'underline', fontSize: '1.5rem', padding: '2%' }}>Skills</h3>
            <li className='bullet-list'><strong>Languages: </strong> C#, Java, C/C++, Python, Javascript, HTML, CSS</li>
            <li className='bullet-list'><strong>Operating Systems: </strong>Windows, Linux</li>
            <li className='bullet-list'><strong>Game Engines: </strong>Unity, Unreal Engine</li>
            <li className='bullet-list'><strong>Graphics and Modeling: </strong>Maya, Blender, OpenGL</li>
            <li className='bullet-list'><strong>Databases: </strong>Firebase, Oracle Database, MySQL</li>
            <li className='bullet-list'><strong>Version Control: </strong>Git, Github, BitBucket</li>

            <h3 style={{ fontWeight: 'bold', textDecoration: 'underline', fontSize: '1.5rem', padding: '2%' }}>Activites</h3>
            <li className='bullet-list'><strong>2021-2022 Secretary, 2022-2023 Vice President - WVU Game Developers Club</strong></li>
            <li className='bullet-list'><strong>2022-2023 Treasurer - WVU X-Reality (VR/AR Club)</strong></li>
          </Grid>
        </Grid>
      </div>
      <Footer />
    </div>
  );
}
export default Experience;