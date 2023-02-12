import React from "react";
import PropTypes from "prop-types";
import { useTranslation } from "react-i18next";

const SearchResult = (props) => {
  const [t, i18n] = useTranslation();

  //console.log(props.searchPage);
  return (
    <div id="search-result-field">
      {props.searchPage.map((item, index) => {
        if (item.sub) {
          let s = strong(item.text, item.sub);
          console.log(s);
          return (
            <div>
              {s.map((it, index) => {
                console.log(`index->${index}`)
                //console.log(it)
                console.log(`s.len->${s.length}`)
                if (index != s.length-1) {
                  return (
                    <span>
                      {it}
                      <strong>{item.sub}</strong>
                    </span>
                  );
                } else {
                  return <span>{it}</span>;
                }
              })}
            </div>
          );
        } else {
          return <li key={index}>{item.text}</li>;
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
