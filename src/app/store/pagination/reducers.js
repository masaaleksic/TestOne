import ActionTypes from "../../../constants/actionTypes";

const initialState = {
    page: 1,
    first: 1,
    next: '',
    last: '',
    prev: ''
}
const setPageReducer = (state = initialState, action) => {
    switch(action.type) {
        case ActionTypes.SET_PAGE:
            return {
                ...state,
                page: action.payload.page
            }
        case ActionTypes.SET_PAGINATION_DATA:
            return {
                ...state,
                next: action.payload?.next?.page,
                last: action.payload?.last?.page || state.last,
                prev: action.payload?.prev?.page,
            }
        default: return state;
    }
}

export default setPageReducer;