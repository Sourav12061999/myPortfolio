import React from "react";
import "./skill.css";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import skillData from "./skillData";
function Skills() {
  return (
    <div className="section-container skill-container">
      <h1>Skills</h1>
      <div>
        {skillData.map(({ Model, heading }) => (
          <div key={heading}>
            <Canvas
              style={{ width: "100%", height: "100%" }}
            >
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

export default Skills;
