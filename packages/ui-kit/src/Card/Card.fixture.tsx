import { Card } from '.';

export default (
  <>
    <Card>
      <div style={{ height: '400px', display: 'flex', margin: 'auto' }}>
        <div style={{ margin: 'auto', padding: '1em' }}>Content</div>
      </div>
    </Card>
    <div>
      <Card inline>
        <div style={{ display: 'flex', margin: 'auto' }}>
          <div style={{ margin: 'auto', padding: '1em' }}>Content</div>
        </div>
      </Card>
    </div>
  </>
);
