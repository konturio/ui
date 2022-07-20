import { Menu, MenuButton } from '../index';
import { MenuItem, MenuList } from '../components';

export default function MenuButtonFixture() {
  const menuAction = (action: string) => {
    return () => {
      console.log(`menuAction: ${action}`);
    };
  };

  return (
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
  );
}
