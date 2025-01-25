import * as React from 'react';
import { TooltipProvider } from './hooks/useTolltipContext';
import { useTooltip } from './hooks/useTooltip';
import { TooltipContent } from './TooltipContent';
import { TooltipTrigger } from './TooltipTrigger';
import type { TooltipSettings, ControlledProps } from './types';

export function SimpleTooltip({
  children,
  content,
  ...options
}: {
  children: React.ReactNode;
  content: React.ReactNode;
} & TooltipSettings &
  ControlledProps) {
  const arrowRef = React.useRef<SVGSVGElement>(null);
  const context = useTooltip(options, arrowRef);

  return (
    <TooltipProvider context={context} arrowRef={arrowRef} size={options.size}>
      <TooltipTrigger asChild>{children}</TooltipTrigger>
      {context.open && <TooltipContent>{content}</TooltipContent>}
    </TooltipProvider>
  );
}
