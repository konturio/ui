import { createRoot } from 'react-dom/client';

import type { TimelineOptions as VisTimelineOptions } from 'vis-timeline';
import type { TimelineOptions } from '../types';

export const toVisTimelineOptions = (options: TimelineOptions): VisTimelineOptions => {
  const timelineOptions: VisTimelineOptions = {
    stack: options.stack,
  };

  if (options.cluster) {
    timelineOptions.cluster = options.cluster === true ? {} : options.cluster;
  }

  const { timelineEntryComponent: TimelineEntryComponent} = options;
  if (TimelineEntryComponent) {
    // TODO fix types in library
    timelineOptions.template = (item: unknown, el: Element, data) => {
      const wrapper = document.createElement('div');
      const root = createRoot(wrapper);
      root.render(<TimelineEntryComponent {...data} />);
      return wrapper;
    };
  }

  const { tooltipComponent: createTooltipComponent } = options;
  if (createTooltipComponent) {
    timelineOptions.tooltip = {
      // TODO fix types in library
      // @ts-expect-error error in typings of library, template can return Element
      template: (originalItemData, parsedItemData) => {
        const wrapper = document.createElement('div');
        const root = createRoot(wrapper);
        root.render(createTooltipComponent({ originalItemData, parsedItemData }));
        return wrapper;
      },
    };
  }

  return timelineOptions;
};