import s from "./search.module.css";
import { useRef, useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { AudioOutlined } from "@ant-design/icons";
import { Input, Space } from "antd";
import { useTranslation } from "react-i18next";
import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router";

const SearchField = (props) => {
  const [t, i18n] = useTranslation();
  const navigate = useNavigate();
  const [saerchTern, setSearchTern] = useState("");
  const [translate, setTranslate] = useState([]);
  const ft = translate.filter((item) => {
    return item.text.toLowerCase().includes(saerchTern.toLowerCase());
  });

  return (
    <div className={s.main}>
      <input
        type="text"
        className={s.input}
        autoComplete="off"
        placeholder="Search in Wiki"
        value={saerchTern}
        onChange={(e) => {
          navigate("/wiki/search-result/")
          console.log(e.target.value)
          setSearchTern(e.target.value);
          setTranslate(cloneObj(t("search", { returnObjects: true })));
          if (e.target.value === "") setTranslate([]);
          
        }}
      ></input>
      <FaSearch className={s.icon} aria-hidden="true" />
      {/* <div className={s.test}>
        <ul>
          {ft.map((item, i) => {
            return <li key={i}>{item.text}</li>;
          })}
        </ul>
      </div> */}
    </div>
  );
};
export default SearchField;

function cloneObj(obj) {
  let cloneArr = [];
  for (let key in obj) {
    for (let k in obj[key]) {
      cloneArr.push({ category: key, paragrath: k, text: obj[key][k] });
    }
  }
  return cloneArr;
}
