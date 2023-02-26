import s from "./search.module.css";
import { useRef, useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { AudioOutlined } from "@ant-design/icons";
import { Input, Space } from "antd";
import { useTranslation } from "react-i18next";
import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router";
import { MdClear } from "react-icons/md";
import { motion } from "framer-motion";

const SearchField = (props) => {
  const [t, i18n] = useTranslation();
  const navigate = useNavigate();
  const [saerchTern, setSearchTern] = useState("");
  const [translate, setTranslate] = useState([]);
  const ft = translate.filter((item) => {
    return item.text.toLowerCase().split("/s").join("").includes(saerchTern.toLowerCase());
  });
  useEffect(() => {
    if (ft.length > 0) {
      props.updateState(ft)     
    } else {
      props.updateState([{ text: t("forms.not_found") }])
    }
  }, [saerchTern])
  return (
    <div className={s.main}>
      <input
        type="text"
        id="input_search_field"
        className={s.input}
        autoComplete="off"
        placeholder={t("forms.search")}
        value={saerchTern}
        onChange={(e) => {
          setSearchTern(e.target.value);
          navigate("/wiki/search-result/");
          if (e.target.value === "") {
            setTranslate([{ text: t("forms.input_search") }]);
          } else {
            setTranslate(
              cloneObj(t("search", { returnObjects: true }), e.target.value)
            );
          }
        }}
      ></input>
      <motion.div className={s.clearBut} whileHover={{ scale: 1.1 }}>
        <MdClear
          className={s.icon}
          onClick={() => {
            setSearchTern("");
            setTranslate([{ text: t("forms.input_search") }]);
          }}
        />
      </motion.div>
    </div>
  );
};
export default SearchField;

function cloneObj(obj, sub) {
  let cloneArr = [];
  for (let key in obj) {
    for (let k in obj[key]) {
      console.log()
      if (k !== "title" && typeof obj[key][k] ==="string" ) {
        cloneArr.push({
          category: key,
          sub: sub,
          paragrath: k,
          text: obj[key][k],
        });
      }
    }
  }
  return cloneArr;
}



