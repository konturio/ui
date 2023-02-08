import type { MutableRefObject } from 'react';
import type { LegacyRef, PropsWithChildren } from 'react';
import type { PlacementFn, TooltipCoords, TooltipPlacement } from '../types';
import type { Placement } from '@floating-ui/react-dom';

export type MouseClickEvent = React.MouseEvent<HTMLDivElement, MouseEvent>;

export type TooltipProps = PropsWithChildren<{
  position?: TooltipCoords | null;
  onClose?: (e: MouseClickEvent) => void;
  transitionRef?: LegacyRef<any>;
  placement?: Placement;
  /** @deprecated please use `plecement instead, `getPlacement` will be removed in future versions */
  getPlacement?: TooltipPlacement | PlacementFn;
  hoverBehavior?: boolean;
  classes?: { popupContent?: string };
  onOuterClick?: (e: MouseClickEvent) => void;
  triggerRef?: MutableRefObject<any>;
  open: boolean;
  onOpenChange?: (open: boolean) => void;
}>;

function mapPlacement(deprecadedPlacement: TooltipPlacement): Placement {
  switch (deprecadedPlacement) {
    case 'top-left':
      return 'top-start';
    case 'top-right':
      return 'top-end';
    case 'bottom-left':
      return 'bottom-start';
    case 'bottom-right':
      return 'bottom-end';
  }
}

export function calculatePlacement(
  deprecadedPlacement?: TooltipPlacement | PlacementFn,
  placement?: Placement,
  position?: TooltipCoords | null,
): Placement | undefined {
  if (!!placement && !!deprecadedPlacement)
    throw new Error('You can not use both `placement` and `getPlacement` props at the same time');

  if (position) {
    if (typeof deprecadedPlacement === 'function') {
      return mapPlacement(deprecadedPlacement(position));
    } else if (deprecadedPlacement) return mapPlacement(deprecadedPlacement);

    if (placement) return placement;
  }

  return;
}
