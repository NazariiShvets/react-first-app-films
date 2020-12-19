import {REMOVE_FILM_FROM_COLLECTION, SET_FILM_IN_COLLECTION,} from './Constants'


const initialState = {
    filmsInCollection: [],
}

const myCollectionReducer = (state = initialState, {type, payload}) => {
    switch (type) {
        case SET_FILM_IN_COLLECTION :
            return {
                ...state, filmsInCollection: state.filmsInCollection.some(film => film.id === payload.id)
                    ? state.filmsInCollection
                    : [...state.filmsInCollection, payload]
            }
        case REMOVE_FILM_FROM_COLLECTION :
            return {...state, filmsInCollection: state.filmsInCollection.filter(film => film.id !== payload.id),}
        default:
            return state
    }
}
export const setFilmToCollection = film => ({type: SET_FILM_IN_COLLECTION, payload: film})
export const removeFilmFromCollection = film => ({type: REMOVE_FILM_FROM_COLLECTION, payload: film})


export default myCollectionReducer