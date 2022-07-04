import ActionTypes from "../../../constants/actionTypes";

export const selectGist = (value) => ({
    type: ActionTypes.SELECT_GIST,
    payload: {
        id: value
    }
});