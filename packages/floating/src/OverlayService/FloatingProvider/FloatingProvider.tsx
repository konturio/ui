import { useEffect, useState } from 'react';
import { ServiceTooltip } from '../ServiceTooltip';
import { FloatingContextProvider } from './FloatingContext';
import type * as Floating from '../../Tooltip/TooltipService';

export type FloatingProviderProps = {
  children: React.ReactNode;
  tooltipService: Floating.TooltipService;
};

export const FloatingProvider = ({ children, tooltipService }: FloatingProviderProps) => {
  const [tooltips, setOverlays] = useState<Floating.Tooltip[]>(() =>
    tooltipService ? tooltipService.overlays : ([] as Floating.Tooltip[]),
  );

  useEffect(() => {
    if (!tooltipService) {
      return;
    }

    const updateTooltips = (tooltips: Floating.Tooltip[]) => {
      setOverlays(tooltips);
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
        if (tooltip.props.isOpen === false) return null;
        return (
          <ServiceTooltip
            key={tooltip.key}
            position={getRef(tooltip.props.position)}
            content={tooltip.props.content}
            settings={tooltip.props.settings}
          />
        );
      })}
    </FloatingContextProvider>
  );
};

const getRef = (position: Floating.Position | Element): Element => {
  if (position instanceof Element) return position;

  const { x, y } = position;
  return {
    getBoundingClientRect() {
      return { width: 0, height: 0, x, y, top: y, left: x, right: x, bottom: y };
    },
  } as Element;
};
