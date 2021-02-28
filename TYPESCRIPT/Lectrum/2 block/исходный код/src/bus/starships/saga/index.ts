//Core
import { SagaIterator } from '@redux-saga/core'
import { takeEvery, all, call } from 'redux-saga/effects'

//Types
import { STARSHIPS_FETCH_ASYNC } from '../types'

//Workers
import { fetchStarships } from './workers'

function* watchFetchStarchips(): SagaIterator {
    yield takeEvery(STARSHIPS_FETCH_ASYNC, fetchStarships);
}

export function* watchStarships(): SagaIterator {
    yield all([
        call(watchFetchStarchips)
    ])
}