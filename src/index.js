import React from 'react';
import './index.css';
import App from './Components/App';
import { HashRouter } from 'react-router-dom';
import { createRoot } from 'react-dom';

createRoot(document.getElementById('root')).render(
  <HashRouter>
    <App />
  </HashRouter>
);

<React.StrictMode>
    <HashRouter basename='/home'>
      <App />
    </HashRouter>
  </React.StrictMode>