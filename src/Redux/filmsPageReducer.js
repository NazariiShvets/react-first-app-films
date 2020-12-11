import {API} from '../Components/api/api'


const SET_NOW_PLAYING_FILMS_TO_SLIDER = 'SET_NOW_PLAYING_FILMS_TO_SLIDER'
const SET_POPULAR_FILMS_TO_SLIDER = 'SET_POPULAR_FILMS_TO_SLIDER'
const SET_TOP_RATED_FILMS_TO_SLIDER = 'SET_TOP_RATED_FILMS_TO_SLIDER'
const SET_UPCOMING_FILMS_TO_SLIDER = 'SET_UPCOMING_FILMS_TO_SLIDER'
const TOGGLE_FILMS_IS_FETCHING = 'TOGGLE_FILMS_IS_FETCHING'
const SET_INITIAL_STATE_TO_FILMS = 'SET_INITIAL_STATE_TO_FILMS'

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
            debugger
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
    const getNPMres = await API.getNowPlayingMovies(page)
    dispatch(setNowPlayingFilmToSlider(getNPMres.results))
    const getPMres = await API.getPopularMovies(page)
    dispatch(setPopularFilmToSlider(getPMres.results))
    const getTRMres = await API.getTopRatedMovies(page)
    dispatch(setTopRatedFilmToSlider(getTRMres.results))
    const getUMres = await API.getUpcomingMovies(page)
    dispatch(setUpcomingFilmToSlider(getUMres.results))
    dispatch(toggleIsFetching(false))
}


export default filmsPageReducer