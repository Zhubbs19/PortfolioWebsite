//#region imports
import React from 'react';
import App from './Components/App';
import { createRoot } from 'react-dom';
import { RouterProvider } from 'react-router';
import CourseProjects from './Pages/Course Projects/CourseProjects';
import GameProjects from './Pages/Game Projects/GameProjects';
import Experience from './Pages/Experience/Experience';
import WVQuest from './Pages/Games/WVQuest';
import DawnOfAlina from './Pages/Games/DawnOfAlina';
import SeedAPult from './Pages/Games/SeedAPult';
import HighBytesOS from './Pages/Course Projects/HighBytesOS';
import BlenderProjects from './Pages/Games/BlenderProjects';
import { createHashRouter } from 'react-router-dom';
import PhotoshopProjects from './Pages/Games/PhotoshopProjects';
import CartSmash from './Pages/Games/CartSmash';
import EpicDoor from './Pages/Games/EpicDoor';
//#endregion

/* Handles website routing so multiple pages can be linked to on the site */
const router = createHashRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "course-projects",
    element: <CourseProjects />,
  },
  {
    path: "game-projects",
    element: <GameProjects />,
  },
  {
    path: "Experience",
    element: <Experience />,
  },
  {
    path: "WVQuest",
    element: <WVQuest />,
  },
  {
    path: "DawnOfAlina",
    element: <DawnOfAlina />,
  },
  {
    path: "SeedAPult",
    element: <SeedAPult />,
  },
  {
    path: "HighBytesOS",
    element: <HighBytesOS />,
  },
  {
    path: "BlenderProjects",
    element: <BlenderProjects />,
  },
  {
    path: "PhotoshopProjects",
    element: <PhotoshopProjects />,
  },
  {
    path: "CartSmash",
    element: <CartSmash />,
  },
  {
    path: "EpicDoor",
    element: <EpicDoor />,
  },
  { // Resume Google Drive link: 
    path: "https://docs.google.com/document/d/1H1XwJ3p6x9V9Zm2vF0q4r6uQJXy5Yb1j/edit?usp=sharing&ouid=116077486025085684967&rtpof=true&sd=true",
  },
  { // LinkedIn Profile link:
    path: "https://www.linkedin.com/in/zachary-hubbard-39645b204/",
  },
]);

const root = createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={router} />
);