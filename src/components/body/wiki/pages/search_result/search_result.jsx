import React from "react";
import PropTypes from "prop-types";
import { useTranslation } from "react-i18next";
import s from "./search_result.module.css";
import { Link } from "react-router-dom";
import $ from "jquery";


const SearchResult = (props) => {
  const [t, i18n] = useTranslation();
  return (
    <div id="search-result-field" className={s.main}>
      {props.searchPage.map((item, index) => {
        if (item.sub) {
          let category = item.category;
          let s = strong(item.text, item.sub);
          console.log(s);
          //$("input_search_field").val("")
          //document.getElementById("input_search_field").value = "";
          return (
            <Link key={index} to = {`/wiki/${category}`}  className={s.link}>
              <div className={s.block}>
                <h3>{t(`search.${category}.title`)}</h3>
                {s.map((it, index) => {
                  if (index != s.length - 1) {
                    //||s.length == 1
                    return (
                      <span>
                        {it}
                        <strong>{item.sub}</strong>
                      </span>
                    );
                  } else if (1) {
                    return <span>{it}</span>;
                  }
                })}
              </div>
            </Link>
          );
        } else {
          return <div>{item.text}</div>;
        }
      })}
    </div>
  );
};

export default SearchResult;
function strong(str, sub) {
  let posArr = [];
  let pos = -1;
  let start = 0;
  while ((pos = str.indexOf(sub, pos + 1)) != -1) {
    posArr.push(str.substring(start, pos));
    start = pos + sub.length;
  }
  if (start != str.length) {
    posArr.push(str.substring(start));
  }
  
  return posArr;
}
