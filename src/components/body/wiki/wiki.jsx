import { Menu } from "antd";
import { Route, Routes } from "react-router-dom";
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
      <Info />
    </div>
  );
};
export default Wiki;
