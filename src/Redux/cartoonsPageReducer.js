const SET_CARTOONS = 'SET_CARTOONS'

const initialState = {
    cartoons: []
}


const cartoonsPageReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_CARTOONS :
            return {
                ...state,
                cartoons: [...state.cartoons, ...action.cartoons]
            }
        default :
            return state
    }
}

export const setCartoonsAC = (cartoons) => ({type: SET_CARTOONS, cartoons})


export default cartoonsPageReducer