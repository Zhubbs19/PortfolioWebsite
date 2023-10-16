import React from 'react';
import './index.css';
import App from './Components/App';
import { createRoot } from 'react-dom';
import { RouterProvider } from 'react-router';
import CourseProjects from './Pages/Course Projects/CourseProjects';
import GameProjects from './Pages/Game Projects/GameProjects';
import { createBrowserRouter } from 'react-router-dom';

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

const root = createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={router} />
);