import type { TooltipSettings } from '../types';

export interface Position {
  x: number;
  y: number;
}

export type TooltipProps =
  | { key: string; isOpen: true; settings: TooltipSettings; position: Position; content: string }
  | { key: string; isOpen: true; settings: TooltipSettings; position: Element; content: string }
  | { key: string; isOpen: false; settings: TooltipSettings; position: null; content: null };
