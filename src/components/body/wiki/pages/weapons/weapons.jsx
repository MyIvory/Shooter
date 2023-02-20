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

          <p>{toStrong(t("search.weapons.p1"), 0, 2)}</p>
          <p>{t("search.weapons.p2")}</p>
        </div>
        <p>{t("search.weapons.l1h")}</p>
        <div className={s.block}>
          <div className={s.img} style={{ float: 'right' }}>
            <Image width={350} src="/img/pages/weapons/w2.jpg" />
          </div>

          {/* <ul>
             <li>{toStrong(t("search.weapons.l1p1"),0)}</li>
            <li>{toStrong(t("search.weapons.l1p2"),0)}</li>
            <li>{toStrong(t("search.weapons.l1p3"),0)}</li> 
          </ul> */}
        </div>
        <div className={s.block}>
          <div className={s.img} style={{ float: 'left' }}>
            <Image width={350} src="/img/pages/weapons/w1.jpg" />
          </div>
          <p>{t("search.weapons.p3")}</p>
          <p>{t("search.weapons.p4")}</p>
        </div>
        <div className={s.block}>
          <p>{t("search.weapons.l2h")}</p>
          <div className={s.img} style={{ float: 'right' }}>
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

function toStrong(str, ...indexs) {
  let arr = str.split("/s")
  console.log(arr)
  return arr.map((item) => {
    for(let i of indexs){
      if (arr[i] == item){
        return <strong>{item}</strong>
      }else{
        return item
      }
    }
    //return indexs.map((i) => {
      //console.log( `Item-> ${item} ||| I->${arr[i]}`)      
      //return arr[i] == item ? <strong>{item}</strong> : "item"
      //if (arr[i] == item) {

      //  return <strong>{item}</strong>
      // } else {
      //   return item
      // }
    //})
  })
}