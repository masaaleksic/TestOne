import ActionTypes from "../../../constants/actionTypes";

export const setStatus = (value) => ({
    type: ActionTypes.SET_STATUS_CODE,
    payload: {
        statusCode: value
    }
});