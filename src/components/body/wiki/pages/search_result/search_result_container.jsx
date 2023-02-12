import React from "react";
import { connect } from "react-redux";
import SearchResult from "./search_result";
import { searchActionCreater } from "../../../../../redux/reducers/serch_reduser";
import { parseForSearchActionCreater } from "../../../../../redux/reducers/serch_reduser";

let mapStateToProps = (state)=>{
  return {
    searchPage: state.searchPage,
    parse: state
  };
};
let mapDispatchToProps = (dispatch) => {
  return {
   
  };
};
const SearchResultContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchResult);

export default SearchResultContainer;

