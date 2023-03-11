import React, { Suspense } from 'react';
import s from "./lever.module.css";
import { useTranslation } from 'react-i18next';
import { RifledLeverModel } from '../../../../../../../../elements/rifled_lever_model/rifled_lever_model';
import { Canvas } from 'react-three-fiber';
import { OrbitControls } from '@react-three/drei';
import { Image } from 'antd';
import VideoPlayer from '../../../../../../../../elements/youtube_player/youtube_player';

const d_style = {
    width: "100%",
    height: "300px",
};
const m_style = {
    width: "100%",
    height: "200px",
};
const RifledLeverAction = props => {
    const { t } = useTranslation();
    return (
        <div className={s.main}>
            <div style={{ width: "100%", position: "relative" }}>
                <Canvas
                    // ref={canvasRef}
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
            <div className={s.block}>
                <p>{t("search.rifled-lever-action.p1")}</p>
                <p>{t("search.rifled-lever-action.p2")}</p>
            </div>
            <div className={s.block}>
                <figure className={s.img} style={{ float: "left", width: 250 }}>
                    <Image
                        className={s.antImg}
                        src="/img/pages/lever/volcanic.png"
                        alt={t("search.rifled-lever-action.ides1")}
                    />
                    <figcaption className={s.img_des}>
                        <h4>{t("search.rifled-lever-action.ides1")}</h4>
                    </figcaption>
                </figure>
                <p>{t("search.rifled-lever-action.p3")}</p>
            </div>
            <div className={s.block}>
                <figure className={s.img} style={{ float: "right", width: 250 }}>
                    <Image
                        className={s.antImg}
                        src="/img/pages/lever/model-1866.png"
                        alt={t("search.rifled-lever-action.ides2")}
                    />
                    <figcaption className={s.img_des}>
                        <h4>{t("search.rifled-lever-action.ides2")}</h4>
                    </figcaption>
                </figure>
                <p>{t("search.rifled-lever-action.p4")}</p>
            </div>
            <div className={s.block}>
                <figure className={s.img} style={{ float: "left", width: 250 }}>
                    <Image
                        className={s.antImg}
                        src="/img/pages/lever/marlin-336.png"
                        alt={t("search.rifled-lever-action.ides3")}
                    />
                    <figcaption className={s.img_des}>
                        <h4>{t("search.rifled-lever-action.ides3")}</h4>
                    </figcaption>
                </figure>
                <p>{t("search.rifled-lever-action.p5")}</p>
                <p>{t("search.rifled-lever-action.p6")}</p>
            </div>
            <div className={s.video}>
                <VideoPlayer id="58LbxVd4buo" />
                <h4>
                    <p className={s.headers}>{t("search.rifled-lever-action.vdes1")}</p>
                </h4>
            </div>
        </div >
    );
};



export default RifledLeverAction;