import type { TooltipSettings } from '../types';

export interface Position {
  x: number;
  y: number;
}

export type TooltipProps =
  | { isOpen: true; settings: TooltipSettings; position: Position; content: string }
  | { isOpen: true; settings: TooltipSettings; position: Element; content: string }
  | { isOpen: false; settings: TooltipSettings; position: null; content: null };
