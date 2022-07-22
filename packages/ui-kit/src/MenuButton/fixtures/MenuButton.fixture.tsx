import { Menu, MenuButton } from '../index';
import { MenuItem, MenuList } from '../components';
import { Button } from '../../Button';
import { Divider } from '../../Divider';

const menuAction = (action: string) => {
  return () => {
    console.log(`menuAction: ${action}`);
  };
};

export default {
  Base: (
    <div>
      <Menu>
        <MenuButton id="actions-button">
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
      <MenuButton as={Button} size="small" id="actions-button">
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
  WithDivider: (
    <Menu>
      <MenuButton as={Button} size="small" id="actions-button">
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
      <MenuButton as={Button} size="small" id="actions-button">
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
