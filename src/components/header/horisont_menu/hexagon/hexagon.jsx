import React, { useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  Edges,
  Html,
  Icosahedron,
  MeshReflectorMaterial,
  Text3D,
  useCursor,
} from "@react-three/drei";
import { Group } from "three";
import { Link, useLocation, useNavigate } from "react-router-dom";

function Dodecahedron({ time, ...props }) {
  const ref = useRef();
  const [hovered, setHovered] = useState(false);
  const navigate = useNavigate();
  useFrame(() => {
    if (!hovered) {
      ref.current.rotation.y += -0.01;
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
          navigate(props.link === "home" ? "/" : props.link);
          let obj = {};
          for (let key in props.colors) {
            if (key === props.link) {
              obj[key] = 1;
            } else {
              obj[key] = 0;
            }
          }
          props.fun(obj);
        }}
        onPointerOver={() => setHovered(!hovered)}
        onPointerOut={() => setHovered(!hovered)}
      >
        <Icosahedron args={[1.7, 0]}>
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
          {/* <MeshReflectorMaterial
            blur={[300, 100]}
            resolution={248}
            mixBlur={1}
            mixStrength={0}
            depthScale={1.2}
            minDepthThreshold={0.4}
            maxDepthThreshold={1.4}
           // color={props.colors[props.link] === 1 ? "#e01e14" : "#f5f0f0"}
            wireframe={false}
            flatShading
            roughness={0.4}
            metalness={0.5}
          /> */}
          {/* <Edges scale={1.1} threshold={15} color="white" /> */}
        </Icosahedron>
      </mesh>

      <Text3D
        {...props}
        onClick={() => console.log(props)}
        height={0.05}
        lineHeight={0.2}
        letterSpacing={0.03}
        size={0.5}
        font="/fonts/Hind_Siliguri_Regular.json"
        position={props.textPos}
      >
        {props.link.toUpperCase()}
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
}

let HexagonMenuElement = (props) => {
  const [colors, setColors] = useState({ home: 0, wiki: 0, contacts: 0 });
  const ref = useRef();
  let fun = (obj) => {
    setColors(obj);
  };
  return (
    <group ref={ref}>
      <Dodecahedron
        elPos={[-5, 1, -1]}
        link="home"
        textPos={[-5.3, 2.2, 0.5]}
        anim={props.anim}
        colors={colors}
        fun={fun}
      />
      <Dodecahedron
        elPos={[0, 0.8, -3]}
        link="wiki"
        textPos={[-0.8, 2.2, -1.4]}
        anim={props.anim}
        colors={colors}
        fun={fun}
      />
      <Dodecahedron
        elPos={[4, 1, 1]}
        link="contacts"
        textPos={[1.6, 2.2, 2.5]}
        anim={props.anim}
        colors={colors}
        fun={fun}
      />
    </group>
  );
};
export default HexagonMenuElement;
