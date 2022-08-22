import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Model({ ...props }) {
  const group = useRef()
  const { nodes, materials } = useGLTF('/mongodb.glb')
  return (
    <group scale={[1.8,1.8,1.8]} rotation={[0,-Math.PI/2,0]} ref={group} {...props} dispose={null}>
      <mesh geometry={nodes.Cylinder.geometry} material={materials['Material.001']} rotation={[0, 0, 1.56]} scale={[0.91, 0.19, 0.87]} />
      <mesh geometry={nodes.Circle.geometry} material={materials['Material.004']} position={[0.2, 0, 0]} rotation={[1.58, 0, -1.57]} scale={[0.74, 1, 0.74]} />
      <mesh geometry={nodes.Text.geometry} material={materials['Material.001']} position={[0, -1.38, 1]} rotation={[1.57, 0.02, -1.64]} scale={[0.53, 1, 0.75]} />
    </group>
  )
}

useGLTF.preload('/mongodb.glb')
