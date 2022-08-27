import React from "react";
import "./contact.css";
import contactData from "./contactData";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
function Contact() {
  return (
    <div className="contact-container">
      <h1>Contact Me</h1>
      <p>
        If you are a recruiter looking for a passionate Frontend Engineer or
        FullStack Engineer please feel free to contact me. You can reach out to
        me on these following:-{" "}
      </p>
      <div className="contacts">
        {contactData.map(({ Model, heading,link }) => (
            <div key={heading} onClick={() => window.open(link,"_blank")}>
              <Canvas style={{ width: "100%", height: "100%" }}>
                <ambientLight />
                <OrbitControls enableZoom={false} />
                <pointLight position={[10, 10, 10]} />
                <Model />
              </Canvas>
            </div>
        ))}
      </div>
    </div>
  );
}

export default Contact;
