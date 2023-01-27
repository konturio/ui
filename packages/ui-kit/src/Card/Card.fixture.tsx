import { Card } from '.';

const style = `
.card-fixture-wrapper {
  margin: 16px
}`;

export default (
  <div>
    <style>{style}</style>
    <Card className="card-fixture-wrapper" inline>
      <div style={{ display: 'flex', margin: 'auto' }}>
        <div style={{ margin: 'auto', padding: '1em' }}>Content</div>
      </div>
    </Card>
    <Card inline>
      <div style={{ display: 'flex', margin: 'auto' }}>
        <div style={{ margin: 'auto', padding: '1em' }}>Content</div>
      </div>
    </Card>
  </div>
);
