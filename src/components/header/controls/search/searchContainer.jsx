import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import SearchField from './search';
import { searchActionCreater } from '../../../../redux/reducers/serch_reduser';


let mapStateToProps = (state)=>{
    return {
      searchPage: state.searchPage
    };
  };
  let mapDispatchToProps = (dispatch) => {
    return {
       updateState :(obj)=>{
        dispatch(searchActionCreater(obj))
       } 
    };
  };
const SearchContainer = connect(mapStateToProps,mapDispatchToProps)(SearchField)



export default SearchContainer;