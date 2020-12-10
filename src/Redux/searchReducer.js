import {API} from '../Components/api/api'


const TOGGLE_BTN = 'TOGGLE_BTN'
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING'
const TOGGLE_IS_SHOW_RESULTS = 'TOGGLE_IS_SHOW_RESULTS'
const SET_SEARCH_TEXT = 'SET_SEARCH_TEXT'
const SET_TOTAL_RESULTS = 'SET_TOTAL_RESULTS'
const SET_TOTAL_PAGES = 'SET_TOTAL_PAGES'
const SET_SEARCH_RESULTS = 'SET_SEARCH_RESULTS'
const SET_INITIAL_STATE = 'SET_INITIAL_STATE'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'

const initialState = {
    currentPage: 1,
    isBtnPressed: false,
    searchText: '',
    totalPages: 0,
    totalResults: 0,
    searchResults: [],
    isFetching: false,
    isShowResults: false,
}


const searchReducer = (state = initialState, action = {}) => {
    switch (action.type) {
        case TOGGLE_IS_FETCHING :
            return {...state, isFetching: action.isFetching}
        case TOGGLE_IS_SHOW_RESULTS :
            return {...state, isShowResults: action.isShowResults}
        case TOGGLE_BTN :
            return {...state, isBtnPressed: action.isBtnPressed}
        case SET_SEARCH_TEXT :
            return {...state, searchText: action.searchText}
        case SET_TOTAL_RESULTS :
            return {...state, totalResults: action.totalResults}
        case SET_TOTAL_PAGES :
            return {...state, totalPages: action.totalPages}
        case SET_CURRENT_PAGE :
            return {...state, currentPage: action.currentPage}
        case SET_SEARCH_RESULTS :
            return {...state, searchResults: action.searchResults}
        case SET_INITIAL_STATE :
            return {
                currentPage: 1,
                isBtnPressed: false,
                searchText: '',
                totalPages: 0,
                totalResults: 0,
                searchResults: [],
                isFetching: false,
                isShowResults: false,
            }
        default :
            return state
    }
}
const isShowResults = isShowResults => ({type: TOGGLE_IS_SHOW_RESULTS, isShowResults})
const toggleIsFetching = isFetching => ({type: TOGGLE_IS_FETCHING, isFetching})
const setTotalPages = totalPages => ({type: SET_TOTAL_PAGES, totalPages})
const setTotalResults = totalResults => ({type: SET_TOTAL_RESULTS, totalResults})
const setSearchResults = searchResults => ({type: SET_SEARCH_RESULTS, searchResults})

export const searchFilms = (inputText, page) => async dispatch => {
    dispatch(toggleIsFetching(true))
    const response = await API.searchFilms(inputText, page)
    dispatch(setTotalResults(response.total_results))
    dispatch(setTotalPages(response.total_pages))
    dispatch(setSearchResults(response.results))
    dispatch(toggleIsFetching(false))
    dispatch(isShowResults(true))
}
export const setCurrentPage = currentPage => ({type: SET_CURRENT_PAGE, currentPage})
export const setSearchText = searchText => ({type: SET_SEARCH_TEXT, searchText})
export const toggleBtn = isBtnPressed => ({type: TOGGLE_BTN, isBtnPressed})
export const setInitialState = () => ({type: SET_INITIAL_STATE})

export default searchReducer

