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
const filmsPageReducer = (state = initialState, action = {}) => {
    switch (action.type) {
        case SET_NOW_PLAYING_FILMS_TO_SLIDER :
            return {...state, filmsNowPlayingToSlider: action.filmsNowPlayingToSlider}
        case SET_TOP_RATED_FILMS_TO_SLIDER :
            return {...state, filmsTopRatedToSlider: action.filmsTopRatedToSlider}
        case SET_UPCOMING_FILMS_TO_SLIDER :
            return {...state, filmsUpcomingToSlider: action.filmsUpcomingToSlider}
        case SET_POPULAR_FILMS_TO_SLIDER :
            return {...state, filmsPopularToSlider: action.filmsPopularToSlider}
        case TOGGLE_FILMS_IS_FETCHING :
            return {...state, isFetching: action.isFetching}
        case SET_INITIAL_STATE_TO_FILMS:
            return {...initialState}
        default :
            return state
    }
}

const toggleIsFetching = (isFetching) => ({type: TOGGLE_FILMS_IS_FETCHING, isFetching})

export const setNowPlayingFilmToSlider = (filmsNowPlayingToSlider) => ({
    type: SET_NOW_PLAYING_FILMS_TO_SLIDER,
    filmsNowPlayingToSlider
})
export const setUpcomingFilmToSlider = (filmsUpcomingToSlider) => ({
    type: SET_UPCOMING_FILMS_TO_SLIDER,
    filmsUpcomingToSlider
})
export const setTopRatedFilmToSlider = (filmsTopRatedToSlider) => ({
    type: SET_TOP_RATED_FILMS_TO_SLIDER,
    filmsTopRatedToSlider
})
export const setPopularFilmToSlider = (filmsPopularToSlider) => ({
    type: SET_POPULAR_FILMS_TO_SLIDER,
    filmsPopularToSlider
})
export const setInitialStateToFilms = () => ({type: SET_INITIAL_STATE_TO_FILMS})

export const getAllFilmsToSliders = (page = 1) => async dispatch => {
    dispatch(toggleIsFetching(true))
    const getNPMres = await filmAPI.getNowPlayingMovies(page)
    dispatch(setNowPlayingFilmToSlider(getNPMres.results))
    const getPMres = await filmAPI.getPopularMovies(page)
    dispatch(setPopularFilmToSlider(getPMres.results))
    const getTRMres = await filmAPI.getTopRatedMovies(page)
    dispatch(setTopRatedFilmToSlider(getTRMres.results))
    const getUMres = await filmAPI.getUpcomingMovies(page)
    dispatch(setUpcomingFilmToSlider(getUMres.results))
    dispatch(toggleIsFetching(false))
}


export default filmsPageReducer