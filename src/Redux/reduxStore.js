import {combineReducers, createStore} from "redux";
import footerReducer from "./footerReduser";
import headerReducer from "./headerReducer";
import mainPageReducer from "./mainPageReducer";


let reducers = combineReducers({
    headerReducer,
    mainPageReducer,
    footerReducer,
})

const store = createStore(reducers)


export default store