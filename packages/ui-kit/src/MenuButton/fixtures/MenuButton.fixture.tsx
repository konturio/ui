import { Menu, MenuButton } from '../index';
import { MenuItem, MenuList } from '../components';
import { Button } from '../../Button';
import { Divider } from '../../Divider';
import { DropdownTrigger, DropdownTriggerRefProvider } from '../../Dropdown';
import type { MutableRefObject } from 'react';
import { useEffect, useRef, useState } from 'react';

const menuAction = (action: string) => {
  return () => {
    console.log(`menuAction: ${action}`);
  };
};

export default {
  Base: (
    <div>
      <Menu>
        <MenuButton>
          Actions{' '}
          <span aria-hidden="true" style={{ userSelect: 'none' }}>
            ▾
          </span>
        </MenuButton>
        <MenuList>
          <MenuItem onSelect={menuAction('Download')}>Download</MenuItem>
          <MenuItem onSelect={menuAction('Copy')}>Create a Copy</MenuItem>
          <MenuItem onSelect={menuAction('Mark as Draft')}>Mark as Draft</MenuItem>
          <MenuItem onSelect={menuAction('Delete')}>Delete</MenuItem>
        </MenuList>
      </Menu>
    </div>
  ),
  WithButton: (
    <Menu>
      <MenuButton as={Button} size="small">
        Actions{' '}
        <span aria-hidden="true" style={{ userSelect: 'none' }}>
          ▾
        </span>
      </MenuButton>
      <MenuList>
        <MenuItem onSelect={menuAction('Download')}>Download</MenuItem>
        <MenuItem onSelect={menuAction('Copy')}>Create a Copy</MenuItem>
        <MenuItem onSelect={menuAction('Mark as Draft')}>Mark as Draft</MenuItem>
        <MenuItem onSelect={menuAction('Delete')}>Delete</MenuItem>
      </MenuList>
    </Menu>
  ),
  ControlledManner: () => {
    const [isExpanded, setIsExpanded] = useState<boolean>(true);

    const onBtnClick = (ev: React.MouseEvent<HTMLButtonElement>) => {
      setIsExpanded(true);
    };

    const onDropdownClose = () => {
      setIsExpanded(false);
    };

    return (
      <>
        {!isExpanded && (
          <button onClick={onBtnClick}>
            trigger <code>setIsExpanded(true)</code>
          </button>
        )}
        <Menu>
          <DropdownTrigger isExpanded={isExpanded} onDropdownClose={onDropdownClose} />
          <MenuList>
            <MenuItem onSelect={menuAction('Download')}>Download</MenuItem>
            <MenuItem onSelect={menuAction('Copy')}>Create a Copy</MenuItem>
            <MenuItem onSelect={menuAction('Mark as Draft')}>Mark as Draft</MenuItem>
            <MenuItem onSelect={menuAction('Delete')}>Delete</MenuItem>
          </MenuList>
        </Menu>
      </>
    );
  },
  ArbitraryPosition: () => {
    const [isExpanded, setIsExpanded] = useState<boolean>(false);

    const onBtnClick = (ev: React.MouseEvent<HTMLButtonElement>) => {
      if (!isExpanded) {
        setIsExpanded(true);
      }
    };

    const onDropdownClose = () => {
      setIsExpanded((curr) => !curr);
    };

    const [targetRef, setTargetRef] = useState<MutableRefObject<HTMLDivElement | null>>();

    const rf = useRef<HTMLDivElement>(null);

    useEffect(() => {
      if (rf.current) {
        setTargetRef(rf);
      }
    }, []);

    return (
      <>
        <div
          ref={rf}
          style={{ position: 'absolute', left: 100 + Math.random() * 500, top: 100 + Math.random() * 500 }}
        ></div>
        <button onClick={onBtnClick}>open</button>
        <Menu>
          {targetRef?.current && (
            <>
              <DropdownTriggerRefProvider
                triggerRef={targetRef}
                isExpanded={isExpanded}
                onDropdownClose={onDropdownClose}
              />
              <MenuList>
                <MenuItem onSelect={menuAction('Download')}>Download</MenuItem>
                <MenuItem onSelect={menuAction('Copy')}>Create a Copy</MenuItem>
                <MenuItem onSelect={menuAction('Mark as Draft')}>Mark as Draft</MenuItem>
                <MenuItem onSelect={menuAction('Delete')}>Delete</MenuItem>
              </MenuList>
            </>
          )}
        </Menu>
      </>
    );
  },
  WithDivider: (
    <Menu>
      <MenuButton as={Button} size="small">
        Actions{' '}
        <span aria-hidden="true" style={{ userSelect: 'none' }}>
          ▾
        </span>
      </MenuButton>
      <MenuList>
        <MenuItem onSelect={menuAction('Download')}>Download</MenuItem>
        <MenuItem onSelect={menuAction('Copy')}>Create a Copy</MenuItem>
        <Divider style={{ margin: '4px 0' }} />
        <MenuItem onSelect={menuAction('Mark as Draft')}>Mark as Draft</MenuItem>
        <MenuItem onSelect={menuAction('Delete')}>Delete</MenuItem>
      </MenuList>
    </Menu>
  ),
  WithDisabled: (
    <Menu>
      <MenuButton as={Button} size="small">
        Actions{' '}
        <span aria-hidden="true" style={{ userSelect: 'none' }}>
          ▾
        </span>
      </MenuButton>
      <MenuList>
        <MenuItem disabled onSelect={menuAction('Disabled Item 1')}>
          Disabled Item 1
        </MenuItem>
        <MenuItem onSelect={menuAction('Copy')}>Create a Copy</MenuItem>
        <Divider style={{ margin: '4px 0' }} />
        <MenuItem disabled onSelect={menuAction('Disabled Item 2')}>
          Disabled Item 2
        </MenuItem>
        <MenuItem onSelect={menuAction('Delete')}>Delete</MenuItem>
      </MenuList>
    </Menu>
  ),
};
