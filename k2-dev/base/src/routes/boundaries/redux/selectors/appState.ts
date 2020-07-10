import { AppState, appStateField } from '../types';

export function selectAppState(state): AppState {
  return state[appStateField] || {};
}
