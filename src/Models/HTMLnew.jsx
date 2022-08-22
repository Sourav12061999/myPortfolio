import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export default function HTML({ ...props }) {
  const group = useRef();
  const { nodes, materials } = useGLTF("/scene.gltf");
  return (
    <group ref={group} {...props} dispose={null}>
      <group position={[-0.01, 0, 0]} rotation={[-Math.PI / 2, 0.01, 0]}>
        <group rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
          <group
            position={[0, 0, -1.08]}
            rotation={[-Math.PI / 2, Math.PI / 2, 0]}
            scale={100}
          >
            <mesh
              geometry={nodes["Plane_escudo-2_0"].geometry}
              material={materials["escudo-2"]}
            />
          </group>
          <group
            position={[11.81, 52.91, -1.08]}
            rotation={[-Math.PI / 2, Math.PI / 2, 0]}
            scale={82.79}
          >
            <mesh
              geometry={nodes.Plane001_orange_0.geometry}
              material={materials.orange}
            />
            <mesh
              geometry={nodes["Plane001_orange-lite_0"].geometry}
              material={materials["orange-lite"]}
            />
          </group>
          <group
            position={[61.85, 307.49, 35.17]}
            rotation={[-Math.PI / 2, Math.PI / 2, 0]}
            scale={100}
          >
            <mesh
              geometry={nodes.Plane002_five_0.geometry}
              material={materials.five}
            />
          </group>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/scene.gltf");
