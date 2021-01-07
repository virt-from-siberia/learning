// Core
import { all } from 'redux-saga/effects';
import { SagaIterator } from '@redux-saga/core';

// Watchers
import { watchStarships } from '../bus/starships/saga';

export function* rootSaga(): SagaIterator {
  yield all([watchStarships()]);
}
