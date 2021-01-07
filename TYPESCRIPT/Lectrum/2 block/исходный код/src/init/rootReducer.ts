// Core
import { combineReducers } from 'redux';

// Reducers
import { starshipsReducer as starships } from '../bus/starships/reducer';

export const rootReducer = combineReducers({
    starships,
});

export type AppState = ReturnType<typeof rootReducer>;