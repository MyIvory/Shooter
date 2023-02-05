import s from "./search.module.css";
import { useRef, useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { AudioOutlined } from "@ant-design/icons";
import { Input, Space } from "antd";
import { useTranslation } from "react-i18next";

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
      <Search
        id="search_input"
        placeholder="input search text"
        allowClear
        // bordered ={false}
        onSearch={onSearch}
        style={{
          width: 200,
        }}
      />
    </div>
  );
};
export default SearchField;
