import React, { Suspense } from "react";
import s from "./breack.module.css";
import { useTranslation } from "react-i18next";
import { Image } from "antd";
import VideoPlayer from "../../../../../../../../elements/youtube_player/youtube_player";
import { RifledBoltModel } from "../../../../../../../../elements/rifled_bolt_model/rifled_bolt_model";
import { Canvas } from "react-three-fiber";
import { Html, OrbitControls } from "@react-three/drei";
import { useState, useEffect, useRef } from "react";
import { Helmet } from "react-helmet";
import { RifledLeverModel } from "../../../../../../../../elements/rifled_lever_model/rifled_lever_model";

const d_style = {
  width: "100%",
  height: "300px",
};
const m_style = {
  width: "100%",
  height: "200px",
};

const RifledBreakAction = (props) => {
  const { t } = useTranslation();
  return (
    <div className={`${s.main} article_main`}>
      <Helmet>
        <title>Гвинтівка важільного типу - Gid Guns</title>
        <meta
          name="description"
          content="Гвинтівка важільного типу- багатозарядна гвинтівка, в якій перезаряджання при стрільбі здійснюється вручну півколовим рухом спускової скоби (наприклад, скоби Спенсера) навколо спускового гачка. Також таку зброю називають гвинтівкою зі скобою Генрi"
        />
        <meta
          property="og:title"
          content="Гвинтівка важільного типу - Gid Guns"
        />
        <meta
          property="og:description"
          content="Гвинтівка важільного типу- багатозарядна гвинтівка, в якій перезаряджання при стрільбі здійснюється вручну півколовим рухом спускової скоби (наприклад, скоби Спенсера) навколо спускового гачка. Також таку зброю називають гвинтівкою зі скобою Генрi."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="http://gidguns.info/wiki/rifled-lever-action"
        />
        <meta
          property="og:image"
          content="http://gidguns.info/img/pages/lever/model-1866.png"
        />
      </Helmet>
      <div style={{ width: "100%", position: "relative" }}>
        <Canvas
          camera={{ position: [0, 0, 15], zoom: 2 }}
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
            <RifledLeverModel />
          </Suspense>
        </Canvas>
        <div className="Model3dLebel">3D Model</div>
      </div>
      <div className={`${s.block} article_block`}>
        <p>{t("search.rifled-break-action.p1")}</p>
      </div>
      <div className={`${s.block} article_block`}>
        <p>{t("search.rifled-break-action.p2")}</p>
        <p>{t("search.rifled-break-action.p3")}</p>
      </div>
      <div className={`${s.block} article_block`}>
        <p>{t("search.rifled-break-action.p4")}</p>
        <p>{t("search.rifled-break-action.p5")}</p>
        <p>{t("search.rifled-break-action.p6")}</p>
      </div>
      <div className={`${s.block} article_block`}>
        <p>{t("search.rifled-break-action.p7")}</p>
        <p>{t("search.rifled-break-action.p8")}</p>
        <p>{t("search.rifled-break-action.p9")}</p>
      </div>
    </div>
  );
};

export default RifledBreakAction;
