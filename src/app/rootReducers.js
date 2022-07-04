import { combineReducers } from "redux";
import gistsReducer from "./store/gists/reducers";
import loaderReducer from "./store/loader/reducers";
import selectedGistReducer from "./store/selected/reducer";
import setPageReducer from "./store/pagination/reducers";

const rootReducers = combineReducers({
    gists: gistsReducer,
    ui: loaderReducer,
    selectedGist: selectedGistReducer,
    pagination: setPageReducer,
});

export default rootReducers;
