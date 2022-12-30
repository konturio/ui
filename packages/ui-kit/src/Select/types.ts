export type SelectItemType = {
  title: string;
  value: string | number;
  disabled?: boolean;
  hasDivider?: boolean;
};

export type MultiSelectProp = undefined | boolean | 'aggregate' | 'chips';

export const SELECTION_NODES = {
  SINGLE: 'single_selection_mode',
  MULTI_AGGREGATED_STRING: 'multi_selection_aggregated_string',
  MULTI_CHIPS: 'multi_selection_chips',
  MULTI_AGGREGATED_CHIPS: 'multi_selection_aggregated_chips',
} as const;

export type SelectMode = typeof SELECTION_NODES[keyof typeof SELECTION_NODES];

export function getSelectMode(multiSelectProp: MultiSelectProp): SelectMode {
  switch (multiSelectProp) {
    case undefined:
    case false:
      return SELECTION_NODES.SINGLE;
    case true:
      return SELECTION_NODES.MULTI_AGGREGATED_STRING;
    case 'aggregate':
      return SELECTION_NODES.MULTI_AGGREGATED_CHIPS;
    case 'chips':
      return SELECTION_NODES.MULTI_CHIPS;
  }
}
