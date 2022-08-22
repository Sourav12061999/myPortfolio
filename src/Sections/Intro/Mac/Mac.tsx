import React from "react";
import { Canvas } from "@react-three/fiber";
import MacModel from "../../../Models/MAC";
import { OrbitControls } from "@react-three/drei";
function Mac() {
  return (
    <div className="intro-mac-container">
      <Canvas style={{width:"100%",height:"100%"}}>
        <ambientLight />
        <OrbitControls enableZoom={false}/>
        <pointLight position={[10, 10, 10]} />
        <MacModel/>
      </Canvas>
    </div>
  );
}

export default Mac;
