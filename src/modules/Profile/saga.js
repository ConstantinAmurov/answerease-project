import { put, all, call, takeLatest } from "redux-saga/effects";
import { request } from "helpers/requests";
import { urls } from "helpers/urls";
import { USER_REQUESTING, getUserSuccess, getUserError } from "./actions";

import { browserRedirect } from "helpers/helpers";

//Register API call
function getUserCall() {
    return request("get", urls.GET_CURRENT_USER);
}

// Register Worker
function* getUserWorker({ payload }) {
    try {
        let { data } = yield call(getUserCall, payload);
        yield put(getUserSuccess(data));
    } catch (err) {
        yield put(getUserError(err.response.data));
    }
}

// Register Watcher
export default function* getUserSaga() {
    yield all([takeLatest(USER_REQUESTING, getUserWorker)]);
}
