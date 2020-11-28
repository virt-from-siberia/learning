import {
    POST_CREATE_POST,
    POST_FETCH_POSTS,
    LOADER_SHOW_LOADER,
    LOADER_HIDE_LOADER,
    POST_SHOW_ALERT,
    POST_HIDE_ALERT,
    REQUEST_POSTS,
} from "./types";

export function createPost(post) {
    return {
        type: POST_CREATE_POST,
        payload: post,
    };
}

export function showLoader() {
    return {
        type: LOADER_SHOW_LOADER,
    };
}
export function hideLoader() {
    return {
        type: LOADER_HIDE_LOADER,
    };
}

export function showAlert() {
    return {
        type: POST_SHOW_ALERT,
    };
}

export function hideAlert() {
    return {
        type: POST_HIDE_ALERT,
    };
}

//NOTE/: Асинхронный код REDUX THUNK
export function fetchPost(post) {
    return {
        type: REQUEST_POSTS,
    };

    //NOTE/: Асинхронный REDUX THUNK возврашяет функцию dispatch
    // return async (dispatch) => {
    //     try {
    //         dispatch(showLoader());
    //         const response = await fetch(
    //             "https://jsonplaceholder.typicode.com/posts?_limit=5"
    //         );
    //         const json = await response.json();
    //         dispatch(hideLoader());
    //         dispatch({ type: POST_FETCH_POSTS, payload: json });
    //     } catch (err) {
    //         throw err;
    //     }
    // };
}
