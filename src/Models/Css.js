/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Model({ ...props }) {
  const group = useRef()
  const { nodes, materials } = useGLTF('/css.glb')
  return (
    <group position={[-1,-2,0]} rotation={[0,Math.PI,0]} scale={[1.4,1.4,1.4]} ref={group} {...props} dispose={null}>
      <mesh geometry={nodes.Cube.geometry} material={materials['Material.001']} position={[-0.6, 1.52, -0.52]} rotation={[0, 0, 0.04]} scale={[1, 1, 0.23]} />
      <mesh geometry={nodes.Text.geometry} material={materials['Material.004']} position={[0.28, 1.21, -0.81]} rotation={[1.62, -0.01, -3.12]} scale={[1.05, 1, 1.11]} />
    </group>
  )
}

useGLTF.preload('/css.glb')
