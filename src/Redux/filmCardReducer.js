const SET_FILM = 'SET_FILM'
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING'


const initialState = {
    film: {},
    isFetching: true,
}


const filmCardReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_FILM :
            return {
                ...state,
                film: action.film
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


export const setFilm = film => ({type: SET_FILM, film})
export const toggleIsFetching = isFetching => {
    return {type: TOGGLE_IS_FETCHING, isFetching}
}


export default filmCardReducer