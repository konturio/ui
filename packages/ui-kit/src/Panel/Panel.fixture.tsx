import { Panel } from '.';

export default (
  <div style={{ display: 'flex', gap: '1em', flexDirection: 'row' }}>
    <Panel header={<div style={{ fontSize: '1.2em', whiteSpace: 'pre' }}>Custom title</div>} onHeaderClick={console.log}>
      <div style={{ height: '400px', display: 'flex', margin: 'auto' }}>
        <div style={{ margin: 'auto', padding: '1em' }}>Content</div>
      </div>
    </Panel>
    <Panel
      header="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
      onHeaderClick={console.log}
    >
      <div style={{ height: '400px', display: 'flex', margin: 'auto' }}>
        <div style={{ margin: 'auto', padding: '1em' }}>Content</div>
      </div>
    </Panel>
    <div>
      <Panel header="Without close button">
        <div style={{ display: 'flex', margin: 'auto' }}>
          <div style={{ margin: 'auto', padding: '1em' }}>Content</div>
        </div>
      </Panel>
    </div>
  </div>
);
