import { Image } from 'antd';
import React from 'react';
import { useTranslation } from 'react-i18next';
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
                <p>{t("search.nonautomatic-rifled.p6")}</p>
            </div>
            <div>
                <p>{t("search.nonautomatic-rifled.p7")}</p>
                <ul className={s.block}>
                    <li>{t("search.nonautomatic-rifled.l1")}</li>
                    <li>{t("search.nonautomatic-rifled.l2")}</li>
                    <li>{t("search.nonautomatic-rifled.l3")}</li>
                    <li>{t("search.nonautomatic-rifled.l4")}</li>
                </ul>
            </div>
        </div>
    );
};


export default NonAutomaticRifled;