import { reducer } from './reducer';
import { rootSaga } from './saga';
import { {{moduleName}}StateField } from './types';

export default function {{moduleName}}Module() {
  return {
    // Unique id of the module
    id: '{{moduleName}}',
    // Maps the Store key to the reducer
    reducerMap: {
      [{{moduleName}}StateField]: reducer,
    },
    // to run sagas for the module
    sagas: [rootSaga],
  };
}
