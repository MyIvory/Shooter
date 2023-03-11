
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function RifledLeverModel(props) {
  const { nodes, materials } = useGLTF('/models/lever/scene.gltf')
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <mesh geometry={nodes['1873_0'].geometry} material={materials['1873']} position={[-2.03, 0, 0.81]} />
      </group>
    </group>
  )
}

useGLTF.preload('/models/lever/scene.gltf')
