import React from "react";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3, FaAws } from "react-icons/fa";
import { FaJsSquare } from "react-icons/fa";
import { FaReact, FaDocker } from "react-icons/fa";
import { DiNodejs } from "react-icons/di";
import { DiMongodb, DiRedis } from "react-icons/di";
import { SiExpress, SiSocketdotio, SiNextdotjs } from "react-icons/si";
import { AiTwotoneFire } from "react-icons/ai";
import { SiMaterialui } from "react-icons/si";
import { IconType } from "react-icons";
const projectData: Array<ProjectType> = [
  {
    heading: "Full Stack Clone of Udemy",
    description: `This is the Full Stack Clone of the Famous Online Course Platform Udemy. This is a Full Stack website
        where I have used React and Material UI in Front End and Node,Express and Mongoose in Backend. The Fontend is deployed in
        Vercel and Backend is deployed in Heroku.`,
    github: "https://github.com/Sourav12061999/udemy-clone-front-end.git",
    live: "https://udemy-clone-front-end.vercel.app/",
    techStack: [FaReact, SiMaterialui, SiExpress, DiMongodb, DiNodejs],
    img: "https://raw.githubusercontent.com/Sourav12061999/portfolio/master/public/udemy-pic.png",
  },
];

export type ProjectType = {
  heading: string;
  description: string;
  img: string;
  techStack: Array<IconType>;
  github: string;
  live: string;
};

export default projectData;
