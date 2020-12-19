import {combineReducers, createStore, applyMiddleware} from 'redux'
import thunkMiddleware from 'redux-thunk'
import footerReducer from './footerReduser'
import homePageReducer from './homePageReducer'
import filmsPageReducer from './filmsPageReducer'
import serialsPageReducer from './serialsPageReducer'
import filmCardReducer from './filmCardReducer'
import searchReducer from './searchReducer'
import myCollectionReducer from './myCollectionReducer'


let reducers = combineReducers({
    homePage: homePageReducer,
    filmsPage: filmsPageReducer,
    serialsPage: serialsPageReducer,
    filmCard: filmCardReducer,
    footer: footerReducer,
    search: searchReducer,
    myCollection: myCollectionReducer,
})


const store = createStore(reducers, applyMiddleware(thunkMiddleware))


window.store = store

export default store