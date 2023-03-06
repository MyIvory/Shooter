import React from "react";
import PropTypes from "prop-types";
import s from "./bolt.module.css";
import { useTranslation } from "react-i18next";
import { Image } from "antd";
import VideoPlayer from "../../../../../../../../elements/youtube_player/youtube_player";
const RifledBoltAction = (props) => {
  const { t } = useTranslation();
  return (
    <div className={s.main}>
      <div className={s.block}>
        <figure className={s.img} style={{ float: "left", width: 250 }}>
          <Image
            className={s.antImg}
            src="/img/pages/bolt/b1.png"
            alt={t("search.rifled-bolt.ides1")}
          />
          <figcaption className={s.img_des}>
            <h4>{t("search.rifled-bolt.ides1")}</h4>
          </figcaption>
        </figure>
        <p>{t("search.rifled-bolt.p1")}</p>
        <p>{t("search.rifled-bolt.p2")}</p>
      </div>
      <div className={s.block}>
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
      </div>
      <div className={s.block}>
        <figure className={s.img} style={{ float: "left", width: 250 }}>
          <Image
            className={s.antImg}
            src="/img/pages/bolt/b3.jpg"
            alt={t("search.rifled-bolt.ides3")}
          />
          <figcaption className={s.img_des}>
            <h4>{t("search.rifled-bolt.ides3")}</h4>
          </figcaption>
        </figure>
        <p>{t("search.rifled-bolt.p5")}</p>
        <p>{t("search.rifled-bolt.p6")}</p>
        <p>{t("search.rifled-bolt.p7")}</p>
        <p>{t("search.rifled-bolt.p8")}</p>
        <p>{t("search.rifled-bolt.p9")}</p>
      </div>
      <div className={s.block}>
        <h2>
          <p className={s.headers}>{t("search.rifled-bolt.h1")}</p>
        </h2>
        <figure className={s.img} style={{ float: "right", width: 350 }}>
          <Image
            className={s.antImg}
            src="/img/pages/bolt/b4.jpg"
            alt={t("search.rifled-bolt.ides4")}
          />
          <figcaption className={s.img_des}>
            <h4>{t("search.rifled-bolt.ides4")}</h4>
          </figcaption>
        </figure>
        <p>{t("search.rifled-bolt.p10")}</p>
        <p>{t("search.rifled-bolt.p11")}</p>
        <div className={s.video}>
          <VideoPlayer id="igNcDEEl5to" />
          <h4>
            <p className={s.headers}>{t("search.rifled-bolt.vdes1")}</p>
          </h4>
        </div>
        <p>{t("search.rifled-bolt.p12")}</p>
        <div className={s.video}>
          <VideoPlayer id="geBXTguwkd8" />
          <h4>
            <p className={s.headers}>{t("search.rifled-bolt.vdes2")}</p>
          </h4>
        </div>
      </div>
      <div className={s.block}>
        <p>{t("search.rifled-bolt.p13")}</p>
        <p>{t("search.rifled-bolt.p14")}</p>
      </div>
      <p>{t("search.rifled-bolt.p15")}</p>
    </div>
  );
};

export default RifledBoltAction;
