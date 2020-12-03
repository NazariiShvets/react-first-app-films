const SET_NOW_PLAYING_FILMS_TO_SLIDER = 'SET_NOW_PLAYING_FILMS_TO_SLIDER'
const SET_POPULAR_FILMS_TO_SLIDER = 'SET_POPULAR_FILMS_TO_SLIDER'
const SET_TOP_RATED_FILMS_TO_SLIDER = 'SET_TOP_RATED_FILMS_TO_SLIDER'
const SET_UPCOMING_FILMS_TO_SLIDER = 'SET_UPCOMING_FILMS_TO_SLIDER'
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING'

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
            return {
                ...state,
                filmsNowPlayingToSlider: action.filmsNowPlayingToSlider
            }
        case SET_TOP_RATED_FILMS_TO_SLIDER :
            return {
                ...state,
                filmsTopRatedToSlider: action.filmsTopRatedToSlider
            }
        case SET_UPCOMING_FILMS_TO_SLIDER :
            return {
                ...state,
                filmsUpcomingToSlider: action.filmsUpcomingToSlider
            }
        case SET_POPULAR_FILMS_TO_SLIDER :
            return {
                ...state,
                filmsPopularToSlider: action.filmsPopularToSlider
            }
        case TOGGLE_IS_FETCHING :
            return {
                ...state,
                isFetching: action.isFetching
            }
        default :
            return state
    }
}

export const setNowPlayingFilmToSlider = (filmsNowPlayingToSlider) => ({type: SET_NOW_PLAYING_FILMS_TO_SLIDER, filmsNowPlayingToSlider})
export const setUpcomingFilmToSlider = (filmsUpcomingToSlider) => ({type: SET_UPCOMING_FILMS_TO_SLIDER, filmsUpcomingToSlider})
export const setTopRatedFilmToSlider = (filmsTopRatedToSlider) => ({type: SET_TOP_RATED_FILMS_TO_SLIDER, filmsTopRatedToSlider})
export const setPopularFilmToSlider = (filmsPopularToSlider) => ({type: SET_POPULAR_FILMS_TO_SLIDER, filmsPopularToSlider})
export const toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching})


export default filmsPageReducer