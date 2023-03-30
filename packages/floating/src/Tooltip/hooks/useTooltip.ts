import * as React from 'react';
import {
  useFloating,
  autoUpdate,
  offset,
  flip,
  arrow,
  shift,
  useHover,
  useRole,
  useInteractions,
} from '@floating-ui/react';
import type { TooltipSettings } from '../types';

const ARROW_HEIGHT = 8;

export function useTooltip(
  { placement = 'bottom', offset: offsetValue = 0 }: TooltipSettings = {},
  arrowRef: React.RefObject<SVGSVGElement>,
) {
  const [open, setOpen] = React.useState(false);

  const data = useFloating({
    placement,
    open,
    onOpenChange: setOpen,
    whileElementsMounted: autoUpdate,
    middleware: [
      offset(offsetValue + ARROW_HEIGHT),
      flip({ fallbackAxisSideDirection: 'start' }),
      shift({ padding: 5 }),
      arrow({ element: arrowRef }),
    ],
  });

  const context = data.context;

  const hover = useHover(context);
  const role = useRole(context, { role: 'tooltip' });

  const interactions = useInteractions([hover, role]);

  return React.useMemo(
    () => ({
      open,
      setOpen,
      ...interactions,
      ...data,
    }),
    [open, setOpen, interactions, data],
  );
}
