import { ContactShadows, Environment } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense, useRef, useState } from "react";
import DodecahedronMy from "../../../../elements/dodecahedron/dodecahedron";
import s from "./leng.module.css";
import { useTranslation, Trans } from "react-i18next";
import { useNavigate, useLocation } from "react-router-dom";

const LengComponent = (props) => {
  const { t, i18n } = useTranslation();
  const [anim, setAnim] = useState(true);
  const navigate = useNavigate();
  const loc = useLocation();

  let defLeng = () => {
    let obj = {};
    if (i18n.language === "ua") {
      obj.en = 0;
      obj.ua = 1;
    } else {
      obj.en = 1;
      obj.ua = 0;
    }
    return obj;
  };
  const [colors, setColors] = useState(defLeng());
  const ref = useRef();
  let setColor = (obj) => {
    setColors(obj);
  };
  let fun = (lang) => {
    i18n.changeLanguage(lang);
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
              elPos={[-4, 1, -1]}
              link="ua"
              textPos={[-4.8, 3, 0.5]}
              anim={props.anim}
              colors={colors}
              fun={() => fun("ua")}
              setColor={setColor}
              ar={[2.2, 2.2, 1.5, 6]}
              textSize={1.5}
            />
            <DodecahedronMy
              elPos={[3, 1.5, -3]}
              link="en"
              textPos={[1.5, 4, -1.4]}
              anim={props.anim}
              colors={colors}
              fun={() => fun("en")}
              setColor={setColor}
              ar={[2.2, 2.2, 1.5, 6]}
              textSize={1.5}
            />
          </group>
        </Canvas>
      </Suspense>
    </div>
  );
};
export default LengComponent;
