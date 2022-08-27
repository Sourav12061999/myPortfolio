import React from "react";
import "./nav.css";
import {
  Link,
  Button,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller,
} from "react-scroll";
function Navbar() {
  return (
    <nav>
      <div className="logo">
        <h1>{"< Sourav />"}</h1>
      </div>
      <div className="links">
        
        <h3><Link  to="intro-container">Home</Link></h3>
        <h3><Link to="skill-container">Skills</Link></h3>
        <h3><Link to="project-container">Projects</Link></h3>
        <h3><Link to="about-container">About me</Link></h3>
        <h3><Link to="contact-container">Contact</Link></h3>
      </div>
      <div className="contact">
        <button>Resume</button>
      </div>
    </nav>
  );
}

export default Navbar;
