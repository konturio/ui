import type { Placement } from '@floating-ui/react';

export interface TooltipSettings {
  size?: 'default' | 'bigger';
  offset?: number;
  placement?: Placement;
}

export interface TooltopTriggerOptions {
  asChild?: boolean;
}

export type ControlledProps = {
  initialOpen?: boolean;
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
};
