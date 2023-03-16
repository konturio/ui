import { createContext } from '../../utils/helpers/context';
import type * as React from 'react';
import type { useTooltip } from './useTooltip';

type ContextType = {
  context: ReturnType<typeof useTooltip>;
  arrowRef: React.RefObject<SVGSVGElement>;
};

export const [TooltipProvider, useTooltipContext] = createContext<ContextType>('Tooltip');
