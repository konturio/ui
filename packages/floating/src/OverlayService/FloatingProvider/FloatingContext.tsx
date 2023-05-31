import { createContext } from '../../utils/helpers/context';
import type * as Floating from '../../Tooltip/TooltipService';

type ContextType = {
  tooltipService: Floating.TooltipService;
};

export const [FloatingContextProvider, useFloatingContext] = createContext<ContextType>('FloatingContext');
