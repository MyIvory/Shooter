import React from "react";
import PropTypes from "prop-types";
import { useTranslation } from "react-i18next";

const SearchResult = (props) => {
  const [t, i18n] = useTranslation();

  return (
    <div id="search-result-field">
      <ul>
        {props.searchPage.map((item, index) => {
          return <li key={index}>{item.text}</li>;
        })}
      </ul>
    </div>
  );
};

export default SearchResult;
