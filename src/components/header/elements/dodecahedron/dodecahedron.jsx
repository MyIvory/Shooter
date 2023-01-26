import React, { useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  Cylinder,
  Edges,
  Html,
  Icosahedron,
  MeshReflectorMaterial,
  Text3D,
  useCursor,
} from "@react-three/drei";
import { Group } from "three";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useTranslation, Trans } from "react-i18next";

const DodecahedronMy = ({ time, ...props }) => {
  const { t, i18n } = useTranslation();
  const ref = useRef();
  const [hovered, setHovered] = useState(false);
  useFrame(() => {
    if (!hovered) {
      let xrot = 0
      ref.current.rotation.x += 0.01;
      ref.current.rotation.y -= 0.01;
      ref.current.scale.x = 1;
      ref.current.scale.y = 1;
      ref.current.scale.z = 1;
    } else {
      ref.current.scale.x = 1.1;
      ref.current.scale.y = 1.1;
      ref.current.scale.z = 1.1;
    }
  });
  useCursor(hovered);
  return (
    <group>
      <mesh
        {...props}
        receiveShadow
        castShadow
        ref={ref}
        position={props.elPos}
        onClick={() => {
          props.fun();
          let obj = {};
          for (let key in props.colors) {
            if (key === props.link) {
              obj[key] = 1;
            } else {
              obj[key] = 0;
            }
          }
          props.setColor(obj);
        }}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
      >
        {/* <Icosahedron args={props.ar}>
          <meshStandardMaterial
            roughness={0.4}
            metalness={0.5}
            blur={[300, 100]}
            mixBlur={1}
            mixStrength={0}
            depthScale={1.2}
            minDepthThreshold={0.4}
            maxDepthThreshold={1.4}
            color={props.colors[props.link] === 1 ? "#e01e14" : "#f5f0f0"}
            wireframe={false}
            flatShading
          />
        </Icosahedron> */}
        <Cylinder args={props.ar}>
          <meshStandardMaterial
            roughness={0.4}
            metalness={0.5}
            blur={[300, 100]}
            mixBlur={1}
            mixStrength={0}
            depthScale={1.2}
            minDepthThreshold={0.4}
            maxDepthThreshold={1.4}
            color={props.colors[props.link] === 1 ? "#e01e14" : "#f5f0f0"}
            wireframe={false}
            flatShading
          />
        </Cylinder>
      </mesh>
      <Text3D
        {...props}
        onClick={() => console.log(props)}
        height={0.05}
        lineHeight={0.2}
        letterSpacing={0.03}
        size={props.textSize}
        font="/fonts/Inter_Light_Regular.json"
        position={props.textPos}
      >
        {t(`horisont_menu.${props.link}`).toUpperCase()}
        <meshStandardMaterial
          blur={[300, 100]}
          resolution={248}
          mixBlur={1}
          mixStrength={0}
          depthScale={1.2}
          minDepthThreshold={0.4}
          maxDepthThreshold={1.4}
          color={"#222224"}
          wireframe={false}
          flatShading
          roughness={0}
          metalness={0.8}
        />
      </Text3D>
    </group>
  );
};
export default DodecahedronMy;
