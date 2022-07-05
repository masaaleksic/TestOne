import ActionTypes from "../../../constants/actionTypes";

const initialState = {
    statusCode: ""
}
const statusCodeReducer = (state = initialState, action) => {
    switch(action.type) {
        case ActionTypes.SET_STATUS_CODE:
            return {
                ...state,
                statusCode: action.payload.statusCode
            }
        default: return state;
    }
}

export default statusCodeReducer;