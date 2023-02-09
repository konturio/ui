import type { MutableRefObject } from 'react';
import type { TooltipCoords } from '../types';

export const isPosition = (data: unknown): data is TooltipCoords =>
  data !== null && !!(data as TooltipCoords).x && !!(data as TooltipCoords).y;

export const isTargetRef = (data: unknown): data is MutableRefObject<any> =>
  data !== null &&
  !!(data as MutableRefObject<any>).current &&
  (data as MutableRefObject<any>).current instanceof HTMLElement;
