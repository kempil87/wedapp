const initialState = {
    token: null,
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_TOKEN":
            return  {
                ...state,
                token: action.payload
            }
        case "DELETE_TOKEN":
            return {
                ...state,
                token: null
            }
        default:
            return state
    }
}

export default reducer
