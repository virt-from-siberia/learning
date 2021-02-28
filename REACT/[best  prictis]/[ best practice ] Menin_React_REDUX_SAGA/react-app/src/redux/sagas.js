import { takeEvery, put, call } from "redux-saga/effects";
import { REQUEST_POSTS, POST_FETCH_POSTS } from "./types";
import { showLoader, hideLoader } from "./actions";

export function* sagasWatcher() {
    yield takeEvery(REQUEST_POSTS, sagaWorker);
}

function* sagaWorker() {
    yield put(showLoader());
    const payload = yield call(fetchPosts);
    yield put({ type: POST_FETCH_POSTS, payload });
    yield put(hideLoader());
}

async function fetchPosts() {
    const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts?_limit=5"
    );
    return await response.json();
}
