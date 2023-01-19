import s from "./search.module.css";
import { useRef, useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { AudioOutlined } from "@ant-design/icons";
import { Input, Space } from "antd";
const { Search} = Input;

const SearchField = (props) => {
  return (
    <div className={s.main}>
      {/* <button type="submit" className={s.search_but} id ="search_but" onClick={search}>
        <FontAwesomeIcon icon={faSearch} size="lg"/>
      </button>
      <input type="search" className={s.search_input} id="search_input"></input> */}
      
      <Search
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

function onSearch() {
  let value = document.getElementById("search_input").value;
  console.log(value);
}
