import {filmAPI} from '../api/filmAPI'
import {
    SET_INITIAL_STATE_TO_FILMS,
    SET_NOW_PLAYING_FILMS_TO_SLIDER,
    SET_POPULAR_FILMS_TO_SLIDER,
    SET_TOP_RATED_FILMS_TO_SLIDER,
    SET_UPCOMING_FILMS_TO_SLIDER, TOGGLE_FILMS_IS_FETCHING
} from './Constants'


const initialState = {
    filmsNowPlayingToSlider: [],
    filmsPopularToSlider: [],
    filmsTopRatedToSlider: [],
    filmsUpcomingToSlider: [],
    isFetching: true,
}
const filmsPageReducer = (state = initialState, {type, payload}) => {
    switch (type) {
        case SET_NOW_PLAYING_FILMS_TO_SLIDER :
            return {...state, filmsNowPlayingToSlider: payload}
        case SET_TOP_RATED_FILMS_TO_SLIDER :
            return {...state, filmsTopRatedToSlider: payload}
        case SET_UPCOMING_FILMS_TO_SLIDER :
            return {...state, filmsUpcomingToSlider: payload}
        case SET_POPULAR_FILMS_TO_SLIDER :
            return {...state, filmsPopularToSlider: payload}
        case TOGGLE_FILMS_IS_FETCHING :
            return {...state, isFetching: payload}
        case SET_INITIAL_STATE_TO_FILMS:
            return {...initialState}
        default :
            return state
    }
}

const toggleIsFetching = bool => ({type: TOGGLE_FILMS_IS_FETCHING, payload: bool})

const setNowPlayingFilmToSlider = films => ({type: SET_NOW_PLAYING_FILMS_TO_SLIDER, payload: films})
const setUpcomingFilmToSlider = films => ({type: SET_UPCOMING_FILMS_TO_SLIDER, payload: films})
const setTopRatedFilmToSlider = films => ({type: SET_TOP_RATED_FILMS_TO_SLIDER, payload: films})
const setPopularFilmToSlider = films => ({type: SET_POPULAR_FILMS_TO_SLIDER, payload: films})
export const setInitialStateToFilms = () => ({type: SET_INITIAL_STATE_TO_FILMS})

export const getAllFilmsToSliders = (page = 1) => async dispatch => {
    dispatch(toggleIsFetching(true))
    const getNPMres = await filmAPI.getNowPlayingMovies(page)
    const getPMres = await filmAPI.getPopularMovies(page)
    const getTRMres = await filmAPI.getTopRatedMovies(page)
    const getUMres = await filmAPI.getUpcomingMovies(page)
    dispatch(setNowPlayingFilmToSlider(getNPMres.results))
    dispatch(setPopularFilmToSlider(getPMres.results))
    dispatch(setTopRatedFilmToSlider(getTRMres.results))
    dispatch(setUpcomingFilmToSlider(getUMres.results))
    dispatch(toggleIsFetching(false))
}


export default filmsPageReducer