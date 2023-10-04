import React from "react";
import NavbarComponent from "../../Components/Navbar";
import './WVQuest.css';
import '../../Components/App.css';

function WVQuest() {
  return (
    document.title = "Zach Hubbard | WV Quest",
    <div className="WVQuest">
      <NavbarComponent />
      <h1 className="base-header">WV Quest</h1>
    </div>
  );
}

export default WVQuest;