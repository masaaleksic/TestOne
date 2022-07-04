import ActionTypes from "../../../constants/actionTypes";

const initialState = {
    loader: false
}
const loaderReducer = (state = initialState, action) => {
    switch(action.type) {
        case ActionTypes.SET_LOADER:
            return {
                ...state,
                loader: action.payload.load
            }
        default: return state;
    }
}

export default loaderReducer;