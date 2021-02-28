import { POST_CREATE_POST, POST_FETCH_POSTS } from "./types";

const initialState = {
    posts: [],
    fetchedPosts: [],
};

//NOTE/: Pure functions
export const postReducer = (state = initialState, action) => {
    switch (action.type) {
        case POST_CREATE_POST:
            return {
                ...state,
                posts: [...state.posts, action.payload],
            };
        case POST_FETCH_POSTS:
            return {
                ...state,
                fetchedPosts: action.payload,
            };
        default:
            return state;
    }
};

export default postReducer;
