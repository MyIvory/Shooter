import React from "react";
import PropTypes from "prop-types";
import { useTranslation } from "react-i18next";

const SearchResult = (props) => {
  const [t, i18n] = useTranslation();
  // function findkeysinobject(obj, str) {
  //   let found = {};
  //   for (let key in obj) {
  //     found[key] = [];
  //     if (typeof obj[key] === "string") {
  //       if (obj[key].toLowerCase().includes(str.toLowerCase().trim())) {
  //         found[key].push(key);
  //       }
  //     } else if (typeof obj[key] === "object") {
  //       let innerkeys = findkeysinobject(obj[key], str);
  //       for (let item of Object.values(innerkeys)) {
  //         found[key].push(item);
  //       }
  //     }
  //   }

  //   return found;
  // }

  // let value = document.getElementById("search_input").value;
  // console.log(value);
  // let translate = t("search", { returnObjects: true });
  // //setTimeout(()=>{console.log(findkeysinobject(translate, value))},1000)
  // let obj = findkeysinobject(translate, value);

  // //findkeysinobject(translate, value)
  return (
  <div id ="search-result-field">
    
  </div>
  );
};

export default SearchResult;
