import React from "react";
import s from "./weapons.module.css";
import { useTranslation } from "react-i18next";
import { Button, Divider, Image } from "antd";

const Weapons = (props) => {
  const { t } = useTranslation();
  return (
    <>
      <div className={s.main}>
        <h1>{t("search.weapons.title")}</h1>
        <div className={s.block}>
          {/* <p dangerouslySetInnerHTML={{ __html: highlightString(t("search.weapons.p1"), 0, 2) }}/> */}
          <p >{addStrongTags(t("search.weapons.p1"), 0)}</p>
          <p>{t("search.weapons.p2")}</p>
        </div>
        <p>{t("search.weapons.l1h")}</p>
        <div className={s.block}>
          <div className={s.img} style={{ float: "right" }}>
            <Image width={350} src="/img/pages/weapons/w2.jpg" />
          </div>

           <ul>
             <li>{addStrongTags(t("search.weapons.l1p1"),0)}</li>
            <li>{addStrongTags(t("search.weapons.l1p2"),0)}</li>
            <li>{addStrongTags(t("search.weapons.l1p3"),0)}</li> 
          </ul> 
        </div>
        <div className={s.block}>
          <div className={s.img} style={{ float: "left" }}>
            <Image width={350} src="/img/pages/weapons/w1.jpg" />
          </div>
          <p>{t("search.weapons.p3")}</p>
          <p>{t("search.weapons.p4")}</p>
        </div>
        <div className={s.block}>
          <p>{t("search.weapons.l2h")}</p>
          <div className={s.img} style={{ float: "right" }}>
            <Image width={350} src="/img/pages/weapons/w3.jpg" />
          </div>
          <ul>
            <li>{t("search.weapons.l2p1")}</li>
            <li>{t("search.weapons.l2p2")}</li>
            <li>{t("search.weapons.l2p3")}</li>
            <li>{t("search.weapons.l2p4")}</li>
            <li>{t("search.weapons.l2p5")}</li>
            <li>{t("search.weapons.l2p6")}</li>
            <li>{t("search.weapons.l2p7")}</li>
            <li>{t("search.weapons.l2p8")}</li>
            <li>{t("search.weapons.l2p9")}</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Weapons;

function addStrongTags(string, ...indexes){
  const parts = string.split("/s"); // Разбить строку на части
  return parts.map((part, index) => { // Пройтись по каждой части
    if (indexes.includes(index)) { // Проверить, нужно ли добавить тег <strong>
      return <strong>{part}</strong>;
    } else {
      return part;
    }
  });
};