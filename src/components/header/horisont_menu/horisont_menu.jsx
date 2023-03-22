import s from "./horisont_menu.module.css";
import React, { Suspense, useRef, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { Box, ContactShadows, Environment, Sphere } from "@react-three/drei";

import { useNavigate, useLocation } from "react-router-dom";
import DodecahedronMy from "../../../elements/dodecahedron/dodecahedron";
import { useTranslation } from "react-i18next";

let HorisontMenu = (props) => {
  const loc = useLocation();
  const { i18n } = useTranslation();
  const lang = i18n.language;
  function defColors(){
    let obj = {};
    if (loc.pathname === "/") {
      obj.home = 1;
      obj.wiki = 0;
      obj.contacts = 0;
    } else if(loc.pathname.includes("wiki")) {
      obj.home = 0;
      obj.wiki = 1;
      obj.contacts = 0;
    }else if(loc.pathname.includes("contacts")){
      obj.home = 0;
      obj.wiki = 0;
      obj.contacts = 1;
    }
    return obj;
  };
  const [colors, setColors] = useState(defColors());
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
          camera={{ position: [0, 0, 6.5] }}
        >
          <ambientLight intensity={0.1}/> 
          <pointLight position={[10,10,10]}/>
          <Environment preset="dawn" />
           <ContactShadows
            position={[0, -1, 0]}
            opacity={0.5}
            scale={15}
            blur={1.5}
            
          /> 
          <group ref={ref}>
            <DodecahedronMy
              elPos={[-6, 1, -1]}
              link="home"
              textPos={lang ==="uk"?[-6.7, 2.4, 0.5]:[-5.9, 2.4, 0.5]}
              anim={props.anim}
              colors={colors}
              fun={() => fun("/")}
              setColor={setColor}
              ar={[1.5, 1.5, 1, 6]}
              textSize={0.5}
            />
            
            <DodecahedronMy
              elPos={[0, 1, 1]}
              link="wiki"
              textPos={lang ==="uk"?[-2, 2.6, 1.6]:[-1.4, 2.6, 1.6]}
              anim={props.anim}
              colors={colors}
              fun={() => fun("wiki")}
              setColor={setColor}
              ar={[1.5, 1.5, 1, 6]}
              textSize={0.5}
            />
            <DodecahedronMy
              elPos={[6, 1, -1]}
              link="contacts"
              textPos={lang ==="uk"?[3, 2.4, 0.5]:[3, 2.4, 0.5]}
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
