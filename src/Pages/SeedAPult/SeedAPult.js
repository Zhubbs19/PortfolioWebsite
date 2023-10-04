import React from "react";
import NavbarComponent from "../../Components/Navbar";

function SeedAPult() {
  return (
    document.title = "Zach Hubbard | Seed-A-Pult",
    <div className="SeedAPult">
      <NavbarComponent />
      <h1 className="base-header">Appalachian Seed-A-Pult</h1>
    </div>
  );
}

export default SeedAPult;