import ActionTypes from "../../../constants/actionTypes";

export const setLoader = (value) => ({
    type: ActionTypes.SET_LOADER,
    payload: {
        load: value
    }
});