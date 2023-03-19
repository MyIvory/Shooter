import { Spin } from "antd";
import { Suspense } from "react";
import Controls from "./controls/controls";
import s from "./header.module.css";
import HorisontMenu from "./horisont_menu/horisont_menu";
import Logo from "./logo/logo";
let Header = () => {
  return (
    <div className={s.header}>
      <div className={s.logo}>
        <Logo />
      </div>
      <div className={s.menu}>
        <HorisontMenu />
      </div>
      <div className={s.con}>
        <Controls />
      </div>
    </div>
  );
};
export default Header;
