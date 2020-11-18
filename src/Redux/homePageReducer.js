const SET_FILMS_TO_SLIDER = 'SET_FILMS_TO_SLIDER'
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING'

const initialState = {
    filmsToSlider: [],
    isFetching: true,
}


const homePageReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_FILMS_TO_SLIDER :
            return {
                ...state,
                filmsToSlider: action.filmsToSlider
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


export const setFilmsToSlider = (filmsToSlider) => ({type: SET_FILMS_TO_SLIDER, filmsToSlider})
export const toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching})

export default homePageReducer