import React from "react";
import PropTypes from "prop-types";
import { useTranslation } from "react-i18next";
import s from "./search_result.module.css";
import { Link } from "react-router-dom";
import $ from "jquery";
import { motion } from "framer-motion"


const SearchResult = (props) => {
  //console.log(props.searchPage)
  const [t, i18n] = useTranslation();
  const variants = {
    hidden: {
        opacity: 0,
        x: 100
    },
    visible: {
        opacity: 1,
        x: 0,
        transition: { duration: 1 }
    },
}
  return (
    <div id="search-result-field" className={s.main}>
      {props.searchPage.map((item, index) => {
        if (item.sub) {
          let category = item.category;
          let s = strong(item.text, item.sub);
          return (
            <Link key={index} to = {`/wiki/${category}`}  className={s.link}>
              <motion.div className={s.block} whileHover={{ scale: 1.02 }} variants={variants} initial='hidden' whileInView='visible'>
                <h3>{"Found in category: "+t(`search.${category}.title`)}</h3>
                {s.map((it, index) => {
                  if (index != s.length - 1) {
                    //||s.length == 1
                    return (
                      <span>
                        {it}
                        <strong>{item.sub}</strong>
                      </span>
                    );
                  } else  {
                    return <span>{it}</span>;
                  }
                })}
              </motion.div>
            </Link>
          );
        } else {
          return <div className={s.noFoundBox}><h3>{item.text.toUpperCase()}</h3></div>;
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
    start = pos + sub.length
  }
  if (start != str.length) {
    posArr.push(str.substring(start));
  }
  return posArr;
}
