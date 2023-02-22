import React from "react";
import s from "./rifled.module.css";
import { useTranslation } from "react-i18next";
import { Button, Divider, Image } from "antd";
const WeaponsRifled = (props) => {
  const { t } = useTranslation();

  return (
    <>
      <div className={s.main}>
        <h1>{t("search.rifled-weapons.title")}</h1>
        <div className={s.block}>
          <figure className={s.img} style={{ float: "right" }}>
            <Image
              width={250}
              src="/img/pages/rifled_weapons/rw1.jpg"
              alt={t("search.rifled-weapons.title")}
            />
            <figcaption className={s.img_des}>
              <h4>Подпись к изображению</h4>
            </figcaption>
          </figure>
          <p>{t("search.rifled-weapons.p1")}</p>
        </div>
        <div className={s.block}>
          <figure className={s.img} style={{ float: "left" }}>
            <Image
              width={250}
              src="/img/pages/rifled_weapons/rw2.jpg"
              alt={t("search.rifled-weapons.title")}
            />
            <figcaption className={s.img_des}>
              <h4>Подпись к изображению</h4>
            </figcaption>
          </figure>
          <p>{t("search.rifled-weapons.p2")}</p>
          <p>{t("search.rifled-weapons.p3")}</p>
          <p>{t("search.rifled-weapons.p4")}</p>
          <p>{t("search.rifled-weapons.p5")}</p>
        </div>

        <div className={s.block}>
          <p className={s.headers}>
            <h2>{t("search.rifled-weapons.h1")}</h2>
          </p>
          <p>{t("search.rifled-weapons.p6")}</p>
          <figure className={s.img} style={{ float: "left", width: 75 }}>
            <Image
              width={75}
              src="/img/pages/rifled_weapons/rw3_1.png"
              alt={t("search.rifled-weapons.title")}
            />
          </figure>
          <p>{t("search.rifled-weapons.p7")}</p>
        </div>
        <div className={s.block}>
          <figure className={s.img} style={{ float: "left", width: 75 }}>
            <Image
              width={75}
              src="/img/pages/rifled_weapons/rw4_1.png"
              alt={t("search.rifled-weapons.title")}
            />
          </figure>
          <p>{t("search.rifled-weapons.p8")}</p>
          <p>{t("search.rifled-weapons.p9")}</p>
        </div>
        <div className={s.block}>
          <figure className={s.img} style={{ float: "left", width: 75 }}>
            <Image
              width={75}
              src="/img/pages/rifled_weapons/rw5_1.png"
              alt={t("search.rifled-weapons.title")}
            />
          </figure>
          <p>{t("search.rifled-weapons.p10")}</p>
        </div>
        <div className={s.block}>
          <figure className={s.img} style={{ float: "left", width: 75 }}>
            <Image
              width={75}
              src="/img/pages/rifled_weapons/rw6_1.png"
              alt={t("search.rifled-weapons.title")}
            />
          </figure>
          <p>{t("search.rifled-weapons.p11")}</p>
        </div>
        <div className={s.block}>
          <p className={s.headers}>
            <h2>{t("search.rifled-weapons.h2")}</h2>
          </p>
          <div className={s.block}>
            <figure className={s.img} style={{ float: "left", width: "auto" }}>
              <Image.PreviewGroup>
                <Image
                  width={65}
                  src="/img/pages/rifled_weapons/rw7.jpg"
                  alt={t("search.rifled-weapons.title")}
                />
                <Image
                  height={170}
                  src="/img/pages/rifled_weapons/rw9.jpg"
                  alt={t("search.rifled-weapons.title")}
                />
              </Image.PreviewGroup>
              <figcaption className={s.img_des}></figcaption>
            </figure>
            <p>{t("search.rifled-weapons.p12")}</p>
            <p>{t("search.rifled-weapons.p14")}</p>
          </div>
          <div className={s.block}>
            <figure className={s.img} style={{ float: "right", width: "auto" }}>
              <Image.PreviewGroup>
                <Image
                  width={65}
                  src="/img/pages/rifled_weapons/rw7.jpg"
                  alt={t("search.rifled-weapons.title")}
                />
                <Image
                  height={170}
                  src="/img/pages/rifled_weapons/rw8.jpg"
                  alt={t("search.rifled-weapons.title")}
                />
              </Image.PreviewGroup>
              <figcaption className={s.img_des}></figcaption>
            </figure>
            <p>{t("search.rifled-weapons.p13")}</p>
            <p>{t("search.rifled-weapons.p15")}</p>
            <p>{t("search.rifled-weapons.p16")}</p>
          </div>
        </div>
        <div className={s.block}>
          <p className={s.headers}>
            <h2>{t("search.rifled-weapons.h3")}</h2>
          </p>
          <figure className={s.img} style={{ float: "left" }}>
            <Image
              width={250}
              src="/img/pages/rifled_weapons/rw10.jpg"
              alt={t("search.rifled-weapons.title")}
            />
            <figcaption className={s.img_des}></figcaption>
          </figure>
          <p>{t("search.rifled-weapons.p17")}</p>
          <p>{t("search.rifled-weapons.p18")}</p>
          <p>{t("search.rifled-weapons.p19")}</p>
          <p>{t("search.rifled-weapons.p20")}</p>
          <p>{t("search.rifled-weapons.p21")}</p>
          <p>{t("search.rifled-weapons.p22")}</p>
          <p>{t("search.rifled-weapons.p23")}</p>
          <p className={s.headers}><h2>{t("search.rifled-weapons.p28")}</h2></p>
          <p>{t("search.rifled-weapons.p24")}</p>
          <p>{t("search.rifled-weapons.p25")}</p>
          <p>{t("search.rifled-weapons.p26")}</p>
          <p>{t("search.rifled-weapons.p27")}</p>
         
          <p>{t("search.rifled-weapons.p30")}</p>
          <p>{t("search.rifled-weapons.p31")}</p>
          <p>{t("search.rifled-weapons.p32")}</p>
          <p className={s.headers}><h2>{t("search.rifled-weapons.p38")}</h2></p>
          <p>{t("search.rifled-weapons.p34")}</p>
          <p>{t("search.rifled-weapons.p35")}</p>
          <p>{t("search.rifled-weapons.p36")}</p>
          <p>{t("search.rifled-weapons.p37")}</p>
          
          <p>{t("search.rifled-weapons.p39")}</p>
        </div>
      </div>
    </>
  );
};

export default WeaponsRifled;
