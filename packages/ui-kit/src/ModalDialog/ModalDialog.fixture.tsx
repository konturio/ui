import { Button } from '../Button';
import { ModalDialog } from '.';

const content = <div style={{ backgroundColor: 'white', padding: '3em' }}>Hello world</div>;

export default {
  Default: (
    <ModalDialog
      title={'Some title'}
      onClose={() => console.debug('Close')}
      footer={
        <div
          style={{
            display: 'flex',
            flexFlow: 'row nowrap',
            gap: 'var(--unit)',
            justifyContent: 'flex-end',
          }}
        >
          <Button type="reset" variant="invert-outline">
            Cancel
          </Button>
          <Button type="submit">Save</Button>
        </div>
      }
    >
      <form>{content}</form>
    </ModalDialog>
  ),
};
