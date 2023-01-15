import { createRoot } from 'react-dom/client';
import { flushSync } from 'react-dom';
import { getDefaultOptions } from './defaultOptions';
import type { TimelineOptions as VisTimelineOptions } from 'vis-timeline';
import type { TimelineOptions } from '../../types';

export const toVisTimelineOptions = (options: TimelineOptions): VisTimelineOptions => {
  const timelineOptions: VisTimelineOptions = {
    ...getDefaultOptions(),
    stack: options.stack,
  };

  if (options.cluster) {
    timelineOptions.cluster = options.cluster;
    if (timelineOptions.cluster.titleTemplate === undefined) {
      timelineOptions.cluster.titleTemplate = '';
      // https://github.com/visjs/vis-timeline/issues/1543
      // @ts-expect-error - this property added by patch package
      timelineOptions.cluster.contentTemplate = () => '';
    }
  }

  const { timelineEntryComponent: TimelineEntryComponent } = options;
  if (TimelineEntryComponent) {
    timelineOptions.template = (item: unknown, el: Element, data: any) => {
      const wrapper = document.createElement('div');
      const root = createRoot(wrapper);

      flushSync(() => {
        root.render(<TimelineEntryComponent {...data} isSelected={false} />);
      });

      return wrapper;
    };
  }

  const { tooltipComponent: TooltipComponent } = options;
  if (TooltipComponent) {
    timelineOptions.tooltip = {
      // TODO fix types in library
      // @ts-expect-error error in typings of library, template can return Element
      template: (originalItemData, parsedItemData) => {
        const wrapper = document.createElement('div');
        const root = createRoot(wrapper);

        flushSync(() => {
          root.render(<TooltipComponent {...originalItemData} />);
        });

        return wrapper;
      },
    };
  }

  if (typeof options.margin !== 'undefined') {
    timelineOptions.margin = options.margin;
  }

  return timelineOptions;
};
