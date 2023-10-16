import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './Components/App';
import CourseProjects from './Pages/Course Projects/CourseProjects';
import GameProjects from './Pages/Game Projects/GameProjects';
import WVQuest from './Pages/Games/WVQuest';
import DawnOfAlina from './Pages/Games/DawnOfAlina';
import SeedAPult from './Pages/Games/SeedAPult';
import Experience from './Pages/Experience/Experience';
import EndlessJump from './Pages/Games/EndlessJump';
import HighBytesOS from './Pages/Course Projects/HighBytesOS';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "course-projects",
    element: <CourseProjects/>,
  },
  {
    path: "game-projects",
    element: <GameProjects/>,
  },
  {
    path: "Experience",
    element: <Experience/>,
  },
  {
    path: "WVQuest",
    element: <WVQuest/>,
  },
  {
    path: "DawnOfAlina",
    element: <DawnOfAlina/>,
  },
  {
    path: "SeedAPult",
    element: <SeedAPult/>,
  },
  {
    path: "EndlessJump",
    element: <EndlessJump/>,
  },
  {
    path: "HighBytesOS",
    element: <HighBytesOS/>,
  },
  {
    path: "https://docs.google.com/document/d/1H1XwJ3p6x9V9Zm2vF0q4r6uQJXy5Yb1j/edit?usp=sharing&ouid=116077486025085684967&rtpof=true&sd=true", 
  },
  {
    path: "https://www.linkedin.com/in/zachary-hubbard-39645b204/", 
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={router} />
);