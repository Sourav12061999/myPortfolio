import React from "react";
import "./App.css";
import Intro from "./Sections/Intro/Intro";
import Navbar from "./Component/Navbar/Navbar";
const  Skills = React.lazy(() => import("./Sections/Skills/Skills"));
const  Projects = React.lazy(() => import("./Sections/Projects/Projects"));
const  About = React.lazy(() => import("./Sections/About/About"));
const  Contact = React.lazy(() => import("./Sections/Contact/Contact"));
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Intro/>
      <Skills/>
      <Projects/>
      <About/>
      <Contact/>
    </div>
  );
}

export default App;
