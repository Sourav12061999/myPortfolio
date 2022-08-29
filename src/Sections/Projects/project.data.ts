import React from "react";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3, FaAws } from "react-icons/fa";
import { FaJsSquare } from "react-icons/fa";
import { FaReact, FaDocker } from "react-icons/fa";
import { DiNodejs } from "react-icons/di";
import { DiMongodb, DiRedis } from "react-icons/di";
import { SiExpress, SiSocketdotio, SiNextdotjs } from "react-icons/si";
import { AiTwotoneFire } from "react-icons/ai";

import { SiMaterialui,SiTypescript } from "react-icons/si";
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
  {
    heading: "Full Stack E-Commerce Website",
    description: `This is a Fully Responsive Full Stack E-Commerce Website. No css framework or component library has been used. Everything is built from scratch.Here I have used all the features of nextjs like getStaticProps and Static Page Generation.`,
    github: "https://github.com/Sourav12061999/We-Commerce",
    live: "https://we-commerce.vercel.app",
    techStack: [FaReact,SiNextdotjs, FaCss3,SiTypescript, DiMongodb, DiNodejs],
    img: "https://next-js-blog-codebash.s3.us-east-2.amazonaws.com/Screenshot+2022-08-29+at+9.30.27+AM.png",
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
