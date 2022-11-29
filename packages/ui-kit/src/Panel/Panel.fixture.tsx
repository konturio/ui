import { useState } from 'react';
import { Panel } from '.';
import type { ShortStateListenersType } from '.';

export default function Fixture() {
  const [isOpen, setIsOpen] = useState(false)
  const [isShortStateOpen, setIsShortStateOpen] = useState(false)

  const shortStateListeners: ShortStateListenersType = {
    onClose: () => {
      setIsOpen(false)
      setIsShortStateOpen(false)
    },
    onFullStateOpen: () => {
      setIsOpen(true)
      setIsShortStateOpen(false)
    },
    onShortStateOpen: () => {
      setIsOpen(true)
      setIsShortStateOpen(true)
    },
  }

  return (
    <div style={{ display: 'flex', gap: '1em', flexDirection: 'row', flexWrap: 'wrap', paddingBottom: '40px' }}>

      <Panel
        header={
          <div style={{ fontSize: '1.2em', whiteSpace: 'pre' }}>
            Custom title
          </div>}
        onHeaderClick={console.log}
      >
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

      <Panel header="Resizable panel" resize='vertical' minContentHeight={200}>
        <div style={{ display: 'flex', margin: 'auto' }}>
          <div style={{ margin: 'auto', padding: '2em' }}>Content</div>
        </div>
      </Panel>

      <Panel header="With short state" resize='vertical' minContentHeight={60}

        isOpen={isOpen}

        shortStateContent={
          <div style={{ margin: 'auto', padding: '2em' }}>Short state</div>
        }
        isShortStateOpen={isShortStateOpen}
        shortStateListeners={shortStateListeners}
        style={{ width: '200px' }}

      >
        <div style={{ display: 'flex', margin: 'auto' }}>
          <div style={{ margin: 'auto', padding: '2em' }}>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Soluta mollitia aut dignissimos dolorem doloremque eos unde eveniet veritatis modi in et dolor, quia expedita sequi eius, optio animi, sunt blanditiis!
            <br />
          </div>
        </div>
      </Panel>
    </div>
  );

}