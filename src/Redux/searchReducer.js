import {filmAPI} from '../api/filmAPI'
import {
    SET_SEARCH_CURRENT_PAGE, SET_SEARCH_INITIAL_STATE, SET_SEARCH_RESULTS,
    SET_SEARCH_TEXT, SET_SEARCH_TOTAL_PAGES, SET_SEARCH_TOTAL_RESULTS,
    TOGGLE_SEARCH_BTN, TOGGLE_SEARCH_IS_FETCHING, TOGGLE_SEARCH_IS_SHOW_RESULTS
} from './Constants'


const initialState = {
    currentPage: 1,
    totalPages: 0,
    totalResults: 0,
    searchText: '',
    searchResults: [],
    isBtnPressed: false,
    isFetching: false,
    isShowResults: false,
}

const searchReducer = (state = initialState, {type, payload} = {}) => {
    switch (type) {
        case TOGGLE_SEARCH_IS_FETCHING :
            return {...state, isFetching: payload}
        case TOGGLE_SEARCH_IS_SHOW_RESULTS :
            return {...state, isShowResults: payload}
        case TOGGLE_SEARCH_BTN :
            return {...state, isBtnPressed: payload}
        case SET_SEARCH_TEXT :
            return {...state, searchText: payload}
        case SET_SEARCH_TOTAL_RESULTS :
            return {...state, totalResults: payload}
        case SET_SEARCH_TOTAL_PAGES :
            return {...state, totalPages: payload}
        case SET_SEARCH_CURRENT_PAGE :
            return {...state, currentPage: payload}
        case SET_SEARCH_RESULTS :
            return {...state, searchResults: payload}
        case SET_SEARCH_INITIAL_STATE:
            return {...initialState}
        default :
            return state
    }
}
const isShowResults = bool => ({type: TOGGLE_SEARCH_IS_SHOW_RESULTS, payload: bool})
const toggleIsFetching = bool => ({type: TOGGLE_SEARCH_IS_FETCHING, payload: bool})
const setTotalPages = totalPages => ({type: SET_SEARCH_TOTAL_PAGES, payload: totalPages})
const setTotalResults = totalResults => ({type: SET_SEARCH_TOTAL_RESULTS, payload: totalResults})
const setSearchResults = searchResults => ({type: SET_SEARCH_RESULTS, payload: searchResults})

export const searchFilms = (inputText, page) => async dispatch => {
    dispatch(toggleIsFetching(true))
    const response = await filmAPI.searchFilms(inputText, page)
    dispatch(setTotalResults(response.total_results))
    dispatch(setTotalPages(response.total_pages))
    dispatch(setSearchResults(response.results))
    dispatch(toggleIsFetching(false))
    dispatch(isShowResults(true))
}

export const setCurrentPage = currentPage => ({type: SET_SEARCH_CURRENT_PAGE, payload: currentPage})
export const setSearchText = searchText => ({type: SET_SEARCH_TEXT, payload: searchText})
export const toggleBtn = isBtnPressed => ({type: TOGGLE_SEARCH_BTN, payload: isBtnPressed})
export const setInitialState = () => ({type: SET_SEARCH_INITIAL_STATE})

export default searchReducer


