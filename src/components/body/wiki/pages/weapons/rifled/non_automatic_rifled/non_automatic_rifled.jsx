import { Image } from 'antd';
import React from 'react';
import { Helmet } from 'react-helmet';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import s from "./non_automatic_rifled.module.css"


const NonAutomaticRifled = props => {
    const { t } = useTranslation()
    return (
        <div className={`${s.main} article_main`}>
            <div className={`${s.block} article_block`}>
                <Helmet>
                    <title>Не автоматична стрілецька зброя - Gid Guns</title>
                    <meta
                        name="description"
                        content="Стаття про неавтоматичну стрілкову зброю. Наші дні свідчать про те, що автоматична стрілецька зброя стає все більш поширеною. Однак існує також не автоматична стрілецька зброя, яка може бути цікавим вибором для тих, хто шукає більш традиційні варіанти. Завдяки своїй конструкції, не автоматична стрілецька зброя є більш точною, отже, більш ефективною на дальніх дистанціях. Крім того, завдяки конструкції затворів, не автоматична зброя може використовувати більші калібри."
                    />
                    <meta property="og:title" content="Не автоматична стрілецька зброя - Gid Guns" />
                    <meta property="og:description" content="Стаття про неавтоматичну стрілкову зброю. Наші дні свідчать про те, що автоматична стрілецька зброя стає все більш поширеною. Однак існує також не автоматична стрілецька зброя, яка може бути цікавим вибором для тих, хто шукає більш традиційні варіанти. Завдяки своїй конструкції, не автоматична стрілецька зброя є більш точною, отже, більш ефективною на дальніх дистанціях. Крім того, завдяки конструкції затворів, не автоматична зброя може використовувати більші калібри." />
                    <meta property="og:type" content="website" />
                    <meta property="og:url" content="http://gidguns.info/wiki/nonautomatic-rifled" />
                    <meta property="og:image" content="http://gidguns.info/img/pages/nonautomatic_rifled/nar1.png" />
                </Helmet>
                <figure className={`${s.img} article_img`}>
                    <Image
                        className={`${s.antImg} article_ant_img`}
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
            <div className={`${s.block} article_block`} style={{ marginBottom: 50 }} >
                <p>{t("search.nonautomatic-rifled.p7")}</p>
                <ul className={`${s.block} article_block`}>
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