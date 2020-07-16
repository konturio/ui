import { createReducer } from 'redux-act';
import produce from 'immer';
import { AppState } from './types';

import { setSource, setBoundaries, setPosition, setMarker, removeMarker } from './actions';
import { createGeoJSONSource } from './helpers';

const initialState: AppState = {
  layers: [
    {
      id: 'hovered-boundaries-layer',
      type: 'line' as const,
      source: 'hovered-boundaries',
      paint: {
        'line-color': 'red',
        'line-width': 2,
      },
    },
    {
      id: 'selected-boundaries-layer',
      type: 'fill' as const,
      source: 'selected-boundaries',
      paint: {
        'fill-color': 'red',
        'fill-opacity': 0.3,
      },
    },
  ],
  boundaries: null,
  position: null,
  markers: [],
  sources: {
    'hovered-boundaries': createGeoJSONSource(),
    'selected-boundaries': createGeoJSONSource(),
  },
};

export const reducer = createReducer<AppState>({}, initialState);

reducer.on(setSource, (state, { id, ...data }) =>
  produce(state, (draft) => {
    draft.sources[id] = data;
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

reducer.on(setMarker, (state, payload) =>
  produce(state, (draft) => {
    draft.markers = [payload];
  }),
);

reducer.on(removeMarker, (state, payload) =>
  produce(state, (draft) => {
    draft.markers = draft.markers.filter((marker) => marker.id !== payload);
  }),
);
