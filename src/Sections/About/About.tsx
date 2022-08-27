import React from 'react'
import {ImMobile2,ImLocation2} from "react-icons/im";
import "./about.css";
function About() {
  return (
    <div className='section-container about-container'>
      <div className="img">
        <img src="myPic.png" alt="" />
      </div>
      <div className="text">
        <h1>Sourav Das</h1>
        <div>
           <ImLocation2 fontSize={"20px"}/>
           <p>West Bengal, India</p>
        </div>
        <div>
           <ImMobile2 fontSize={"20px"}/>
           <p>+91 9831639322</p>
        </div>
        <p>I am a very Passionate Full Stack Engineer Skilled in MERN Stack. I am specilized in Frontend. I am looking for opportunity to apply my knowledge and skills to be a valuable asset for the organization and be a better version of myself.I don't have any formal education in coding.My passion for it is my USP.</p>
      </div>
    </div>
  )
}

export default About