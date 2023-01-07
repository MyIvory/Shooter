import s from "./horisont_menu.module.css";
import React, { Suspense, useRef, useState } from "react";
import HexagonMenuElement from "./hexagon/hexagon";
import { Canvas } from "@react-three/fiber";
import { ContactShadows, Environment } from "@react-three/drei";

let HorisontMenu = (props) => {
  const [anim, setAnim] = useState(true);
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
          <HexagonMenuElement anim={anim} />
        </Canvas>
      </Suspense>
    </div>
  );
};
export default HorisontMenu;
