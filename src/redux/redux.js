import {configureStore,combineReducers } from "@reduxjs/toolkit";
import leftMenuReducer from "./reducers/left_menu_reduser";


let reducers = combineReducers({
    leftMenuState: leftMenuReducer
})

let store = configureStore({
    reducer:reducers,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false,
    }),
})

export default store