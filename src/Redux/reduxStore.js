import {combineReducers, createStore , applyMiddleware} from "redux";
import {devToolsEnhancer} from 'redux-devtools-extension';
import footerReducer from "./footerReduser";
import headerReducer from "./headerReducer";
import homePageReducer from "./homePageReducer";
import filmsPageReducer from "./filmsPageReducer";
import serialsPageReducer from "./serialsPageReducer";

import cartoonsPageReducer from "./cartoonsPageReducer";
let reducers = combineReducers({
    header: headerReducer,
    homePage: homePageReducer,
    filmsPage: filmsPageReducer,
    serialsPage: serialsPageReducer,
    cartoonsPage: cartoonsPageReducer,
    footer: footerReducer,
})


const store = createStore(reducers, devToolsEnhancer ());


window.store = store

export default store