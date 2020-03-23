import { reducer } from './reducer';
import { rootSaga } from './saga';
import { geocoderStateField } from './types';

export default function geocoderModule() {
  return {
    // Unique id of the module
    id: 'geocoder',
    // Maps the Store key to the reducer
    reducerMap: {
      [geocoderStateField]: reducer,
    },
    // to run sagas for the module
    sagas: [rootSaga],
  };
}
