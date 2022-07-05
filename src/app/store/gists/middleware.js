import ActionTypes from "../../../constants/actionTypes";
import axios from "axios";
import Config from "../../../config/config";
import { setGists } from "./actions";
import { setLoader } from "../loader/actions";
import ApiConstants from "../../../constants/api";
import parse from 'parse-link-header';
import { setPaginationData } from "../pagination/actions";
import { setStatus } from "../status/actions";

export const getGistsMiddleware = (store) => (next) => (action) => {
    next(action);
    switch (action.type) {
        case ActionTypes.FETCH_GISTS:
            next(setLoader(true));
            axios.get(`${Config.api.github}${Config.gists}`, {
                    params: { page: store.getState().pagination.currentPage }
            })
                .then(resp => {
                    next(setStatus(resp.status));
                    if (resp.status === ApiConstants.STATUS_OK) {
                        next(setPaginationData(parse(resp.headers.link)));
                        next(setGists(resp.data));
                    }
                    next(setLoader(false));
                });
        break;
    }
};