import type { PlacementFn, TooltipProps, TooltipPlacement } from '../types';
import type { Placement } from '@floating-ui/react-dom';

export type MouseClickEvent = React.MouseEvent<HTMLDivElement, MouseEvent>;

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
  position?: TooltipProps['position'],
): Placement | undefined {
  if (deprecadedPlacement && placement)
    console.error(
      'You should not use both placement and deprecadedPlacement props at the same time. Placement prop will be used.',
    );

  if (placement) return placement;

  if (position) {
    if (typeof deprecadedPlacement === 'function') {
      return mapPlacement(deprecadedPlacement(position));
    } else if (deprecadedPlacement) return mapPlacement(deprecadedPlacement);
  }

  return;
}
