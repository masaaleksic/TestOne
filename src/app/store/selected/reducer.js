import ActionTypes from "../../../constants/actionTypes";

const initialState = {
    id: ""
}
const selectedGistReducer = (state = initialState, action) => {
    switch(action.type) {
        case ActionTypes.SELECT_GIST:
            return {
                ...state,
                id: action.payload.id
            }
        default: return state;
    }
}

export default selectedGistReducer;