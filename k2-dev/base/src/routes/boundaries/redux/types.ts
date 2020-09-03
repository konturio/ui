export interface AppState {
  layers: any[];
  position: [number, number] | null;
  boundaries: GeoJSON.FeatureCollection[] | null;
  markers: marker[];
  sources: {};
}

export type marker = { coordinates: [number, number]; el: JSX.Element; id: string };

export const appStateField = 'appState';