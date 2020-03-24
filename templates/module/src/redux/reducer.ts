import produce from 'immer';
import {
  I{{moduleName}}State,
  T{{moduleName}}ActionTypes,
  SOME_ACTION,
} from './types';

const initialState: I{{moduleName}}State = {
  foo: false,
  bar: null,
};

export const reducer = (state = initialState, action: T{{moduleName}}ActionTypes): I{{moduleName}}State => {
  return produce(state || {}, (draft: I{{moduleName}}State) => {
    switch (action.type) {
      case SOME_ACTION: {
        draft.foo = action.payload;
        break;
      }

      default: {
        // do nothing
      }
    }
  });
};
