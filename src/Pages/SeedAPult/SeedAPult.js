import React from "react";
import NavbarComponent from "../../Components/Navbar";
import Footer from '../../Components/Footer.js';


function SeedAPult() {
  return (
    document.title = "Zach Hubbard | Seed-A-Pult",
    <div className="SeedAPult">
      <NavbarComponent />
      <h1 className="base-header">Appalachian Seed-A-Pult</h1>
      <Footer />
    </div>
  );
}

export default SeedAPult;