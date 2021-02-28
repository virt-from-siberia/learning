//Types
import { isSwitchStatement } from 'typescript'
import {
    ErrorHttpAction,
    StarshipsActionTypes,
    Starships,
    STARSHIPS_FETCH_ASYNC,
    STARSHIPS_FILL,
    STARSHIPS_SET_FETCHING_ERROR,
    STARSHIPS_STOP_FETCHING,
    STARSHIPS_START_FETCHING,
} from './types'

export type StarshipsState = {
    data: Starships;
    isFetching: boolean;
    error: false | ErrorHttpAction
}

const initalState: StarshipsState = {
    data: {
        results: [],
    },
    isFetching: false,
    error: false
}

export const starshpsReducer = (
    state: StarshipsState = initalState,
    action: StarshipsActionTypes
): StarshipsState => {

    if (!('type' in action)) {
        return state
    }

    switch (action.type) {
        case STARSHIPS_START_FETCHING:
            return {
                ...state,
                isFetching: true,
                error: false
            }
        case STARSHIPS_STOP_FETCHING:
            return {
                ...state,
                isFetching: false,
                error: false
            }
        case STARSHIPS_SET_FETCHING_ERROR:
            return {
                ...state,
                error: action.payload
            }
        case STARSHIPS_FILL:
            return {
                ...state,
                data: {
                    ...action.payload,
                },
                error: false
            }
        case STARSHIPS_FETCH_ASYNC:
            return {
                ...state,
            }
        default: const x: never = action;
    }
    return state;
}