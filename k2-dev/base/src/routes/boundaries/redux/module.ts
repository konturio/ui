import { reducer } from './reducer';
import { rootSaga } from './saga';
import { appStateField } from './types';

export default function appModule() {
  return {
    // Unique id of the module
    id: 'map',
    // Maps the Store key to the reducer
    reducerMap: {
      [appStateField]: reducer,
    },
    // to run sagas for the module
    sagas: [rootSaga],
  };
}
