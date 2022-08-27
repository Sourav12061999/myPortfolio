import React, { Fragment } from "react";
import "./project.css";
import Card from "./Card";
import projectData from "./project.data";
function Projects() {
  return (
    <div className="section-container project-container">
      <h1>Projects</h1>
      <div>
        {projectData.map((el) => (
          <Fragment key={el.heading}>
            <Card {...el} />
          </Fragment>
        ))}
      </div>
    </div>
  );
}

export default Projects;
