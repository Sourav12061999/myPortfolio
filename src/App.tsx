import React from "react";
import "./App.css";
import { Canvas, } from "@react-three/fiber";
import Model from "./HTML";
import { OrbitControls } from "@react-three/drei";
function App() {
  return (
    <div className="App">
      <Canvas style={{width:"100%",height:"100vh"}} color="black">
        <ambientLight />
        <OrbitControls/>
        <pointLight position={[10, 10, 10]} />
        <Model/>
      </Canvas>
      ,
    </div>
  );
}

export default App;
