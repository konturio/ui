import { useCallback, useMemo, useState } from 'react';
import { DropdownTriggerRefProvider } from '../Dropdown';
import { Menu, MenuItem, MenuList } from '../MenuButton';
import { Timeline } from './';
import type { TimelineProps, TimelineEntry } from './types';
import type { MutableRefObject } from 'react';

export interface TimeLineWithDropDownProps<T extends TimelineEntry>
  extends Omit<TimelineProps<T>, 'onSelect' | 'cluster'> {
  // "onSelect" does not contain an event because of a cluster that has action from the menu instead of the timeline
  onSelect: (item: TimelineEntry[]) => void;
}

export function TimeLineWithDropDown<T extends TimelineEntry>(props: TimeLineWithDropDownProps<T>) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [menuItems, setMenuItems] = useState<TimelineEntry[]>([]);
  const [eventTargetElement, setEventTargetElement] = useState<MutableRefObject<EventTarget | null>>({ current: null });

  const { onSelect: originalOnSelect } = props;
  const timelineProps = useMemo(
    () => ({
      ...props,
      cluster: {
        // in conflicts with menu
        fitOnDoubleClick: false,
      },
    }),
    [props],
  );
  const onSelect = useCallback(
    (items: TimelineEntry[], event: PointerEvent) => {
      if (items.length < 2) {
        originalOnSelect(items);
      } else {
        setMenuItems(items);
        setIsExpanded(true);
        setEventTargetElement({ current: event.target });
      }
    },
    [originalOnSelect],
  );

  const onDropdownClose = useCallback(() => {
    setIsExpanded(false);
  }, []);

  return (
    <div>
      <Menu>
        <DropdownTriggerRefProvider
          triggerRef={eventTargetElement}
          isExpanded={isExpanded}
          onDropdownClose={onDropdownClose}
        />
        <MenuList>
          {menuItems.map((item) => (
            <MenuItem key={item.id} onSelect={() => originalOnSelect([item])}>
              {item.id}
            </MenuItem>
          ))}
        </MenuList>
      </Menu>
      <Timeline {...timelineProps} onSelect={onSelect} />
    </div>
  );
}
