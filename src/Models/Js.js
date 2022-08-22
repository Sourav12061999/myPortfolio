import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Model({ ...props }) {
  const group = useRef()
  const { nodes, materials } = useGLTF('/js.glb')
  return (
    <group scale={[1.8,1.8,1.8]} rotation={[0,-Math.PI/2,0]} ref={group} {...props} dispose={null}>
      <mesh geometry={nodes.Cube.geometry} material={materials.Material} scale={[0.21, 1, 1]} />
      <mesh geometry={nodes.Circle.geometry} material={materials['Material.001']} position={[0.26, 0, 0]} rotation={[1.56, 0, -1.58]} scale={[0.93, 1, 0.87]} />
    </group>
  )
}

useGLTF.preload('/js.glb')
