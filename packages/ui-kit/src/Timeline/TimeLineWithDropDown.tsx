import { useCallback, useState } from 'react';
import { DropdownTriggerRefProvider } from '../Dropdown';
import { Menu, MenuItem, MenuList } from '../MenuButton';
import { Timeline } from './Timeline';
import type { TimelineProps, TimelineEntry } from './Timeline';
import type { MutableRefObject } from 'react';

export interface TimeLineWithDropDownProps extends Omit<TimelineProps, 'onSelect'> {
  // "onSelect" does not contain an event because of a cluster that has action from the menu instead of the timeline
  onSelect: (item: TimelineEntry[]) => void;
}

export function TimeLineWithDropDown(props: TimeLineWithDropDownProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [menuItems, setMenuItems] = useState<TimelineEntry[]>([]);
  const [eventTargetElement, setEventTargetElement] = useState<MutableRefObject<EventTarget | null>>({ current: null });

  const { onSelect: originalOnSelect } = props;
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
      <Timeline {...props} onSelect={onSelect} />
    </div>
  );
}
