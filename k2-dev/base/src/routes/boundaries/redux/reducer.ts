import { createReducer } from 'redux-act';
import produce from 'immer';
import { AppState } from './types';

import { setFoo } from './actions';

const initialState: AppState = {
  foo: 'Nothing',
};

export const reducer = createReducer<AppState>({}, initialState);

reducer.on(setFoo, (state, payload) =>
  produce(state, (draft) => {
    draft.foo = payload;
  }),
);
