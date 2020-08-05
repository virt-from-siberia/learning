import {AXIOS_API} from "../api/api";

const USER_FOLLOW = "USER_FOLLOW";
const USER_UNFOLLOW = "USER_UNFOLLOW";
const SET_USERS = "SET_USERS";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const SET_TOTAL_USERS_COUNT = "SET_TOTAL_USERS_COUNT";
const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING";
const TOGGLE_IS_FOLLOWING_PROGGRESS = "TOGGLE_IS_FOLLOWING_PROGGRESS";

let initialState = {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    followingInProgress: [],
};

const usersReducer = (state = initialState, action) => {
    console.log(action)
    switch (action.type) {
        case USER_FOLLOW:
            return {
                ...state,
                users: state.users.map((u) => {
                    if (u.id === action.userId) {
                        return {...u, followed: true};
                    }
                    return u;
                }),
            };

        case USER_UNFOLLOW:
            return {
                ...state,
                users: state.users.map((u) => {
                    if (u.id === action.userId) {
                        return {...u, followed: false};
                    }
                    return u;
                }),
            };
        case SET_USERS:
            return {...state, users: action.users};

        case SET_CURRENT_PAGE:
            return {...state, currentPage: action.currentPage};

        case SET_TOTAL_USERS_COUNT:
            return {...state, totalUsersCount: action.count};

        case TOGGLE_IS_FETCHING:
            return {...state, isFetching: action.isFetching};
        case TOGGLE_IS_FOLLOWING_PROGGRESS:
            return {
                ...state,
                followingInProgress: action.isFetching
                    ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(id => id !== action.userId)
            };
        default:
            return state;
    }
};

export const followSuccess = (userId) => ({type: USER_FOLLOW, userId});
export const unfollowSuccess = (userId) => ({type: USER_UNFOLLOW, userId});
export const setUsers = (users) => ({type: SET_USERS, users});
export const setCurrentPage = (currentPage) => ({
    type: SET_CURRENT_PAGE,
    currentPage,
});
export const setTotalUsersCount = (count) => ({
    type: SET_TOTAL_USERS_COUNT,
    count,
});
export const toggleIsFetching = (isFetching) => ({
    type: TOGGLE_IS_FETCHING,
    isFetching,
});
export const toggleFollowingProgress = (isFetching, userId) => ({
    type: TOGGLE_IS_FOLLOWING_PROGGRESS,
    isFetching,
    userId
});



export const follow = (userId) => {
    return (dispatch) => {
        dispatch(toggleFollowingProgress(true, userId));
        AXIOS_API.follow(userId)
            .then((response) => {
                if (response.data.resultCode === 0) {
                    dispatch(followSuccess(userId));
                }
            });
        dispatch(toggleFollowingProgress(false, userId));
    }
}

export const unfollow = (userId) => {
    return (dispatch) => {
        dispatch(toggleFollowingProgress(true, userId));
        AXIOS_API.unfollow(userId)
            .then((response) => {
                if (response.data.resultCode === 0) {
                    dispatch(unfollowSuccess(userId));
                }
            });
        dispatch(toggleFollowingProgress(false, userId));
    }
}


export const getUsers = (currentPage, pageSize) => {
    return async (dispatch) => {
        try {
            dispatch(toggleIsFetching(true));
            let res = await AXIOS_API.getUsers(
                currentPage,
                pageSize
            );
            dispatch(toggleIsFetching(false));
            dispatch(setUsers(res.items));
            dispatch(setTotalUsersCount(res.totalCount));
        } catch (error) {
            dispatch(toggleIsFetching(false));
            console.log(error);
        }
    }
}


export default usersReducer;
