import ActionTypes from "../../../constants/actionTypes";

const initialState = {
    gists: []
}
const gistsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ActionTypes.SET_GISTS_TO_STORE:
            return {
                ...state,
                gists: action.payload.gists
            }
        default: return state;

    }
}

export default gistsReducer;