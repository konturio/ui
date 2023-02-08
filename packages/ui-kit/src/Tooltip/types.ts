export type TooltipCoords = { x: number; y: number };
export type PlacementFn = (coords: TooltipCoords) => TooltipPlacement;
export type TooltipPlacement = 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
