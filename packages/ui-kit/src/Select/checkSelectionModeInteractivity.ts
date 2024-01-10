import { SELECTION_NODES, type SelectMode } from './types';

export function checkSelectionModeInteractivity(selectMode: SelectMode) {
  return (
    selectMode === SELECTION_NODES.SINGLE ||
    selectMode === SELECTION_NODES.MULTI_AGGREGATED_STRING ||
    selectMode === SELECTION_NODES.MULTI_CHIPS
  );
}
