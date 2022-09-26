import ReactDOM from 'react-dom';
import type { TimelineOptions as VisTimelineOptions } from 'vis-timeline';
import type { TimelineOptions } from '../types';

export const toVisTimelineOptions = (options: TimelineOptions): VisTimelineOptions => {
  const timelineOptions: VisTimelineOptions = {
    stack: options.stack,
  };

  if (options.cluster) {
    timelineOptions.cluster = options.cluster === true ? {} : options.cluster;
  }

  const { timelineEntryComponent: createTimelineEntryComponent } = options;
  if (createTimelineEntryComponent) {
    // TODO fix types in library
    // @ts-expect-error error in typings of library
    timelineOptions.template = (item: unknown, el: Element, data) => {
      const component = createTimelineEntryComponent(data);
      if (component === null) {
        return el;
      }
      const wrapper = document.createElement('div');
      ReactDOM.render(component, wrapper);
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
        ReactDOM.render(createTooltipComponent({ originalItemData, parsedItemData }), wrapper);
        return wrapper;
      },
    };
  }

  return timelineOptions;
};
