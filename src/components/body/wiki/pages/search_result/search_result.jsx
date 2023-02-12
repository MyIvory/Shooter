import React from "react";
import PropTypes from "prop-types";
import { useTranslation } from "react-i18next";

const SearchResult = (props) => {
  const [t, i18n] = useTranslation();

  console.log(props.searchPage);
  return (
    <div id="search-result-field">
      <ul>
        {props.searchPage.map((item, index) => {
         
          if (item.sub) {
           if(item.text) console.log(strong(item.text,item.sub))
            let str1 = item.text.substring(0, item.text.indexOf(item.sub));
            let str2 = item.text.substring(
              item.text.indexOf(item.sub) + item.sub.length
            );
            return (
              <li key={index}>
                {str1}
                <strong>{item.sub}</strong>
                {str2}
              </li>
            );
          } else {
            return <li key={index}>{item.text}</li>;
          }
        })}
      </ul>
    </div>
  );
};

export default SearchResult;
function strong(str,sub) {

  let posArr = [];
  let pos = -1;
  let start = 0;
  while ((pos = str.indexOf(sub, pos + 1)) != -1) {
    start === 0 ?posArr.push(str.substring(start, pos)):posArr.push(str.substring(start, pos).slice(sub.length))
    start = pos;
  }
  return posArr;
}

