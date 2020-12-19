import {filmAPI} from '../api/filmAPI'
import {SET_FILMS_TO_SLIDER, SET_INITIAL_STATE_TO_HOME, TOGGLE_HOME_IS_FETCHING} from './Constants'


const initialState = {
    filmsToSlider: [],
    isFetching: true,
}

const homePageReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_FILMS_TO_SLIDER :
            return {...state, filmsToSlider: action.filmsToSlider}
        case TOGGLE_HOME_IS_FETCHING :
            return {...state, isFetching: action.isFetching}
        case SET_INITIAL_STATE_TO_HOME :
            return {...initialState}
        default :
            return state
    }
}


const toggleIsFetching = (isFetching) => ({type: TOGGLE_HOME_IS_FETCHING, isFetching})
const setFilmsToSlider = (filmsToSlider) => ({type: SET_FILMS_TO_SLIDER, filmsToSlider})

export const setInitialStateToHome = () => ({type: SET_INITIAL_STATE_TO_HOME})
export const getFilms = (amount) => async dispatch => {
    dispatch(toggleIsFetching(true))
    const {results} = await filmAPI.getFilms(amount)
    dispatch(setFilmsToSlider(results))
    dispatch(toggleIsFetching(false))
}

export default homePageReducer