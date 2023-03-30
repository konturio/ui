import { useMemo } from 'react';
import { useFloatingContext } from './FloatingProvider/FloatingContext';
import type { TooltipSettings } from '../Tooltip';
import type { Tooltip } from '../Tooltip/TooltipService';

export const useTooltip = (settings?: TooltipSettings): Tooltip => {
  const { tooltipService } = useFloatingContext('FloatingContext');

  const { placement, size, offset } = settings || {};

  const tooltip = useMemo(
    () => tooltipService.createTooltip({ placement, size, offset }),
    [tooltipService, placement, size, offset],
  );

  return tooltip;
};
