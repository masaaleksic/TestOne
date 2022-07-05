import ActionTypes from "../../../constants/actionTypes";

export const setPage = (value) => ({
    type: ActionTypes.SET_PAGE,
    payload: {
        currentPage: value
    }
});

export const setPaginationData = (paginationData) => ({
    type: ActionTypes.SET_PAGINATION_DATA,
    payload: paginationData
});