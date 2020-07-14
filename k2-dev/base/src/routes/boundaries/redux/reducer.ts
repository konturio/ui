import { createReducer } from 'redux-act';
import produce from 'immer';
import { AppState } from './types';

import { setFoo, setBoundaries, setPosition } from './actions';

const initialState: AppState = {
  foo: 'Nothing',
  boundaries: null,
  position: null,
};

export const reducer = createReducer<AppState>({}, initialState);

reducer.on(setFoo, (state, payload) =>
  produce(state, (draft) => {
    draft.foo = payload;
  }),
);

reducer.on(setBoundaries, (state, payload) =>
  produce(state, (draft) => {
    draft.boundaries = payload;
  }),
);

reducer.on(setPosition, (state, payload) =>
  produce(state, (draft) => {
    draft.position = payload;
  }),
);
