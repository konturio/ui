import { createStore, IModuleStore } from 'redux-dynamic-modules';
import { getSagaExtension } from 'redux-dynamic-modules-saga';

const store: IModuleStore<{}> = createStore({
  initialState: {
    /** initial state */
  },
  enhancers: [
    /** enhancers to include */
  ],
  extensions: [getSagaExtension()],
});

export default store;
