import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import SearchField from './search';
import { searchActionCreater } from '../../../../redux/reducers/serch_reduser';


let mapStateToProps = (state) => {
  return {
    searchPage: state.searchPage
  };
};
let mapDispatchToProps = (dispatch) => {
  let fun = debounce(dispatch, 1000)
  return {
    updateState: (obj) => {
      fun(searchActionCreater(obj))
    }
  };
};
const SearchContainer = connect(mapStateToProps, mapDispatchToProps)(SearchField)



export default SearchContainer;

function debounce(callback, delay) {
  let timer;
  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(() => {
      callback.apply(this, args);
    }, delay);
  }
}
