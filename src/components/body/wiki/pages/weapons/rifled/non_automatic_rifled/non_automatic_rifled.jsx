import { Image } from 'antd';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import s from "./non_automatic_rifled.module.css"


const NonAutomaticRifled = props => {
    const { t } = useTranslation()
    return (
        <div className={s.main}>
            <div className={s.block}>
                <figure className={s.img}>
                    <Image
                        className={s.antImg}
                        src="/img/pages/nonautomatic_rifled/nar1.png"
                        alt={t("search.rifled-bolt.ides1")}
                    />
                </figure>
                <p>{t("search.nonautomatic-rifled.p1")}</p>
                <p>{t("search.nonautomatic-rifled.p2")}</p>
                <p>{t("search.nonautomatic-rifled.p3")}</p>
                <p>{t("search.nonautomatic-rifled.p4")}</p>
                <p>{t("search.nonautomatic-rifled.p5")}</p>
                {/* <p>{t("search.nonautomatic-rifled.p6")}</p> */}
            </div>
            <div className={s.block} style={{marginBottom:50}} >
                <p>{t("search.nonautomatic-rifled.p7")}</p>
                <ul className={s.block}>
                    <li><Link to={"/wiki/rifled-bolt-action"}>{t("search.nonautomatic-rifled.l1").toUpperCase()}</Link> </li>
                    <li><Link to={"/wiki/rifled-lever-action"}>{t("search.nonautomatic-rifled.l2").toUpperCase()}</Link> </li>
                    <li><Link to={"/wiki/rifled-break-action"}>{t("search.nonautomatic-rifled.l3").toUpperCase()}</Link> </li>
                    <li><Link to={"/wiki/rifled-revolver-action"}>{t("search.nonautomatic-rifled.l4").toUpperCase()}</Link> </li>
                </ul>
            </div>
        </div>
    );
};


export default NonAutomaticRifled;