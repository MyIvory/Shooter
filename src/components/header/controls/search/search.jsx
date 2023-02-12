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
  // console.log(props) 
  const [t, i18n] = useTranslation(); 
  const navigate = useNavigate(); 
  const [saerchTern, setSearchTern] = useState(""); 
  const [translate, setTranslate] = useState([]); 
  const ft = translate.filter((item) => { 
    return item.text.toLowerCase().includes(saerchTern.toLowerCase()); 
  }); 
 
  useEffect(() => { 
    ft.length>0?props.updateState(ft):props.updateState([{text:"Not found"}]) 
  }, [saerchTern]); 
  return ( 
    <div className={s.main}> 
      <input 
        type="text" 
        id="input_search_field"
        className={s.input} 
        autoComplete="off" 
        placeholder="Search in Wiki" 
        value={saerchTern} 
        onChange={(e) => { 
          setSearchTern(e.target.value); 
          navigate("/wiki/search-result/"); 
          if (e.target.value === "") { 
            setTranslate([{text:"Input search"}]); 
          } else { 
            setTranslate(cloneObj(t("search", { returnObjects: true }),e.target.value)); 
          } 
        }} 
      ></input> 
      <FaSearch className={s.icon} aria-hidden="true" /> 
    </div> 
  ); 
}; 
export default SearchField; 
 
function cloneObj(obj,sub) { 
  let cloneArr = []; 
  for (let key in obj) { 
    for (let k in obj[key]) { 
      cloneArr.push({ category: key,sub:sub, paragrath: k, text: obj[key][k] }); 
    } 
  } 
  return cloneArr; 
}