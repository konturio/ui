import { takeLatest, put } from 'redux-saga/effects';
import { BoundariesSagaPlugin } from '@k2-packages/boundaries';
import Client from '@k2-packages/client';
import { setPosition, setBoundaries, setMarker, showBoundaries, setSource, removeMarker } from '../actions';
import store from '../../../../store';
import { createGeoJSONSource } from '../helpers';

const client = new Client('https://test-api02.konturlabs.com');
type Action<T = any> = { type: string; payload: T };

export function* rootSaga() {
  yield takeLatest(
    setPosition.getType(),
    BoundariesSagaPlugin({
      client,
      dispatch: store.dispatch.bind(store),
      setMarker,
      removeMarker,
      showBoundary: showBoundaries,
      setBoundary: setBoundaries,
    }),
  );

  yield takeLatest(showBoundaries.getType(), function* ({ payload }: Action) {
    yield put(setSource({ id: 'hovered-boundaries', ...createGeoJSONSource(payload) }));
  });

  yield takeLatest(setBoundaries.getType(), function* ({ payload }: Action) {
    yield put(setSource({ id: 'selected-boundaries', ...createGeoJSONSource(payload) }));
    yield put(setSource({ id: 'hovered-boundaries', ...createGeoJSONSource() }));
  });
}
