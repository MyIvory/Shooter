import { Menu, SubMenuProps } from "antd";
import { connect } from "react-redux";
import s from "./leftMenu.module.css";
import {
  GiWinchesterRifle,
  GiAk47,
  GiBullets,
  GiCrosshair,
  GiMachineGunMagazine,
  GiMultipleTargets,
  GiSpyglass,
  GiTesla,
} from "react-icons/gi";
import { FaBinoculars } from "react-icons/fa";
import { useTranslation, Trans } from "react-i18next";
import { useState } from "react";

const LeftMenu = (props) => {
  const { t } = useTranslation();
  let items = [
    getItem(
      <span className={s.item_level_1}>{t("left_menu.weapons.title")}</span>,
      "weapons",
      <GiAk47 style={{ fontSize: "25px" }} />,
      [
        getItem(
          <span className={s.item_level_1}>
            {t("left_menu.weapons.rifled.title")}
          </span>,
          "rifled_weapons",
          null,
          [
            getItem(t("left_menu.weapons.rifled.bolt"), "bolt"),
            getItem(t("left_menu.weapons.rifled.sa_rifle"), "sa_rifled"),
            getItem(t("left_menu.weapons.rifled.a_rifle"), "a_rifle"),
          ]
        ),
        getItem(
          <span className={s.item_level_1}>
            {t("left_menu.weapons.smooth.title")}
          </span>,
          "smooth_weapons",
          null,
          [
            getItem(t("left_menu.weapons.smooth.sa_rifle"), "sa_smooth"),
            getItem(t("left_menu.weapons.smooth.pump"), "pump"),
            getItem(t("left_menu.weapons.smooth.opening"), "opening"),
          ]
        ),
      ]
    ),
    getItem(
      <span className={s.item_level_1}>{t("left_menu.ammunition.title")}</span>,
      "ammunition",
      <GiMachineGunMagazine style={{ fontSize: "25px" }} />,
      [
        getItem(
          <span className={s.item_level_1}>
            {t("left_menu.ammunition.bullets.title")}
          </span>,
          "bullets",
          null,
          [
            getItem(
              <span className={s.item_level_1}>
                {t("left_menu.ammunition.bullets.types.title")}
              </span>,
              "bullets_types",
              null,
              [
                getItem(
                  <span className={s.item_level_1}>
                    {t("left_menu.ammunition.bullets.types.rifled.title")}
                  </span>,
                  "bullets_types_rifled",
                  null,
                  [
                    getItem(
                      t("left_menu.ammunition.bullets.types.rifled.fmg"),
                      "bullets_types_rifled_fmg"
                    ),
                    getItem(
                      t("left_menu.ammunition.bullets.types.rifled.sp"),
                      "bullets_types_rifled_sp"
                    ),
                    getItem(
                      t("left_menu.ammunition.bullets.types.rifled.tm"),
                      "bullets_types_rifled_tm"
                    ),
                    getItem(
                      t("left_menu.ammunition.bullets.types.rifled.hp"),
                      "bullets_types_rifled_hp"
                    ),
                    getItem(
                      t("left_menu.ammunition.bullets.types.rifled.jhp"),
                      "bullets_types_rifled_jhp"
                    ),
                    getItem(
                      t("left_menu.ammunition.bullets.types.rifled.bt"),
                      "bullets_types_rifled_bt"
                    ),
                    getItem(
                      t("left_menu.ammunition.bullets.types.rifled.rn"),
                      "bullets_types_rifled_rn"
                    ),
                    getItem(
                      t("left_menu.ammunition.bullets.types.rifled.fp"),
                      "bullets_types_rifled_fp"
                    ),
                    getItem(
                      t("left_menu.ammunition.bullets.types.rifled.hb"),
                      "bullets_types_rifled_hb"
                    ),
                    getItem(
                      t("left_menu.ammunition.bullets.types.rifled.dk"),
                      "bullets_types_rifled_dk"
                    ),
                    getItem(
                      t("left_menu.ammunition.bullets.types.rifled.hm"),
                      "bullets_types_rifled_hm"
                    ),
                  ]
                ),
                getItem(
                  <span className={s.item_level_1}>
                    {t("left_menu.ammunition.bullets.types.smooth.title")}
                  </span>,
                  "bullets_types_smooth",
                  null,
                  [
                    getItem(
                      <span className={s.item_level_1}>
                        {t(
                          "left_menu.ammunition.bullets.types.smooth.caliber.title"
                        )}
                      </span>,
                      "bullets_types_smooth_caliber",
                      null,
                      [
                        getItem(
                          t(
                            "left_menu.ammunition.bullets.types.smooth.caliber.sheddit"
                          ),
                          "bullets_types_smooth_caliber_sheddit"
                        ),
                        getItem(
                          t(
                            "left_menu.ammunition.bullets.types.smooth.caliber.azot"
                          ),
                          "bullets_types_smooth_caliber_azot"
                        ),
                        getItem(
                          t(
                            "left_menu.ammunition.bullets.types.smooth.caliber.diabolo"
                          ),
                          "bullets_types_smooth_caliber_diabolo"
                        ),
                        getItem(
                          t(
                            "left_menu.ammunition.bullets.types.smooth.caliber.bp"
                          ),
                          "bullets_types_smooth_caliber_bp"
                        ),
                        getItem(
                          t(
                            "left_menu.ammunition.bullets.types.smooth.caliber.zala"
                          ),
                          "bullets_types_smooth_caliber_zala"
                        ),
                      ]
                    ),
                    getItem(
                      <span className={s.item_level_1}>
                        {t(
                          "left_menu.ammunition.bullets.types.smooth.subcaliber.title"
                        )}
                      </span>,
                      "bullets_types_smooth_subcaliber",
                      null,
                      [
                        getItem(
                          t(
                            "left_menu.ammunition.bullets.types.smooth.subcaliber.poleva"
                          ),
                          "bullets_types_smooth_subcaliber_poleva"
                        ),
                        getItem(
                          t(
                            "left_menu.ammunition.bullets.types.smooth.subcaliber.leningradka"
                          ),
                          "bullets_types_smooth_subcaliber_leningradka"
                        ),
                        getItem(
                          t(
                            "left_menu.ammunition.bullets.types.smooth.subcaliber.sport"
                          ),
                          "bullets_types_smooth_subcaliber_sport"
                        ),
                        getItem(
                          t(
                            "left_menu.ammunition.bullets.types.smooth.subcaliber.sputnik"
                          ),
                          "bullets_types_smooth_subcaliber_sputnik"
                        ),
                        getItem(
                          t(
                            "left_menu.ammunition.bullets.types.smooth.subcaliber.tandem"
                          ),
                          "bullets_types_smooth_subcaliber_tandem"
                        ),
                        getItem(
                          t(
                            "left_menu.ammunition.bullets.types.smooth.subcaliber.strela"
                          ),
                          "bullets_types_smooth_subcaliber_strela"
                        ),
                      ]
                    ),
                    getItem(
                      <span className={s.item_level_1}>
                        {t(
                          "left_menu.ammunition.bullets.types.smooth.paradox.title"
                        )}
                      </span>,
                      "bullets_types_smooth_paradox",
                      null,
                      [
                        getItem(
                          t(
                            "left_menu.ammunition.bullets.types.smooth.paradox.brenneke"
                          ),
                          "bullets_types_smooth_paradox_brenneke"
                        ),
                        getItem(
                          t(
                            "left_menu.ammunition.bullets.types.smooth.paradox.paradox"
                          ),
                          "bullets_types_smooth_paradox_paradox"
                        ),
                        getItem(
                          t(
                            "left_menu.ammunition.bullets.types.smooth.paradox.mayer"
                          ),
                          "bullets_types_smooth_paradox_mayer"
                        ),
                        getItem(
                          t(
                            "left_menu.ammunition.bullets.types.smooth.paradox.gualandi"
                          ),
                          "bullets_types_smooth_paradox_gualandi"
                        ),
                        getItem(
                          t(
                            "left_menu.ammunition.bullets.types.smooth.paradox.baibak"
                          ),
                          "bullets_types_smooth_paradox_baibak"
                        ),
                        getItem(
                          t(
                            "left_menu.ammunition.bullets.types.smooth.paradox.grizzly"
                          ),
                          "bullets_types_smooth_paradox_grizzly"
                        ),
                        getItem(
                          t(
                            "left_menu.ammunition.bullets.types.smooth.paradox.swift"
                          ),
                          "bullets_types_smooth_paradox_swift"
                        ),
                        getItem(
                          t(
                            "left_menu.ammunition.bullets.types.smooth.paradox.dary"
                          ),
                          "bullets_types_smooth_paradox_dary"
                        ),
                        getItem(
                          t(
                            "left_menu.ammunition.bullets.types.smooth.paradox.kion"
                          ),
                          "bullets_types_smooth_paradox_kion"
                        ),
                      ]
                    ),
                  ]
                ),
              ]
            ),
            getItem(
              t("left_menu.ammunition.bullets.geometry"),
              "bullets_geometry"
            ),
            getItem(
              t("left_menu.ammunition.bullets.material"),
              "bullets_material"
            ),
          ]
        ),
        getItem(
          <span className={s.item_level_1}>
            {t("left_menu.ammunition.cases.title")}
          </span>,
          "cases",
          null,
          [
            getItem(t("left_menu.ammunition.cases.geometry"), "cases_geometry"),
            getItem(t("left_menu.ammunition.cases.material"), "cases_material"),
          ]
        ),
        getItem(
          <span className={s.item_level_1}>
            {t("left_menu.ammunition.primers.title")}
          </span>,
          "primers",
          null,
          [
            getItem(t("left_menu.ammunition.primers.open"), "primers_open"),
            getItem(t("left_menu.ammunition.primers.closed"), "primers_closed"),
          ]
        ),
        getItem(
          <span className={s.item_level_1}>
            {t("left_menu.ammunition.powder.title")}
          </span>,
          "powder",
          null,
          [
            getItem(t("left_menu.ammunition.powder.black"), "powder_black"),
            getItem(
              <span className={s.item_level_1}>
                {t("left_menu.ammunition.powder.smokeless.title")}
              </span>,
              "powder_smokeless",
              null,
              [
                getItem(
                  t("left_menu.ammunition.powder.smokeless.slow"),
                  "powder_smokeless_slow"
                ),
                getItem(
                  t("left_menu.ammunition.powder.smokeless.medium"),
                  "powder_smokeless_medium"
                ),
                getItem(
                  t("left_menu.ammunition.powder.smokeless.fast"),
                  "powder_smokeless_fast"
                ),
              ]
            ),
          ]
        ),
      ]
    ),
    getItem(
      "Прицільні пристрої",
      "sub4",
      <GiTesla style={{ fontSize: "25px" }} />,
      [
        getItem("Option 9", "9"),
        getItem("Option 10", "10"),
        getItem("Option 11", "11"),
        getItem("Option 12", "12"),
      ]
    ),
    getItem(
      "Опічні прилади",
      "sub5",
      <FaBinoculars style={{ fontSize: "25px" }} />,
      [
        getItem("Option 13", "13"),
        getItem("Option 14", "14"),
        getItem("Option 15", "15"),
        getItem("Option 16", "16"),
      ]
    ),
    getItem(
      "Балістика",
      "sub6",
      <GiMultipleTargets style={{ fontSize: "25px" }} />,
      [
        getItem("Option 17", "17"),
        getItem("Option 18", "18"),
        getItem("Option 19", "19"),
        getItem("Option 20", "20"),
      ]
    ),
  ];
  const submenuLevel_1 = ["weapons", "ammunition"];
  const submenuLevel_2 = [
    "rifled_weapons",
    "smooth_weapons",
    "bullets",
    "cases",
    "primers",
    "powder",
  ];
  const submenuLevel_3 = ["bullets_types"];
  const submenuLevel_4 = ["bullets_types_rifled", "bullets_types_smooth"];
  const submenuLevel_5 = [
    "bullets_types_smooth_caliber",
    "bullets_types_smooth_subcaliber",
    "bullets_types_smooth_paradox",
  ];
  const [openKeys, setOpenKeys] = useState([]);
  const onOpenChange = (keys) => {
    const latestOpenKey = keys.find((key) => openKeys.indexOf(key) === -1);
    if (submenuLevel_1.indexOf(latestOpenKey) === -1) {
      if (submenuLevel_2.indexOf(latestOpenKey) === -1) {
        if (submenuLevel_3.indexOf(latestOpenKey) === -1) {
          if (submenuLevel_4.indexOf(latestOpenKey) === -1) {
            if (submenuLevel_5.indexOf(latestOpenKey) === -1) {
              setOpenKeys(keys);
            }else{
              setOpenKeys(
                latestOpenKey
                  ? [keys[0], keys[1], keys[2],keys[3], latestOpenKey]
                  : [keys[0]]
              );
            }
          } else {
            setOpenKeys(
              latestOpenKey
                ? [keys[0], keys[1], keys[2], latestOpenKey]
                : [keys[0]]
            );
          }
        } else {
          setOpenKeys(
            latestOpenKey ? [keys[0], keys[1], latestOpenKey] : [keys[0]]
          );
        }
      } else {
        setOpenKeys(latestOpenKey ? [keys[0], latestOpenKey] : [keys[0]]);
      }
    } else {
      setOpenKeys(latestOpenKey ? [latestOpenKey] : []);
    }

    //  if (submenuLevel_1.indexOf(latestOpenKey) !== -1) {
    //    setOpenKeys(latestOpenKey ? [latestOpenKey] : []);
    //  }

    //  else if(submenuLevel_2.indexOf(latestOpenKey) !== -1){
    //    setOpenKeys(latestOpenKey ? [keys[0],latestOpenKey] : [keys[0]]);
    //  }else if(submenuLevel_3.indexOf(latestOpenKey) !== -1){
    //    setOpenKeys(latestOpenKey ? [keys[0],keys[1],latestOpenKey] : [keys[0],keys[1]]);
    //  }else if(submenuLevel_4.indexOf(latestOpenKey) !== -1){
    //    setOpenKeys(latestOpenKey ? [keys[0],keys[1],keys[2],latestOpenKey] : [keys[0],keys[1],keys[2]]);
    //  }
  };
  return (
    <Menu
      selectable={false}
      style={{
        width: 350,
        color: "red",
        fontSize: "16px",
        textTransform: "uppercase",
      }}
      mode="inline"
      items={items}
      inlineIndent={10}
      onClick={selectPage}
      openKeys={openKeys}
      onOpenChange={onOpenChange}
    />
  );
};
export default LeftMenu;
function selectPage(e) {
  console.log(e);
}
function getItem(label, key, icon, children, type) {
  return {
    key,
    icon,
    children,
    label,
    type,
    onTitleClick: () => {},
  };
}
