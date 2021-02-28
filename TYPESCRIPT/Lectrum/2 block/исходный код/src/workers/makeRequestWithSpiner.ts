//Core
import { SagaIterator } from '@redux-saga/core';
import { ActionCreator, AnyAction } from 'redux'
import {
    put, call
} from 'redux-saga/effects'

//Common types
import { FillActionType, ErrorActionType } from '../types'

type OptionsType<T> = {
    fetcher: (url?: string) => Promise<T>;
    fetcherParam?: string;
    startFetching: ActionCreator<AnyAction>;
    stopFetching: ActionCreator<AnyAction>;
    fill: FillActionType<T>;
    setErrorAction: ErrorActionType;
}


export function* makeRequestWithSpiner<T>(options: OptionsType<T>): SagaIterator {
    const {
        fetcher,
        fetcherParam,
        startFetching,
        stopFetching,
        fill,
        setErrorAction
    } = options

    try {
        yield put(startFetching())

        const result = yield call(fetcher, fetcherParam)
        yield put(fill(result))

    } catch (error) {
        yield put(setErrorAction(error.message))

    } finally {
        yield put(stopFetching())
    }
}



