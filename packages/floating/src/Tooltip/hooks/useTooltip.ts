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
import type { ControlledProps, TooltipSettings } from '../types';

const ARROW_HEIGHT = 8;

export function useTooltip(
  {
    initialOpen = false,
    placement = 'bottom',
    offset: offsetValue = 0,
    open: controlledOpen,
    onOpenChange: setControlledOpen,
  }: TooltipSettings & ControlledProps = {},
  arrowRef: React.RefObject<SVGSVGElement>,
) {
  const [uncontrolledOpen, setUncontrolledOpen] = React.useState(initialOpen);

  const open = controlledOpen ?? uncontrolledOpen;
  const setOpen = setControlledOpen ?? setUncontrolledOpen;

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
