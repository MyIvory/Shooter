import { DownOutlined } from "@ant-design/icons";
import { Dropdown, Menu, Space, Affix } from "antd";
import { connect } from "react-redux";
import s from "./leftMenu.module.css";
import "./left_menu.css";
import { HomeOutlined, MenuOutlined } from "@ant-design/icons";
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
import { Link, NavLink } from "react-router-dom";

const LeftMenu = (props) => {
  const { t } = useTranslation();
  let items = [
    getItem("MENU", "menu", <MenuOutlined />, [
      getItem(
        <NavLink to="weapons" className={active}>
          <h4 className={s.item_level_1}>{t("left_menu.weapons.title")}</h4>
        </NavLink>,
        "weapons",
        <GiAk47 style={{ fontSize: "25px" }} className={active} />,
        [
          getItem( //rifled-weapons
            <NavLink to="rifled-weapons" className={active}>
              <h4 className={s.item_level_1}>
                {t("left_menu.weapons.rifled.title")}
              </h4>
            </NavLink>,
            "rifled_weapons",
            null,
            [
              getItem( //nonautomatic-rifled
                <NavLink to="nonautomatic-rifled" className={active}>
                  <h4 className={s.item_level_1}>{t("left_menu.weapons.rifled.nonautomatic.title")}</h4>
                </NavLink>,
                "na_rifled",
                null,
                [
                  getItem(
                    <NavLink to="rifled-bolt-action" className={active}>
                      <h4 className={s.item_level_2}>{t("left_menu.weapons.rifled.nonautomatic.bolt-action")}</h4>
                    </NavLink>,
                    "bolt"
                  ),
                  getItem(
                    <NavLink to="rifled-lever-action" className={active}>
                      <h4 className={s.item_level_2}>{t("left_menu.weapons.rifled.nonautomatic.lever-action")}</h4>
                    </NavLink>,
                    "lever-action"
                  ),
                  getItem(
                    <NavLink to="rifled-break-action" className={active}>
                      <h4 className={s.item_level_2}>{t("left_menu.weapons.rifled.nonautomatic.break-action")}</h4>
                    </NavLink>,
                    "break-action"
                  ),
                  getItem(
                    <NavLink to="rifled-revolver-action" className={active}>
                      <h4 className={s.item_level_2}>{t("left_menu.weapons.rifled.nonautomatic.revolver")}</h4>
                    </NavLink>,
                    "revolver"
                  ),
                ]
              ),
              getItem( //automatic-rifled
                <NavLink to="automatic-rifled" className={active}>
                  <h4 className={s.item_level_1}>
                    {t("left_menu.weapons.rifled.automatic.title")}
                  </h4>
                </NavLink>,
                "a_rifled",
                null,
                [
                  getItem(
                    <NavLink to="bolt-recoil" className={active}>
                      <h4 className={s.item_level_2}> {t("left_menu.weapons.rifled.automatic.bolt-recoil")}</h4>
                    </NavLink>,
                    "bolt-recoil"
                  ),
                  getItem(
                    <NavLink to="barrel-recoil" className={active}>
                      <h4 className={s.item_level_2}> {t("left_menu.weapons.rifled.automatic.barrel-recoil")}</h4>
                    </NavLink>,
                    "barrel-recoil"
                  ),
                  getItem(
                    <NavLink to="energy-gases" className={active}>
                      <h4 className={s.item_level_2}>{t("left_menu.weapons.rifled.automatic.energy-gases")}</h4>
                    </NavLink>,
                    "energy-gases"
                  ),
                  getItem(
                    <NavLink to="free-bolt" className={active}>
                      <h4 className={s.item_level_2}>{t("left_menu.weapons.rifled.automatic.free-bolt")}</h4>
                    </NavLink>,
                    "free-bolt"
                  ),
                  getItem(
                    <NavLink to="semi-free-bolt" className={active}>
                      <h4 className={s.item_level_2}>{t("left_menu.weapons.rifled.automatic.semi-free-bolt")}</h4>
                    </NavLink>,
                    "semi-free-bolt"
                  ),
                  getItem(
                    <NavLink to="latch-wedge" className={active}>
                      <h4 className={s.item_level_2}>{t("left_menu.weapons.rifled.automatic.latch-wedge")}</h4>
                    </NavLink>,
                    "latch-wedge"
                  ),
                  getItem(
                    <NavLink to="tilting-barrel" className={active}>
                      <h4 className={s.item_level_2}>{t("left_menu.weapons.rifled.automatic.tilting-barrel")}</h4>
                    </NavLink>,
                    "tilting-barrel"
                  ),
                  getItem(
                    <NavLink to="tilting-bolt" className={active}>
                      <h4 className={s.item_level_2}>{t("left_menu.weapons.rifled.automatic.tilting-bolt")}</h4>
                    </NavLink>,
                    "tilting-bolt"
                  ),
                  getItem(
                    <NavLink to="barrel-rotation" className={active}>
                      <h4 className={s.item_level_2}>{t("left_menu.weapons.rifled.automatic.barrel-rotation")}</h4>
                    </NavLink>,
                    "barrel-rotation"
                  ),
                  getItem(
                    <NavLink to="lever-articulated" className={active}>
                      <h4 className={s.item_level_2}>{t("left_menu.weapons.rifled.automatic.lever-articulated")}</h4>
                    </NavLink>,
                    "lever-articulated"
                  ),
                  getItem(
                    <NavLink to="rotation-bolt" className={active}>
                      <h4 className={s.item_level_2}>{t("left_menu.weapons.rifled.automatic.rotation-bolt")}</h4>
                    </NavLink>,
                    "rotation-bolt"
                  ),
                ]
              ),
            ]
          ),
          getItem( //smooth-weapons
            <NavLink to="smooth-weapons" className={active}>
              <h4 className={s.item_level_1}>
                {t("left_menu.weapons.smooth.title")}
              </h4>
            </NavLink>,
            "smooth_weapons",
            null,
            [
              getItem( 
                <NavLink to="smooth-semi-automatic" className={active}>
                  <h4 className={s.item_level_2}>
                    {t("left_menu.weapons.smooth.sa_rifle")}
                  </h4>
                </NavLink>,
                "sa_smooth"
              ),
              getItem(
                <NavLink to="smooth-pump" className={active}>
                  <h4 className={s.item_level_2}>
                    {t("left_menu.weapons.smooth.pump")}
                  </h4>
                </NavLink>,
                "pump"
              ),
              getItem(
                <NavLink to="smooth-automatic" className={active}>
                  <h4 className={s.item_level_2}>
                    {t("left_menu.weapons.smooth.opening")}
                  </h4>
                </NavLink>,
                "opening"
              ),
            ]
          ),
        ]
      ),
      getItem(
        <NavLink to="smooth-automatic" className={active}>
          <h4 className={s.item_level_1}>{t("left_menu.ammunition.title")}</h4>
        </NavLink>,
        "ammunition",
        <GiMachineGunMagazine style={{ fontSize: "25px" }} />,
        [
          getItem(
            <h4 className={s.item_level_1}>
              {t("left_menu.ammunition.bullets.title")}
            </h4>,
            "bullets",
            null,
            [
              getItem(
                <h4 className={s.item_level_1}>
                  {t("left_menu.ammunition.bullets.types.title")}
                </h4>,
                "bullets_types",
                null,
                [
                  getItem(
                    <h4 className={s.item_level_1}>
                      {t("left_menu.ammunition.bullets.types.rifled.title")}
                    </h4>,
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
                    <h4 className={s.item_level_1}>
                      {t("left_menu.ammunition.bullets.types.smooth.title")}
                    </h4>,
                    "bullets_types_smooth",
                    null,
                    [
                      getItem(
                        <h4 className={s.item_level_1}>
                          {t(
                            "left_menu.ammunition.bullets.types.smooth.caliber.title"
                          )}
                        </h4>,
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
                        <h4 className={s.item_level_1}>
                          {t(
                            "left_menu.ammunition.bullets.types.smooth.subcaliber.title"
                          )}
                        </h4>,
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
                        <h4 className={s.item_level_1}>
                          {t(
                            "left_menu.ammunition.bullets.types.smooth.paradox.title"
                          )}
                        </h4>,
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
            <h4 className={s.item_level_1}>
              {t("left_menu.ammunition.cases.title")}
            </h4>,
            "cases",
            null,
            [
              getItem(
                t("left_menu.ammunition.cases.geometry"),
                "cases_geometry"
              ),
              getItem(
                t("left_menu.ammunition.cases.material"),
                "cases_material"
              ),
            ]
          ),
          getItem(
            <h4 className={s.item_level_1}>
              {t("left_menu.ammunition.primers.title")}
            </h4>,
            "primers",
            null,
            [
              getItem(t("left_menu.ammunition.primers.open"), "primers_open"),
              getItem(
                t("left_menu.ammunition.primers.closed"),
                "primers_closed"
              ),
            ]
          ),
          getItem(
            <h4 className={s.item_level_1}>
              {t("left_menu.ammunition.powder.title")}
            </h4>,
            "powder",
            null,
            [
              getItem(t("left_menu.ammunition.powder.black"), "powder_black"),
              getItem(
                <h4 className={s.item_level_1}>
                  {t("left_menu.ammunition.powder.smokeless.title")}
                </h4>,
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
        "?????????????????? ????????????????",
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
        "???????????? ??????????????",
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
        "??????????????????",
        "sub6",
        <GiMultipleTargets style={{ fontSize: "25px" }} />,
        [
          getItem("Option 17", "17"),
          getItem("Option 18", "18"),
          getItem("Option 19", "19"),
          getItem("Option 20", "20"),
        ]
      ),
    ]),
  ];

  const submenu = {
    submenuLevel_0: ["menu"],
    submenuLevel_1: ["weapons", "ammunition"],
    submenuLevel_2: [
      "rifled_weapons",
      "smooth_weapons",
      "bullets",
      "cases",
      "primers",
      "powder",
    ],
    submenuLevel_3: ["bullets_types", "na_rifled", "a_rifled"],
    submenuLevel_4: [
      "bullets_types_rifled",
      "bullets_types_smooth",
      "bolt",
      "lever-action",
      "break-action",
      "revolver",
    ],
    submenuLevel_5: [
      "bullets_types_smooth_caliber",
      "bullets_types_smooth_subcaliber",
      "bullets_types_smooth_paradox",
    ],
  };
  //!--------->>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
  const [openKeys, setOpenKeys] = useState(
    window.screen.availWidth > 600 ? ["menu"] : []
  );
  const onOpenChange = (keys, submenu) => {
    const submenuLevels = [];
    for (let i = 0; i < Object.keys(submenu).length; i++) {
      const key = `submenuLevel_${i}`;
      if (key in submenu) {
        submenuLevels.push(submenu[key]);
      }
    }
    const latestOpenKey = keys.find((key) => openKeys.indexOf(key) === -1);
    //----------------------
    // loop1: for (let i = 0; i < submenuLevels.length; i++) {
    //   if (submenuLevels[i].indexOf(latestOpenKey) === -1) {
    //     if (latestOpenKey) {
    //       keysArr = [...keys.slice(0, i), latestOpenKey]
    //     } else {
    //       keysArr = keys[0]
    //     }

    //   } else {
    //     if (latestOpenKey) {
    //       keysArr = [...keys.slice(-1), latestOpenKey]
    //     } else {
    //       keysArr = keys[0]
    //     }
    //   }
    //   console.log(keysArr)
    //   setOpenKeys(keysArr)
    //----------------------
    if (submenuLevels[0].indexOf(latestOpenKey) === -1) {
      if (submenuLevels[1].indexOf(latestOpenKey) === -1) {
        if (submenuLevels[2].indexOf(latestOpenKey) === -1) {
          if (submenuLevels[3].indexOf(latestOpenKey) === -1) {
            if (submenuLevels[4].indexOf(latestOpenKey) === -1) {
              if (submenuLevels[5].indexOf(latestOpenKey) === -1) {
                setOpenKeys(keys);
              } else {
                setOpenKeys(
                  latestOpenKey
                    ? [
                        keys[0],
                        keys[1],
                        keys[2],
                        keys[3],
                        keys[4],
                        latestOpenKey,
                      ]
                    : [keys[0]]
                );
              }
            } else {
              setOpenKeys(
                latestOpenKey
                  ? [keys[0], keys[1], keys[2], keys[3], latestOpenKey]
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
      setOpenKeys(latestOpenKey ? [latestOpenKey] : [keys[0]]);
    }
  };
  //!---------------------------------------------------------
  const mob_menu = (
    <Menu
      multiple={true}
      selectable={false}
      items={items}
      inlineIndent={10}
      onClick={selectPage}
      openKeys={openKeys}
      onOpenChange={(keys) => onOpenChange(keys, submenu)}
      // onOpenChange={onOpenChange}
      mode="inline"
      style={{
        color: "red",
        fontSize: "16px",
        textTransform: "uppercase",
      }}
    />
  );
  const desk_menu = (
    <Menu
      selectable={false}
      style={{
        color: "red",
        fontSize: "16px",
        textTransform: "uppercase",
      }}
      mode="inline"
      items={items}
      inlineIndent={10}
      onClick={selectPage}
      openKeys={openKeys}
      onOpenChange={(keys) => onOpenChange(keys, submenu)}
      //onOpenChange={onOpenChange}
    />
  );
  //!---------------------------------------------------------
  return (
    <div className={s.main}>
      {window.innerWidth > 800 ? desk_menu : mob_menu}
    </div>
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
    onTitleClick: (e) => {
      //  console.log(e);
      <Link to={e.key}></Link>;
    },
  };
}
function active({ isActive }) {
  return isActive ? "active_item_menu" : undefined;
}
