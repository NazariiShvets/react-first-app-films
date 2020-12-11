import {API} from '../Components/api/api'


const SET_FILM = 'SET_FILM'
const TOGGLE_FILM_CARD_IS_FETCHING = 'TOGGLE_FILM_CARD_IS_FETCHING'
const SET_INITIAL_STATE_TO_FILM_CARD = 'SET_INITIAL_STATE_TO_FILM_CARD'

const initialState = {
    film: {},
    isFetching: true,
}

const filmCardReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_FILM :
            return {...state, film: action.film}
        case TOGGLE_FILM_CARD_IS_FETCHING:
            debugger
            return {...state, isFetching: action.isFetching}
        case SET_INITIAL_STATE_TO_FILM_CARD :
            return {...initialState}
        default :
            return state
    }
}

const toggleIsFetching = isFetching => ({type: TOGGLE_FILM_CARD_IS_FETCHING, isFetching})
const setFilm = film => ({type: SET_FILM, film})
export const setInitialStateToFilmCard = () => ({type: SET_INITIAL_STATE_TO_FILM_CARD})
export const getFilmInfo = (id, type = 'movie') => async dispatch => {
    dispatch(toggleIsFetching(true))
    const response = await API.getFilmInfo(type, id)
    dispatch(setFilm(response))
    dispatch(toggleIsFetching(false))
}

export default filmCardReducer