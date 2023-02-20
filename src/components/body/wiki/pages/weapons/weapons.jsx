import React from "react";
import s from "./weapons.module.css";
import { useTranslation } from "react-i18next";
import { Button, Divider } from "antd";
import Shield from "../../../../../elements/shield/shield";
import VideoBackground from "../../../../../elements/videoBackGround/videoBackGround";

const Weapons = (props) => {
  const { t } = useTranslation();
  return (
    <>
      {/* <div className={s.header}>
        <Button type="primary" className={s.edit_but}>
          {t("buttons.edit_page")}
        </Button>
        <span>{t("left_menu.weapons.title")}</span>
      </div> */}
     
    
      <div className={s.main}>
        <p>{t("search.weapons.p1")}</p>
        <p>{t("search.weapons.p2")}</p>
        <p>{t("search.weapons.l1h")}</p>
        <ul>
          <li>{t("search.weapons.l1p1")}</li>
          <li>{t("search.weapons.l1p2")}</li>
          <li>{t("search.weapons.l1p3")}</li>
        </ul>
        <p>{t("search.weapons.p3")}</p>
        <p>{t("search.weapons.p4")}</p>
        <p>{t("search.weapons.l2h")}</p>
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
    </>
  );
};

export default Weapons;
