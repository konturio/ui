export interface AppState {
  foo: string;
  position: [number, number] | null;
  boundaries: GeoJSON.FeatureCollection[] | null;
}

export const appStateField = 'appState';
