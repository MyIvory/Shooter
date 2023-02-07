import s from "./search.module.css";
import { useRef, useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { AudioOutlined } from "@ant-design/icons";
import { Input, Space } from "antd";
import { useTranslation } from "react-i18next";
import { FaSearch } from "react-icons/fa"

const { Search } = Input;
const SearchField = (props) => {
  const [t, i18n] = useTranslation();

  function findkeysinobject(obj, str) {
    let found = {};
    for (let key in obj) {
      found[key] = [];
      if (typeof obj[key] === "string") {
        if (obj[key].toLowerCase().includes(str.toLowerCase().trim())) {
          found[key].push(key);
        }
      } else if (typeof obj[key] === "object") {
        let innerkeys = findkeysinobject(obj[key], str);
        for (let item of Object.values(innerkeys)) {
          found[key].push(...item);
        }
      }
    }
    return found;
  }

  //--------------------
  function onSearch() {
    let value = document.getElementById("search_input").value;
    let translate = t("search", { returnObjects: true });
    console.log(findkeysinobject(translate, value));
  }
  return (
      <div className={s.main}>
              <input type="text" className={s.input} placeholder="Search in Wiki"></input>
              <FaSearch className={s.icon} aria-hidden="true"/>
              {/* <i className="fas fa-search" aria-hidden="true"></i> */}
      </div>
  );
};
export default SearchField;
