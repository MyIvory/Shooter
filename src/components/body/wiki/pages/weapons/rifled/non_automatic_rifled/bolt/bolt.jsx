import React, { Suspense } from "react";
import s from "./bolt.module.css";
import { useTranslation } from "react-i18next";
import { Image } from "antd";
import VideoPlayer from "../../../../../../../../elements/youtube_player/youtube_player";
import { RifledBoltModel } from "../../../../../../../../elements/rifled_bolt_model/rifled_bolt_model";
import { Canvas } from "react-three-fiber";
import { Html, OrbitControls } from "@react-three/drei";
import { useState, useEffect, useRef } from "react";
const d_style = {
  width: "100%",
  height: "300px",
};
const m_style = {
  width: "100%",
  height: "200px",
};
const RifledBoltAction = (props) => {
  const { t } = useTranslation();
  const canvasRef = useRef(null);
  const [width, setWidth] = useState(window.innerWidth);

  // useEffect(() => {
  //   const handleResize = () => {
  //     setWidth(window.innerWidth);
  //   };

  //   window.addEventListener("resize", handleResize);

  //   return () => {
  //     window.removeEventListener("resize", handleResize);
  //   };
  // }, []);

  return (
    <div className={s.main}>
      <div style={{ width: "100%", position: "relative" }}>
        <Canvas
          // ref={canvasRef}
          camera={{ position: [0, 0, 2], zoom: 2.5 }}
          style={window.innerWidth > 600 ? d_style : m_style}
        >
          <OrbitControls target={[0, 0, 0]} />
          <hemisphereLight intensity={0.35} />
          <spotLight
            position={[0, 0, 50]}
            angle={0.3}
            penumbra={1}
            intensity={2}
            castShadow
          />
              <spotLight
            position={[0, 0, -50]}
            angle={0.3}
            penumbra={1}
            intensity={2}
            castShadow
          />
          <Suspense fallback={null}>
           
        <RifledBoltModel/>
          </Suspense>
        </Canvas>
        <div
          style={{
            position: "absolute",
            top: "10px",
            left: "10px",
            zIndex: "999",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            color: "white",
            backgroundColor: "black",
            padding: "5px",
            borderRadius: "5px",
            fontSize: "14px",
            fontWeight: "bold",
          }}
        >
          3D Model
        </div>      
      </div>
      {/* <div className={s.block}>
        <figure className={s.img}>
          <Image
            className={s.antImg}
            src="/img/pages/bolt/b1.png"
            alt={t("search.rifled-bolt-action.ides1")}
          />
          <figcaption className={s.img_des}>
            <h4>{t("search.rifled-bolt-action.ides1")}</h4>
          </figcaption>
        </figure>
        <p>{t("search.rifled-bolt-action.p1")}</p>
        <p>{t("search.rifled-bolt-action.p2")}</p>
      </div> */}
      {/* <div className={s.block}>
        <figure className={s.img} style={{ float: "right", width: 250 }}>
          <Image
            className={s.antImg}
            src="/img/pages/bolt/b2.jpg"
            alt={t("search.rifled-bolt.ides2")}
          />
          <figcaption className={s.img_des}>
            <h4>{t("search.rifled-bolt.ides2")}</h4>
          </figcaption>
        </figure>
        <p>{t("search.rifled-bolt.p3")}</p>
        <p>{t("search.rifled-bolt.p4")}</p>
      </div> */}
      <div className={s.block}>
        <p>{t("search.rifled-bolt-action.p5")}</p>
        <p>{t("search.rifled-bolt-action.p6")}</p>
        <figure className={s.img} style={{ float: "left", width: 250 }}>
          <Image
            className={s.antImg}
            src="/img/pages/bolt/b3.png"
            alt={t("search.rifled-bolt-action.ides3")}
          />
          <figcaption className={s.img_des}>
            <h4>{t("search.rifled-bolt-action.ides3")}</h4>
          </figcaption>
        </figure>
        <p>{t("search.rifled-bolt-action.p7")}</p>
        <p>{t("search.rifled-bolt-action.p8")}</p>
        <p>{t("search.rifled-bolt-action.p9")}</p>
      </div>
      <div className={s.block}>
        <h2>
          <p className={s.headers}>{t("search.rifled-bolt-action.h1")}</p>
        </h2>
        <figure className={s.img} style={{ float: "right", width: 350 }}>
          <Image
            className={s.antImg}
            src="/img/pages/bolt/b4.jpg"
            alt={t("search.rifled-bolt.ides4")}
          />
          <figcaption className={s.img_des}>
            <h4>{t("search.rifled-bolt-action.ides4")}</h4>
          </figcaption>
        </figure>
        <p>{t("search.rifled-bolt-action.p10")}</p>
        <p>{t("search.rifled-bolt-action.p11")}</p>
        <div className={s.video}>
          <VideoPlayer id="igNcDEEl5to" />
          <h4>
            <p className={s.headers}>{t("search.rifled-bolt-action.vdes1")}</p>
          </h4>
        </div>
        <p>{t("search.rifled-bolt-action.p12")}</p>
        <div className={s.video}>
          <VideoPlayer id="geBXTguwkd8" />
          <h4>
            <p className={s.headers}>{t("search.rifled-bolt-action.vdes2")}</p>
          </h4>
        </div>
      </div>
      <div className={s.block}>
        <p>{t("search.rifled-bolt-action.p13")}</p>
        <p>{t("search.rifled-bolt-action.p14")}</p>
      </div>
      <p>{t("search.rifled-bolt-action.p15")}</p>
    </div>
  );
};

export default RifledBoltAction;
