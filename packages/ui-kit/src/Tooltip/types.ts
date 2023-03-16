import type { Placement } from '@floating-ui/react';

export interface TooltipOptions {
  offset?: number;
  placement?: Placement;
}

export interface TooltipSettings {
  size?: 'default' | 'bigger';
  children: React.ReactNode;
}

export interface TooltopTriggerOptions {
  asChild?: boolean;
}
