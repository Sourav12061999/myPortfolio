import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Model({ ...props }) {
  const group = useRef()
  const { nodes, materials } = useGLTF('/HTML.glb')
  return (
    <group position={[-1,-2,0]} scale={[1.4,1.4,1.4]} rotation={[0,Math.PI,0]} ref={group} {...props} dispose={null}>
      <mesh geometry={nodes.Cube.geometry} material={materials['Material.001']} position={[-0.6, 1.65, -0.52]} scale={[1, 1, 0.23]} />
      <mesh geometry={nodes.Text.geometry} material={materials['Material.004']} position={[0.44, 1.32, -0.81]} rotation={[1.62, -0.01, -3.12]} scale={[0.79, 1, 1]} />
    </group>
  )
}

useGLTF.preload('/HTML.glb')