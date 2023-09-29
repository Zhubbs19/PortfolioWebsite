import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './Components/App';
import CourseProjects from './Pages/Course Projects/CourseProjects';
import GameProjects from './Pages/Game Projects/GameProjects';

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
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={router} />
);

