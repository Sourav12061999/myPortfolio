import React from "react";
import "./Experience.css";
import data from "./exp.data";
import TreeView from "./TreeView";
function Experience() {
  return (
    <div className="section-container experience-container">
        <h1>Experience</h1>
      <div>
        <div>
          {data.map(({ company, about, myRole }) => (
            <div key={company}>
              <h2>{company}</h2>
              <p>{about}</p>
              <div>
                {myRole.map(({ title, time, description }) => (
                  <div key={title}>
                    <TreeView
                      title={title}
                      time={time}
                      description={description}
                    />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Experience;
