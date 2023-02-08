import {configureStore,combineReducers } from "@reduxjs/toolkit";
import leftMenuReducer from "./reducers/left_menu_reduser";
import searchReduser from "./reducers/serch_reduser";


let reducers = combineReducers({
    leftMenuState: leftMenuReducer,
    searchPage: searchReduser
})

let store = configureStore({
    reducer:reducers,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false,
    }),
})

export default store