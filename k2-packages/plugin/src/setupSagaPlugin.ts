import { put, take, spawn } from 'redux-saga/effects';

export function* setupPlugin(plugin, { watch: startAction, put: doneAction }) {
  yield spawn(function* () {
    while (true) {
      const action = yield take(startAction);
      const result = yield plugin.start(action);
      yield put(doneAction(result));
    }
  });
}
