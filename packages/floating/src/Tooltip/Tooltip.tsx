import * as React from 'react';
import { useTooltip } from './hooks/useTooltip';
import { TooltipProvider } from './hooks/useTolltipContext';
import type { ControlledProps, TooltipSettings } from './types';

export function Tooltip({ children, ...options }: { children: React.ReactNode } & TooltipSettings & ControlledProps) {
  const arrowRef = React.useRef<SVGSVGElement>(null);
  const context = useTooltip(options, arrowRef);

  return (
    <TooltipProvider context={context} arrowRef={arrowRef} size={options.size}>
      {children}
    </TooltipProvider>
  );
}
