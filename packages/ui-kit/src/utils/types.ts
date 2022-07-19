import React from 'react';

export type AssignableRef<ValueType> =
  | ((instance: ValueType | null) => void)
  | React.MutableRefObject<ValueType | null>;
