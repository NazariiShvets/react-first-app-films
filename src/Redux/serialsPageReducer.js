import {SET_SERIALS} from './Constants'


const initialState = {
    serials: []
}


const serialsPageReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_SERIALS :
            return {...state, serials: [...state.serials, ...action.serials]}
        default :
            return state
    }
}

export const setSerialsAC = (serials) => ({type: SET_SERIALS, serials})


export default serialsPageReducer