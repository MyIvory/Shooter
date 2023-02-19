import { Menu } from "antd";
import { Route, Routes } from "react-router-dom";
import VideoBackGround from "../../../elements/videoBackGround/videoBackGround";
import Info from "./info/info";
import LeftMenu from "./leftMenu/leftMenu";
import Weapons from "./pages/weapons/weapons";
import s from "./wiki.module.css";

let Wiki = (props) => {
  return (

    <div className={s.main}>
      <div className={s.menu}>
        <LeftMenu />
      </div>
      <div className={s.info}>
        <Info />
      </div>
    </div>

  );
};
export default Wiki;
