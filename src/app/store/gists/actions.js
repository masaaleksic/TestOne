import ActionTypes from "../../../constants/actionTypes";

export const setGists = (gists) => ({
    type: ActionTypes.SET_GISTS_TO_STORE,
    payload: {
        gists: gists,
    }
});

export const getGists = () => ({
    type: ActionTypes.GET_GISTS_FROM_STORE
})

export const fetchGists = () => ({
    type: ActionTypes.FETCH_GISTS
})