import { Divider } from './index';
import { Panel } from '../Panel';
import { CallIcon } from '@konturio/default-icons';

export default (
  <div style={{ display: 'flex', flexDirection: 'column', gap: 16, width: '100%', maxWidth: '800px' }}>
    <Panel style={{ padding: 8 }}>
      <h3>Without parameters</h3>
      Content top
      <Divider />
      Content bottom
    </Panel>
    <Panel style={{ padding: 8 }}>
      <h3>Horizontal</h3>
      Content top
      <Divider type="horizontal" />
      <br />
      <Divider type="horizontal">Horizontal title</Divider>
      <br />
      <Divider type="horizontal">
        <CallIcon />
        &nbsp;&nbsp;Horizontal title with icon
      </Divider>
      Content bottom
    </Panel>
    <Panel style={{ padding: 8 }}>
      <h3>Vertical</h3>
      <div style={{ display: 'flex', flexDirection: 'row' }}>
        <div style={{ width: '30%', height: 200, position: 'relative' }}>
          <Divider type="vertical" />
        </div>
        <div style={{ width: '30%', height: 200, position: 'relative' }}>
          <Divider type="vertical">Vertical title</Divider>
        </div>
        <div style={{ width: '30%', height: 200, position: 'relative' }}>
          <Divider type="vertical">&nbsp;</Divider>
        </div>
      </div>
    </Panel>
  </div>
);
