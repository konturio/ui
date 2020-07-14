import { takeLatest } from 'redux-saga/effects';
import { BoundariesPlugin } from '@k2-packages/boundaries';
import { setupPlugin } from '@k2-packages/plugin';
import Client from '@k2-packages/client';
import { setPosition, setBoundaries } from '../actions';

const client = new Client('https://test-api02.konturlabs.com');

// function* boundariesSelection({ payload }: ReturnType<typeof setPosition>) {
//   while (true) {
//     yield fork(showLoadingSpinner);
//     const { payload: boundaries } = take(setBoundaries.getType());
//     yield spawn(showBoundariesOnMap);
//     yield fork(promptUserChoiceBoundaries);
//     const { payload: selected } = yield take(setSelectedBoundary.getType());
//     console.log(selected);
//   }
// }

export function* rootSaga() {
  yield setupPlugin(new BoundariesPlugin(client), {
    watch: setPosition,
    put: setBoundaries,
  });

  yield takeLatest(setPosition.getType(), function* (action) {
    console.log(action);
  });
}
