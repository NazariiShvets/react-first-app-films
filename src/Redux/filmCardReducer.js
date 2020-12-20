import {filmAPI} from '../api/filmAPI'
import {
    SET_FILM, SET_INITIAL_STATE_TO_FILM_CARD, TOGGLE_FILM_CARD_IS_FETCHING, TOGGLE_IS_FILM_IN_COLLECTION
} from './Constants'


const initialState = {
    film: {},
    isFetching: true,
    isFilmInCollection: false,
}

const filmCardReducer = (state = initialState, {type, payload}) => {
    switch (type) {
        case SET_FILM :
            return {...state, film: payload}
        case TOGGLE_FILM_CARD_IS_FETCHING:
            return {...state, isFetching: payload}
        case TOGGLE_IS_FILM_IN_COLLECTION :
            return {...state, isFilmInCollection: payload}
        case SET_INITIAL_STATE_TO_FILM_CARD :
            return {...initialState}
        default :
            return state
    }
}

const toggleIsFetching = isFetching => ({type: TOGGLE_FILM_CARD_IS_FETCHING, payload: isFetching})
const setFilm = film => ({type: SET_FILM, payload: film})
export const toggleIsFilmInCollection = bool => ({type: TOGGLE_IS_FILM_IN_COLLECTION, payload: bool})
export const setInitialStateToFilmCard = () => ({type: SET_INITIAL_STATE_TO_FILM_CARD})

export const getFilmInfo = (id, type = 'movie') => async (dispatch, getState) => {
    dispatch(toggleIsFetching(true))
    const filmsInCollection = getState().myCollection.filmsInCollection
    const response = await filmAPI.getFilmInfo(type, id)
    dispatch(setFilm(response))
    dispatch(toggleIsFilmInCollection(filmsInCollection.some(film => film.id === response.id)))
    dispatch(toggleIsFetching(false))
}

export default filmCardReducer