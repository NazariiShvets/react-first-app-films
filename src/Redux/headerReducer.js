const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING'
const SET_TEXT_TO_INPUT = 'SET_TEXT_TO_INPUT'
const SET_TOTAL_PAGES = 'SET_TOTAL_PAGES'
const SET_TOTAL_RESULTS = 'SET_TOTAL_RESULTS'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const INCREMENT_CURRENT_PAGE = 'INCREMENT_CURRENT_PAGE'
const SET_FILMS = 'SET_FILMS'
const CLEAR_INPUT_TEXT = 'CLEAR_INPUT_TEXT'
const SET_NEW_FILMS_TO_FILMS = 'SET_NEW_FILMS_TO_FILMS'


const initialState = {
    inputText: '',
    totalPages: 0,
    totalResults: 0,
    currentPage: 0,
    films: [],
    isFetching: true,
}

const headerReducer = (state = initialState, action) => {
    switch (action.type) {
        case TOGGLE_IS_FETCHING :
            return {
                ...state,
                isFetching: action.isFetching
            }
        case SET_TEXT_TO_INPUT:
            return {
                ...state,
                inputText: action.inputText
            }
        case CLEAR_INPUT_TEXT:
            return {
                ...state,
                inputText: ''
            }
        case SET_TOTAL_PAGES:
            return {
                ...state,
                totalPages: action.totalPages
            }
        case SET_TOTAL_RESULTS:
            return {
                ...state,
                totalResults: action.totalResults
            }
        case SET_FILMS:
            return {
                ...state,
                films: action.films
            }
        case SET_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.currentPage
            }
        case SET_NEW_FILMS_TO_FILMS :
            return {
                ...state,
                films: [...state.films, ...action.films]
            }
        case INCREMENT_CURRENT_PAGE :
            return {
                ...state,
                currentPage: state.currentPage + 1
            }
        default :
            return state
    }
}

export const setTextToInput = inputText => ({type: SET_TEXT_TO_INPUT, inputText})
export const setTotalPages = totalPages => ({type: SET_TOTAL_PAGES, totalPages})
export const setTotalResults = totalResults => ({type: SET_TOTAL_RESULTS, totalResults})
export const setFilms = films => ({type: SET_FILMS, films})
export const setNewFilmsToFilms = films => ({type: SET_NEW_FILMS_TO_FILMS, films})
export const setCurrentPage = currentPage => ({type: SET_CURRENT_PAGE, currentPage})
export const clearInputText = () => ({type: CLEAR_INPUT_TEXT,})
export const toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching})
export const incrementCurrentPage = () => ({type: INCREMENT_CURRENT_PAGE})

export default headerReducer