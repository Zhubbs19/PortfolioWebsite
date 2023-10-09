import React from "react";
import NavbarComponent from "../../../Components/Navbar/Navbar";
import './WVQuest.css';
import '../../../Components/App.css';
import Footer from '../../../Components/Footer/Footer.js';

function WVQuest() {
  return (
    document.title = "Zach Hubbard | WV Quest",
    <div className="Global">
      <NavbarComponent />
      <h1 className="base-header">WV Quest</h1>
      <Footer />
    </div>
  );
}

export default WVQuest;