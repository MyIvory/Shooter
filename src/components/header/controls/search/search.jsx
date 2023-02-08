import s from "./search.module.css";
import { useRef, useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { AudioOutlined } from "@ant-design/icons";
import { Input, Space } from "antd";
import { useTranslation } from "react-i18next";
import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router";

const { Search } = Input;
const SearchField = (props) => {
  const [t, i18n] = useTranslation();
  const navigate = useNavigate();
  const [saerchTern, setSearchTern] = useState("");
  const [translate, setTranslate] = useState(
    t("search", { returnObjects: true })
  );
  // const [filtered,setFiltered] = useState({})
  //let translate = t("search", { returnObjects: true });
  useEffect(() => {
    const Debounse = setTimeout(() => {
      const fil = findkeysinobject(translate, saerchTern);
      // setTranslate(fil)
      //console.log(translate)
    }, 300);
    return () => clearTimeout(Debounse);
  }, [saerchTern]);

  function findkeysinobject(obj, str) {
    if (str == "") return obj;
    let found = {};
    for (let key in obj) {
      found[key] = [];
      if (typeof obj[key] === "string") {
        let words = obj[key].split(" ");
        // if (obj[key].toLowerCase().includes(str.toLowerCase().trim())) {
        //   found[key].push(key);
        // }
        for (let w of words) {
          if (w.toLowerCase().includes(str)) {
            found[key].push(key);
            console.log(found);
          }
        }
      } else if (typeof obj[key] === "object") {
        // let innerkeys = findkeysinobject(obj[key], str);
        // for (let item of Object.values(innerkeys)) {
        //   found[key].push(...item);
        // }
        continue;
      }
    }
    //console.log(found)
    return found;
  }
  function cloneObj(obj,temp =[]) {
    let cloneArr = [...temp];
    for (let key in obj) {
      for (let k in obj[key]) {
        //console.log(obj[key][k]);
        if (typeof obj[key][k] === "string") {
          cloneArr.push({ category: key, paragrath: k });
        } else if (typeof obj[key][k] === "object") {
         cloneObj(obj[key][k],cloneArr);        
        }
      }
    }
    return [...cloneArr];
  }
  console.log(cloneObj(translate));
  return (
    <div className={s.main}>
      <input
        type="text"
        className={s.input}
        placeholder="Search in Wiki"
        onChange={(e) => setSearchTern(e.target.value)}
      ></input>
      <FaSearch className={s.icon} aria-hidden="true" />
    </div>
  );
};
export default SearchField;
