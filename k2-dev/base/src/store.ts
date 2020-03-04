import { createStore, IModuleStore } from 'redux-dynamic-modules';
import { getSagaExtension } from 'redux-dynamic-modules-saga';

interface IState {

}

const store: IModuleStore<IState> = createStore({
  initialState: { /** initial state */ },
  enhancers: [ /** enhancers to include */ ], 
  extensions: [ getSagaExtension() ]
});

export default store;