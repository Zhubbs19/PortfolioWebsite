import React from "react";
import NavbarComponent from "../../Components/Navbar";
import Footer from '../../Components/Footer.js';
import '../../Components/App.css';
import './SeedAPult.css';


function SeedAPult() {
  return (
    document.title = "Zach Hubbard | Seed-A-Pult",
    <div className="Global">
      <NavbarComponent />
      <h1 className="base-header">Appalachian Seed-A-Pult</h1>
      <Footer />
    </div>
  );
}

export default SeedAPult;