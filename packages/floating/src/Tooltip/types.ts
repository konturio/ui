import type { Placement } from '@floating-ui/react';

export interface TooltipSettings {
  size?: 'default' | 'bigger';
  offset?: number;
  placement?: Placement;
}

export interface TooltopTriggerOptions {
  asChild?: boolean;
}
