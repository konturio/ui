import type { MutableRefObject, PropsWithChildren } from 'react';
import type { Placement } from '@floating-ui/react-dom';

export type TooltipCoords = { x: number; y: number };
export type PlacementFn = (coords: TooltipCoords) => TooltipPlacement;
export type TooltipPlacement = 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';

export type MouseClickEvent = React.MouseEvent<HTMLDivElement, MouseEvent>;

export type TooltipProps = PropsWithChildren<{
  anchor: TooltipCoords | MutableRefObject<any> | null;
  onClose?: (e: MouseClickEvent) => void;
  offset?: number;
  placement?: Placement;
  /** @deprecated please use `placement instead, `getPlacement` will be removed in future versions */
  getPlacement?: TooltipPlacement | PlacementFn;
  hoverBehavior?: boolean;
  classes?: { popupContent?: string };
  onOuterClick?: (e: MouseClickEvent) => void;
  open: boolean;
}>;
