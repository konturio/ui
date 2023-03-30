import { createContext } from '@konturio/ui-kit/src/utils/helpers/context';
import type * as React from 'react';
import type { TooltipSettings } from '../types';
import type { useTooltip } from './useTooltip';

type ContextType = {
  context: ReturnType<typeof useTooltip>;
  arrowRef: React.RefObject<SVGSVGElement>;
  size: TooltipSettings['size'];
};

export const [TooltipProvider, useTooltipContext] = createContext<ContextType>('Tooltip');
