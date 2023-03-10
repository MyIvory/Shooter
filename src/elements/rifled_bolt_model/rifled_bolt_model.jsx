/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.4 scene.gltf
Author: Samantha Michelson (https://sketchfab.com/SMich017)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/rifle-8e67b2941d3b4bc18772fe4665ee94aa
Title: Rifle
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function RifledBoltModel(props) {
  const { nodes, materials } = useGLTF('/models/rifle/RifledBoltModel.gltf')
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={0.94}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <mesh geometry={nodes.defaultMaterial.geometry} material={materials.Material__27} />
          <mesh geometry={nodes.defaultMaterial_1.geometry} material={materials.Material__27} />
          <mesh geometry={nodes.defaultMaterial_2.geometry} material={materials.Material__27} />
          <mesh geometry={nodes.defaultMaterial_3.geometry} material={materials.Material__27} />
          <mesh geometry={nodes.defaultMaterial_4.geometry} material={materials.Material__28} />
          <mesh geometry={nodes.defaultMaterial_5.geometry} material={materials.Material__26} />
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/models/rifle/RifledBoltModel.gltf')
