export type SelectItemType = {
  title: string;
  value: string | number;
  disabled?: boolean;
  hasDivider?: boolean;
};

export const MULTISELECT_TYPE_AGGREGATE = 'aggregate';
export const MULTISELECT_TYPE_CHIPS = 'chips';

export type MultiselectType = boolean | typeof MULTISELECT_TYPE_AGGREGATE | typeof MULTISELECT_TYPE_CHIPS;
