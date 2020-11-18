import {combineReducers, createStore, applyMiddleware} from 'redux'
import thunkMiddleware from 'redux-thunk'
import footerReducer from './footerReduser'
import headerReducer from './headerReducer'
import homePageReducer from './homePageReducer'
import filmsPageReducer from './filmsPageReducer'
import serialsPageReducer from './serialsPageReducer'
import filmCardReducer from './filmCardReducer'


let reducers = combineReducers({
    header: headerReducer,
    homePage: homePageReducer,
    filmsPage: filmsPageReducer,
    serialsPage: serialsPageReducer,
    filmCard: filmCardReducer,
    footer: footerReducer,
})


const store = createStore(reducers, applyMiddleware(thunkMiddleware))


window.store = store

export default store