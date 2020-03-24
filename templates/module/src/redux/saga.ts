import {
  call, all, select, takeEvery, put,
} from 'redux-saga/effects';
import { startLoading, endLoading, resultsReceived, loadingError, clearLoadingError } from './actions';
import { I{{moduleName}}State, ISomeAction, SOME_ACTION, ISomeApiInterface } from './types';

import * as Api from '../api';
import { ISomeApiInterface } from '../api/types';

export function* rootSaga() {
  yield all([
    // put here all sagas what you need
    sendDataToBackend(),
    getDataFromBackend(),
  ]);
}

/* ****** sendDataToBackend ****** */

function* sendDataToBackend() {
  /* Connect actions with processors */
  yield takeEvery(SOME_ACTION, exampleProcessSomeAction);
}

function* exampleProcessSomeAction(action: ISomeAction) {
  /* This good place for implement some data processing. */

  // 1. Take data from action
  const text = action.payload;

  // 2. Take data from current state
  const someAggregatedData = yield select(takeSomethingFormState(text));

  // 3. Call api
  yield call(Api.someApiMethod, someAggregatedData);
}

function takeSomethingFormState(text: string) {
  return ({ {{moduleName}}State }: I{{moduleName}}State): ISomeApiInterface => {
    const { foo, bar } = I{{moduleName}}State;
    return { foo, bar };
  };
}

/* ****** getDataFromBackend ****** */

function* getDataFromBackend() {
  /* Connect actions with processors */
  yield takeEvery(GET_DATA, requestDataFromApi);
}


function* requestDataFromApi(action: IGetDataAction) {
  // 1. Call some action
  yield put(startLoading());
  try {
    const json = yield call(Api.fetchData, action.payload);
    yield put(resultsReceived(json));
    yield put(endLoading());
    yield put(clearLoadingError());
  } catch (error) {
    yield put(endLoading());
    yield put(loadingError(error.message || error));
  }
}
