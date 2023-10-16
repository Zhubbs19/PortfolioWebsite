import React from 'react';
import './index.css';
import App from './Components/App';
import {HashRouter as Router} from "react-router-dom";

import { createRoot } from 'react-dom';

createRoot(document.getElementById('root')).render(
  <Router>
    <App />
  </Router>
);