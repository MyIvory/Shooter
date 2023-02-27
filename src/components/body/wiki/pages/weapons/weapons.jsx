import React from "react";
import s from "./weapons.module.css";
import { useTranslation } from "react-i18next";
import { Button, Divider, Image } from "antd";

const Weapons = (props) => {
  const { t } = useTranslation();
  return (
    <>
      <div className={s.main}>
        <div className={s.block}>
          <p>{toStrong(t("search.weapons.p1"), 0)}</p>
          <p>{toStrong(t("search.weapons.p2"), 1,2,3)}</p>
        </div>
        <p>{t("search.weapons.l1h")}</p>
        <div className={s.block}>
          <div className={s.img} style={{ float: 'right' }}>
            <Image width={350} src="/img/pages/weapons/w2.jpg" />
          </div>

           <ul>
             <li>{toStrong(t("search.weapons.l1p1"),0)}</li>
            <li>{toStrong(t("search.weapons.l1p2"),0)}</li>
            <li>{toStrong(t("search.weapons.l1p3"),0)}</li> 
          </ul> 
        </div>
        <div className={s.block}>
          <div className={s.img} style={{ float: "left" }}>
            <Image width={350} src="/img/pages/weapons/w1.jpg" />
          </div>
          <p>{toStrong(t("search.weapons.p3"), 0)}</p>
          <p>{toStrong(t("search.weapons.p4"), 0)}</p>
        </div>
        <div className={s.block}>
          <p>{t("search.weapons.l2h")}</p>
          <div className={s.img} style={{ float: "right" }}>
            <Image width={350} src="/img/pages/weapons/w3.jpg" />
          </div>
          <ul>
            <li>{toStrong(t("search.weapons.l2p1"),0)}</li>
            <li>{toStrong(t("search.weapons.l2p2"),0)}</li>
            <li>{toStrong(t("search.weapons.l2p3"),0)}</li>
            <li>{toStrong(t("search.weapons.l2p4"),0)}</li>
            <li>{toStrong(t("search.weapons.l2p5"),0)}</li>
            <li>{toStrong(t("search.weapons.l2p6"),0)}</li>
            <li>{toStrong(t("search.weapons.l2p7"),0)}</li>
            <li>{toStrong(t("search.weapons.l2p8"),0)}</li>
            <li>{toStrong(t("search.weapons.l2p9"),0)}</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Weapons;

function toStrong(str, ...indexs) {
  return str.split("/s").map((item,index) => {
   return indexs.includes(index)?<strong>{item}</strong>:item
  })
}
