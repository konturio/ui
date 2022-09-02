import { useCallback, useState } from 'react';
import { DropdownTrigger } from '../Dropdown';
import { Menu, MenuItem, MenuList } from '../MenuButton';
import { Timeline } from './Timeline';
import type { TimelineProps, TimelineEntry } from './Timeline';

type WithRequiredProperty<Type, Key extends keyof Type> = Type & {
  [Property in Key]-?: Type[Property];
};

export function TimeLineWithDropDown(props: WithRequiredProperty<TimelineProps, 'onSelect'>) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [menuItems, setMenuItems] = useState<TimelineEntry[]>([]);
  const [eventTargetElement, setEventTargetElement] = useState<EventTarget | null>(null);

  const { onSelect: originalOnSelect } = props;
  const onSelect = useCallback(
    (items: TimelineEntry[], event: PointerEvent) => {
      console.log("🚀 ~ file: TimeLineWithDropDown.tsx ~ line 19 ~ TimeLineWithDropDown ~ event", event)
      if (items.length < 2) {
        originalOnSelect(items, event);
      } else {
        setMenuItems(items);
        setIsExpanded(true);
        setEventTargetElement(event.target);
      }
    },
    [originalOnSelect],
  );

  const onDropdownClose = useCallback(() => {
    setIsExpanded(false);
  }, []);

  // return (
  //   <div>
  //     <div>
  //       <Menu>
  //         <DropdownTrigger isExpanded={isExpanded} onDropdownClose={onDropdownClose} />
  //         <MenuList>
  //           {menuItems.map((item) => (
  //             <MenuItem key={item.id} onSelect={() => originalOnSelect([item])}>
  //               {item.id}
  //             </MenuItem>
  //           ))}
  //         </MenuList>
  //       </Menu>
  //     </div>
  //     <Timeline {...props} onSelect={onSelect} />
  //   </div>
  // );

  return (
    <div>
      <Menu>
        <DropdownTrigger eventTargetElement={eventTargetElement} isExpanded={isExpanded} onDropdownClose={onDropdownClose}>
        </DropdownTrigger>
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
