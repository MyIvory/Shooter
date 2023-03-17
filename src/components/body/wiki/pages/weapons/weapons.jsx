import React from "react";
import s from "./weapons.module.css";
import { useTranslation } from "react-i18next";
import { Button, Divider, Image } from "antd";
import { Helmet } from "react-helmet";

const Weapons = (props) => {
  const { t } = useTranslation();
  return (
    <div className={s.main}>
      <Helmet>
        <title>Стрілецька зброя - Gid Guns</title>
        <meta name="description" content="Стрілецька зброя - це широкий клас зброї, призначений для поразки цілі шляхом вистрілу кулею, снарядом або іншим боєприпасом, запущеним з ствола." />
        <meta property="og:title" content="Стрілецька зброя - Gid Guns" />
        <meta property="og:description" content="Стрілецька зброя - це широкий клас зброї, призначений для поразки цілі шляхом вистрілу кулею, снарядом або іншим боєприпасом, запущеним з ствола." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="http://gidguns.info/wiki/weapons" />
        <meta property="og:image" content="http://gidguns.info/img/pages/weapons/w1.jpg" />
      </Helmet>
      <div className={s.block}>
        <figure className={s.img}>
          <Image
            className={s.antImg}
            src="/img/pages/weapons/w1.jpg"
            alt={t("search.weapons.ides0")}
          />
        </figure>
        <p>{t("search.weapons.p1")}</p>
        <p>{t("search.weapons.p2")}</p>
      </div>
      <div className={s.block}>
        <p>{t("search.weapons.p3")}</p>
        <p>
          <strong>{t("search.weapons.l1h")}</strong>
        </p>
        <ol>
          <li>{t("search.weapons.l1p1")}</li>
          <li>{t("search.weapons.l1p2")}</li>
          <li>{t("search.weapons.l1p3")}</li>
        </ol>

        <p>
          <strong>{t("search.weapons.l2h")}</strong>
        </p>
        <ol>
          <li>{t("search.weapons.l2p1")}</li>
          <li>{t("search.weapons.l2p2")}</li>
          <li>{t("search.weapons.l2p3")}</li>
          <li>{t("search.weapons.l2p4")}</li>
          <li>{t("search.weapons.l2p5")}</li>
        </ol>
        <p>
          <strong>{t("search.weapons.l3h")}</strong>
        </p>
        <ol>
          <li>{t("search.weapons.l3p1")}</li>
          <li>{t("search.weapons.l3p2")}</li>
        </ol>
        <p>{t("search.weapons.p4")}</p>
      </div>
      <div className={s.block}>
        <p>
          <strong>{t("search.weapons.l4h")}</strong>
        </p>
        <ol>
          <li>{t("search.weapons.l4p1")}</li>
          <li>{t("search.weapons.l4p2")}</li>
          <li>{t("search.weapons.l4p3")}</li>
          <li>{t("search.weapons.l4p4")}</li>
          <li>{t("search.weapons.l4p5")}</li>
        </ol>
        <p>
          <strong>{t("search.weapons.l5h")}</strong>
        </p>
        <ol>
          <li>{t("search.weapons.l5p1")}</li>
          <li>{t("search.weapons.l5p2")}</li>
          <li>{t("search.weapons.l5p3")}</li>  
          <li>{t("search.weapons.l5p4")}</li>        
        </ol>
        <p>{t("search.weapons.p5")}</p>
      </div>
    </div>
  );
};

export default Weapons;

function toStrong(str, ...indexs) {
  return str.split("/s").map((item, index) => {
    return indexs.includes(index) ? <strong>{item}</strong> : item;
  });
}
