import React from "react";
import s from "./rifled.module.css";
import { useTranslation } from "react-i18next";
import { Button, Divider, Image } from "antd";
import { toStrong } from "../../../../../../redux/reducers/wiki_reduser";
import VideoPlayer from "../../../../../../elements/youtube_player/youtube_player";
const WeaponsRifled = (props) => {
  const { t } = useTranslation();

  return (
    <>
      <div className={s.main}>
      <div className={s.block}>
          <figure className={s.img} style={{ float: "left", width: 250 }}>
            <Image className={s.antImg}
              src="/img/pages/rifled_weapons/arquebus.jpg"
              alt={t("search.rifled-weapons.ides0")}
            />
            <figcaption className={s.img_des}>
              <h4>{t("search.rifled-weapons.ides0")}</h4>
            </figcaption>
          </figure>
          <p>{t("search.rifled-weapons.p-2")}</p>
          <p>{t("search.rifled-weapons.p-1")}</p>
          <p>{t("search.rifled-weapons.p0")}</p>

        </div>
        <div className={s.block}>
          <figure className={s.img} style={{ float: "right", width: 250 }}>
            <Image className={s.antImg}
              src="/img/pages/rifled_weapons/rw1.jpg"
              alt={t("search.rifled-weapons.ides1")}
            />
            <figcaption className={s.img_des}>
              <h4>{t("search.rifled-weapons.ides1")}</h4>
            </figcaption>
          </figure>
          <p>{toStrong(t("search.rifled-weapons.p1"), 0)}</p>

        </div>
        <div className={s.block}>
          <figure className={s.img} style={{ float: "left", width: 250 }}>
            <Image className={s.antImg}
              src="/img/pages/rifled_weapons/rw2.jpg"
              alt={t("search.rifled-weapons.ides2")}
            />
            <figcaption className={s.img_des}>
              <h4>{t("search.rifled-weapons.ides2")}</h4>
            </figcaption>
          </figure>
          <p>{t("search.rifled-weapons.p2")}</p>
          <p>{t("search.rifled-weapons.p3")}</p>
          <p>{t("search.rifled-weapons.p4")}</p>
          <p>{t("search.rifled-weapons.p5")}</p>
          <div>
            <VideoPlayer id="M8ODXkYaJo8" />
            <h4><p className={s.headers}>{t("search.rifled-weapons.vdes1")}</p></h4>
          </div>
        </div>

        <div className={s.block}>
          <h2><p className={s.headers}>
            {t("search.rifled-weapons.h1")}
          </p></h2>
          <p>{t("search.rifled-weapons.p6")}</p>
          <figure className={s.img} style={{ float: "left", width: 75, margin: "5px 20px 0 20px" }}>
            <Image className={s.antImg}
              width={75}
              src="/img/pages/rifled_weapons/rw3_1.png"
              alt={t("search.rifled-weapons.title")}
            />
          </figure>
          <p>{toStrong(t("search.rifled-weapons.p7"), 0)}</p>
        </div>
        <div className={s.block}>
          <p></p>
          <figure className={s.img} style={{ float: "left", width: 75, margin: "5px 20px 0 20px" }}>
            <Image className={s.antImg}
              width={75}
              src="/img/pages/rifled_weapons/rw4_1.png"
              alt={t("search.rifled-weapons.title")}
            />
          </figure>
          <p>{toStrong(t("search.rifled-weapons.p8"), 0)}</p>
        </div>
        <p>{t("search.rifled-weapons.p9")}</p>
        <div className={s.block}>
          <p></p>
          <figure className={s.img} style={{ float: "left", width: 75, margin: "5px 20px 0 20px" }}>
            <Image className={s.antImg}
              width={75}
              src="/img/pages/rifled_weapons/rw5_1.png"
              alt={t("search.rifled-weapons.title")}
            />
          </figure>
          <p>{toStrong(t("search.rifled-weapons.p10"), 1)}</p>
        </div>
        <div className={s.block}>
          <p></p>
          <figure className={s.img} style={{ float: "left", width: 75, margin: "5px 20px 0 20px" }}>
            <Image className={s.antImg}
              width={75}
              src="/img/pages/rifled_weapons/rw6_1.png"
              alt={t("search.rifled-weapons.title")}
            />
          </figure>
          <p>{toStrong(t("search.rifled-weapons.p11"), 1)}</p>
        </div>
        <div className={s.block}>
          <h2> <p className={s.headers}>
            {t("search.rifled-weapons.h2")}
          </p></h2>
          <div className={s.block}>
            <figure className={s.groupImg} style={{ float: "left" }}>
              <div>
                <Image.PreviewGroup className={s.antImg}>
                  <Image
                    width={65}
                    src="/img/pages/rifled_weapons/rw7.jpg"
                    alt={t("search.rifled-weapons.title")}
                  />
                  <Image
                    height={170}
                    width={120}
                    src="/img/pages/rifled_weapons/rw9.jpg"
                    alt={t("search.rifled-weapons.ides3")}
                  />
                </Image.PreviewGroup>
              </div>
              <figcaption className={s.img_des}><h4>{t("search.rifled-weapons.ides3")}</h4></figcaption>

            </figure>
            <p>{toStrong(t("search.rifled-weapons.p12"), 1)}</p>
            <p>{toStrong(t("search.rifled-weapons.p13"), 1)}</p>
          </div>
          <div className={s.block}>
            <figure className={s.groupImg} style={{ float: "right" }}>
              <div>
                <Image.PreviewGroup className={s.antImg}>
                  <Image
                    width={65}
                    src="/img/pages/rifled_weapons/rw7.jpg"
                    alt={t("search.rifled-weapons.title")}
                  />
                  <Image
                    height={170}
                    width={150}
                    src="/img/pages/rifled_weapons/rw8.jpg"
                    alt={t("search.rifled-weapons.ides4")}
                  />
                </Image.PreviewGroup>
              </div>
              <figcaption className={s.img_des}><h4>{t("search.rifled-weapons.ides4")}</h4></figcaption>
            </figure>
            <p>{t("search.rifled-weapons.p13")}</p>
            <p>{t("search.rifled-weapons.p15")}</p>
            <p>{t("search.rifled-weapons.p16")}</p>
          </div>
        </div>
        <div className={s.block}>
          <h2><p className={s.headers}>
            {t("search.rifled-weapons.h3")}
          </p></h2>
          <figure className={s.img} style={{ float: "left", width: 250 }}>
            <Image className={s.antImg}

              src="/img/pages/rifled_weapons/rw10.jpg"
              alt={t("search.rifled-weapons.ides5")}
            />
            <figcaption className={s.img_des}><h4>{t("search.rifled-weapons.ides5")}</h4></figcaption>
          </figure>
          <p>{toStrong(t("search.rifled-weapons.p17"), 1)}</p>
          <p>{t("search.rifled-weapons.p18")}</p>
          <p>{t("search.rifled-weapons.p19")}</p>
          <h2><p className={s.headers}>{t("search.rifled-weapons.p20")}</p></h2>
          <p>{t("search.rifled-weapons.p21")}</p>
          <p>{t("search.rifled-weapons.p22")}</p>
          <p>{toStrong(t("search.rifled-weapons.p23"), 1)}</p>

          <h2><p className={s.headers}>{t("search.rifled-weapons.p28")}</p></h2>
          <p>{toStrong(t("search.rifled-weapons.p24"), 0)}</p>
          <p>{toStrong(t("search.rifled-weapons.p25"), 0)}</p>
          <p>{toStrong(t("search.rifled-weapons.p26"), 0)}</p>
          <p>{toStrong(t("search.rifled-weapons.p27"), 0)}</p>
          <p>{t("search.rifled-weapons.p30")}</p>
          <p>{t("search.rifled-weapons.p31")}</p>
          <p>{toStrong(t("search.rifled-weapons.p32"), 1)}</p>
          <h2><p className={s.headers}>{t("search.rifled-weapons.p38")}</p></h2>
          <p>{toStrong(t("search.rifled-weapons.p34"), 0)}</p>
          <p>{toStrong(t("search.rifled-weapons.p35"), 0)}</p>
          <p>{toStrong(t("search.rifled-weapons.p36"), 0)}</p>
          <p>{toStrong(t("search.rifled-weapons.p37"), 0)}</p>
          <p>{t("search.rifled-weapons.p39")}</p>
          <p>{t("search.rifled-weapons.p40")}</p>
          <div>
            <VideoPlayer id="ZxdUrDic8nc" />
            <h4><p className={s.headers}>{t("search.rifled-weapons.vdes2")}</p></h4>
          </div>
        </div>
        <div className={s.block}>
          <h2> <p className={s.headers}>{t("search.rifled-weapons.h4")}</p></h2>
          <p>{t("search.rifled-weapons.p41")}</p>
          <figure className={s.img} style={{ float: "left", width: 350 }}>
            <Image className={s.antImg}

              src="/img/pages/rifled_weapons/rw11.jpg"
              alt={t("search.rifled-weapons.ides6")}
            />
            <figcaption className={s.img_des}><h4>{t("search.rifled-weapons.ides6")}</h4></figcaption>
          </figure>

          <p>{toStrong(t("search.rifled-weapons.p42"), 1)}</p>
          <p>{t("search.rifled-weapons.p43")}</p>
        </div>
        <div className={s.block}>
          <h2><p className={s.headers}>{t("search.rifled-weapons.p44")}</p></h2>
          <p>{toStrong(t("search.rifled-weapons.p45"), 1)}</p>
          <p>{t("search.rifled-weapons.p46")}</p>
          <p>{t("search.rifled-weapons.p47")}</p>
          <div>
            <VideoPlayer id="exxiDfzoRC0" />
            <h4><p className={s.headers}>{t("search.rifled-weapons.vdes3")}</p></h4>
          </div>
          <p></p>
          <p>{toStrong(t("search.rifled-weapons.p48"), 1)}</p>
          <figure className={s.img} style={{ float: "right", width: 250 }}>
            <Image className={s.antImg}
              src="/img/pages/rifled_weapons/rw12.jpg"
              alt={t("search.rifled-weapons.ides7")}
            />
            <figcaption className={s.img_des}><h4>{t("search.rifled-weapons.ides7")}</h4></figcaption>
          </figure>

          <p>{t("search.rifled-weapons.p49")}</p>
          <p>{t("search.rifled-weapons.p50")}</p>
          <p>{t("search.rifled-weapons.p51")}</p>
          <p>{t("search.rifled-weapons.p52")}</p>
          <div>
            <VideoPlayer id="VsWfeIc92dE" />
            <h4><p className={s.headers}>{t("search.rifled-weapons.vdes4")}</p></h4>
          </div>
          <p></p>
        </div>
        <div className={s.block}>
          <p>{toStrong(t("search.rifled-weapons.p53"), 1)}</p>
          <figure className={s.img} style={{ float: "left", width: 250 }}>
            <Image className={s.antImg}
              src="/img/pages/rifled_weapons/rw13.jpg"
              alt={t("search.rifled-weapons.ides8")}
            />
            <figcaption className={s.img_des}><h4>{t("search.rifled-weapons.ides8")}</h4></figcaption>
          </figure>

          <p>{t("search.rifled-weapons.p54")}</p>
          <p>{t("search.rifled-weapons.p55")}</p>
          <div>
          <VideoPlayer id="jnYYrdX1F0k" />
          <h4><p className={s.headers}>{t("search.rifled-weapons.vdes5")}</p></h4>
          </div>
        </div>
      </div>
    </>
  );
};

export default WeaponsRifled;
