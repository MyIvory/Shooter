import s from "./horisont_menu.module.css";
import HorisontMenuElement from "./horisont_menu_element/horisont_menu_element";
import React, { useState } from "react";

let HorisontMenu = (props) => {
  const [isActivLink, setIsActivLink] = useState({
    "/": false,
    "wiki": false,
    "contacts": false,
  });
  function MenuElement(name, id) {
    this.name = name;
    this.id = id;
    this.isActivLink = isActivLink[this.id];
    this.setActivLink = function (i) {
      let obj = {};
      for (let key in isActivLink) {
        if (key == i) {
          obj[key] = true;
        } else {
          obj[key] = false;
        }
      }
      setIsActivLink(obj);     
    };
  }
  console.log(isActivLink);
  return (
    <div className={s.main}>
      <HorisontMenuElement element={new MenuElement("HOME", "/")} />
      <HorisontMenuElement element={new MenuElement("WIKI", "wiki")} />
      {/* <HorisontMenuElement element ={new MenuElement("ABOUT","about")}/> */}
      <HorisontMenuElement element={new MenuElement("CONTACTS", "contacts")} />
    </div>
  );
};
export default HorisontMenu;
