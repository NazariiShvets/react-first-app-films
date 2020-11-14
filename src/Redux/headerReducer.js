const initialState = {
    header: {},
}

const headerReducer = (state = initialState, action) => {
    const newState = {...state}
    switch (action.type) {
        default :
            return newState
    }
}

export default headerReducer