import React from "react";
import { ProjectType } from "./project.data";
function Card({
  heading,
  description,
  img,
  techStack,
  github,
  live,
}: ProjectType) {
  return (
    <div className="card">
      <div className="card-img">
        <img src={img} alt="" />
      </div>
      <div className="card-text">
        <h2>{heading}</h2>
        <div className="card-tech">
          {techStack.map((Icon, index) => (
            <div key={index}>
              <Icon size={"30px"} />
            </div>
          ))}
        </div>
        <p>{description}</p>
        <div className="card-footer">
          <a target={"_blank"} href={github}>
            Github
          </a>
          <a target={"_blank"} href={live}>
            Live
          </a>
        </div>
      </div>
    </div>
  );
}

export default Card;
