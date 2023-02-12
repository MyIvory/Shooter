import { Menu } from "antd";
import { Route, Routes } from "react-router-dom";
import Info from "./info/info";
import LeftMenu from "./leftMenu/leftMenu";
import Weapons from "./pages/weapons/weapons";
import s from "./wiki.module.css";
var video = document.getElementById("myVideo");
console.log(video)

// if (video.paused) {
//   video.play();
// }
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
