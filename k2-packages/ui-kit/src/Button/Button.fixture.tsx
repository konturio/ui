import { Button } from '.';

export default {
  regular: (
    <div style={{ margin: '1em', gap: '1em', display: 'flex', flexFlow: 'row nowrap' }}>
      <Button onClick={console.log}> Map button </Button>
      <Button onClick={console.log} disabled>
        Disabled
      </Button>
      <Button onClick={console.log} active>
        Active
      </Button>
    </div>
  ),
  'invert-outline': (
    <div
      style={{
        margin: '1em',
        gap: '1em',
        display: 'flex',
        flexFlow: 'row nowrap',
        backgroundColor: 'var(--invert-surface-regular)',
        padding: '2em',
      }}
    >
      <Button onClick={console.log} variant="invert-outline">
        Invert Outline
      </Button>
      <Button onClick={console.log} variant="invert-outline" disabled>
        Invert Outline Disabled
      </Button>
      <Button onClick={console.log} variant="invert-outline" active>
        Active
      </Button>
    </div>
  ),
};
