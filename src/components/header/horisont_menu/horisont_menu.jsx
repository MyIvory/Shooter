import s from "./horisont_menu.module.css";
import React, { Suspense, useRef, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { Box, ContactShadows, Environment, Sphere } from "@react-three/drei";
import DodecahedronMy from "../elements/dodecahedron/dodecahedron";
import { useNavigate } from "react-router-dom";

let HorisontMenu = (props) => {
  const [anim, setAnim] = useState(true);
  const [colors, setColors] = useState({ home: 0, wiki: 0, contacts: 0 });
  const ref = useRef();
  const navigate = useNavigate();
  let setColor = (obj) => {
    setColors(obj);
  };
  let fun = (link) => {
    navigate(link);
  };
  return (
    <div className={s.main}>
      <Suspense fallback={null}>
        <Canvas
          shadows
          camera={{ position: [0, 0, 7] }}
          onPointerOver={() => {
            setAnim(false);
          }}
          onPointerOut={() => {
            setAnim(true);
          }}
        >
          <ambientLight intensity={0.6} />
          <Environment preset="dawn" />
          <ContactShadows
            position={[0, -1, 0]}
            opacity={0.5}
            scale={10}
            blur={1.5}
            far={1}
          />
          <group ref={ref}>
            <DodecahedronMy
              elPos={[-5, 1, -1]}
              link="home"
              textPos={[-5.3, 2.2, 0.5]}
              anim={props.anim}
              colors={colors}
              fun={() => fun("/")}
              setColor={setColor}
              ar={[1.5, 1.5, 1, 6]}
              textSize={0.5}
            />
            <DodecahedronMy
              elPos={[0, 0.8, -3]}
              link="wiki"
              textPos={[-0.8, 2.2, -1.4]}
              anim={props.anim}
              colors={colors}
              fun={() => fun("wiki")}
              setColor={setColor}
              ar={[1.5, 1.5, 1, 6]}
              textSize={0.5}
            />
            <DodecahedronMy
              elPos={[4, 1, 1]}
              link="contacts"
              textPos={[1.6, 2.2, 2.5]}
              anim={props.anim}
              colors={colors}
              fun={() => fun("contacts")}
              setColor={setColor}
              ar={[1.5, 1.5, 1, 6]}
              textSize={0.5}
            />
          </group>
        </Canvas>
      </Suspense>
    </div>
  );
};
export default HorisontMenu;
