import { Menu } from "antd";
import Info from "./info/info";
import LeftMenu from "./leftMenu/leftMenu";
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
