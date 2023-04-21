import { useEffect, useState } from 'react';
import { ServiceTooltip } from '../ServiceTooltip';
import { FloatingContextProvider } from './FloatingContext';
import type * as Floating from '../../Tooltip/TooltipService';

export type FloatingProviderProps = {
  children: React.ReactNode;
  tooltipService: Floating.TooltipService;
};

const mapTooltip = (tooltip: Floating.Tooltip) => tooltip.props;

export function FloatingProvider({ children, tooltipService }: FloatingProviderProps) {
  const [tooltips, setTooltips] = useState(() =>
    tooltipService ? tooltipService.overlays.map(mapTooltip) : ([] as Floating.TooltipProps[]),
  );

  useEffect(() => {
    if (!tooltipService) {
      return;
    }

    const updateTooltips = (tooltips: Floating.Tooltip[]) => {
      setTooltips(tooltips.map(mapTooltip));
    };

    const unsubscribe = tooltipService.subscribe(updateTooltips);

    return () => {
      unsubscribe();
    };
  }, [tooltipService]);

  return (
    <FloatingContextProvider tooltipService={tooltipService}>
      {children}
      {tooltips.map((tooltip) => {
        if (tooltip.isOpen === false) return null;
        return (
          <ServiceTooltip
            key={tooltip.key}
            position={getRef(tooltip.position)}
            content={tooltip.content}
            settings={tooltip.settings}
          />
        );
      })}
    </FloatingContextProvider>
  );
}

const getRef = (position: Floating.Position | Element): Element => {
  if (position instanceof Element) return position;

  const { x, y } = position;
  return {
    getBoundingClientRect() {
      return { width: 0, height: 0, x, y, top: y, left: x, right: x, bottom: y };
    },
  } as Element;
};
