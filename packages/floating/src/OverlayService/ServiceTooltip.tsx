import { useRef } from 'react';
import { Tooltip, TooltipContent, TooltipTrigger } from '../Tooltip';
import type { TooltipSettings } from '../Tooltip';

export const ServiceTooltip = ({
  position,
  settings,
  content,
}: {
  position: Element;
  settings: TooltipSettings;
  content: string;
}) => {
  const ref = useRef(position as HTMLElement);

  return (
    <Tooltip {...settings} initialOpen>
      <TooltipTrigger ref={ref} />
      <TooltipContent>{content}</TooltipContent>
    </Tooltip>
  );
};
