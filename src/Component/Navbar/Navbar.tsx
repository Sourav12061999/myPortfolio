import React from "react";
import "./nav.css";
function Navbar() {
  return (
    <nav>
      <div className="logo">
        <h1>{"< Sourav />"}</h1>
      </div>
      <div className="links">
        <h3>Home</h3>
        <h3>Skills</h3>
        <h3>Projects</h3>
        <h3>About me</h3>
        <h3>Contact</h3>
      </div>
      <div className="contact">
        <button>Resume</button>
      </div>
    </nav>
  );
}

export default Navbar;
