const SET_TEXT_TO_INPUT = 'SET_TEXT_TO_INPUT'
const CLEAR_INPUT_TEXT = 'CLEAR_INPUT_TEXT'


const initialState = {
    inputText: '',
}

const headerReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_TEXT_TO_INPUT:
            return {
                ...state,
                inputText: action.inputText
            }
        case CLEAR_INPUT_TEXT:
            return {
                ...state,
                inputText: ''
            }
        default :
            return state
    }
}

export const setTextToInput = inputText => ({type: SET_TEXT_TO_INPUT, inputText})
export const clearInputText = () => ({type: CLEAR_INPUT_TEXT,})

export default headerReducer