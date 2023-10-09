import React from "react";
import NavbarComponent from "../../Components/Navbar";
import Footer from '../../Components/Footer.js';
import '../../Components/App.css';
import './DawnOfAlina.css';

function DawnOfAlina() {
  return (
    document.title = "Zach Hubbard | Dawn of Alina",
    <div className="Global">
      <NavbarComponent />
      <h1 className="base-header">Dawn Of Alina</h1>
      < Footer />
    </div>
  );
}

export default DawnOfAlina;