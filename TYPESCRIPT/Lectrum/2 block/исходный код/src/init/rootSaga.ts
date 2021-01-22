// Core
import { all } from 'redux-saga/effects';

// Watchers
import { watchStarships } from '../bus/starships/saga';

export function* rootSaga(): Generator {
  yield all([watchStarships()]);
}
