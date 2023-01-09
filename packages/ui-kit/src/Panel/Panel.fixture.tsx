import {
  ChevronDown24,
  ChevronUp24,
  Disasters24,
  DoubleChevronDown24,
  DoubleChevronUp24,
} from '@konturio/default-icons';
import { useEffect, useState } from 'react';
import { Panel } from '.';
import type { PanelCustomControl } from '.';

export default function Fixture() {
  // This whole thing can be wrapped into custom hook
  const [panelState, setPanelState] = useState<'full' | 'short' | 'closed'>('full');
  const openFullControl: PanelCustomControl = {
    icon: <DoubleChevronDown24 />,
    onWrapperClick: () => setPanelState('full'),
  };
  const openHalfwayControl: PanelCustomControl = {
    icon: <ChevronDown24 />,
    onWrapperClick: () => setPanelState((prevState) => (prevState === 'closed' ? 'short' : 'full')),
  };
  const closeHalfwayControl: PanelCustomControl = {
    icon: <ChevronUp24 />,
    onWrapperClick: () => setPanelState((prevState) => (prevState === 'full' ? 'short' : 'closed')),
  };
  const closeControl: PanelCustomControl = {
    icon: <DoubleChevronUp24 />,
    onWrapperClick: () => setPanelState('closed'),
  };
  const [panelControls, setPanelControls] = useState<PanelCustomControl[]>([]);

  useEffect(() => {
    panelState === 'full' && setPanelControls([closeHalfwayControl, closeControl]);
    panelState === 'short' && setPanelControls([closeHalfwayControl, openHalfwayControl]);
    panelState === 'closed' && setPanelControls([openFullControl, openHalfwayControl]);
  }, [panelState]);

  const panelContent = {
    full: (
      <div style={{ display: 'flex', margin: 'auto' }}>
        <div style={{ margin: 'auto', padding: '2em' }}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Soluta mollitia aut dignissimos dolorem doloremque
          eos unde eveniet veritatis modi in et dolor, quia expedita sequi eius, optio animi, sunt blanditiis!
          <br />
        </div>
      </div>
    ),
    short: <div style={{ margin: 'auto', padding: '2em' }}>Short state</div>,
    closed: null,
  };

  return (
    <div style={{ display: 'flex', gap: '1em', flexDirection: 'row', flexWrap: 'wrap', paddingBottom: '40px' }}>
      <Panel
        header={<div style={{ fontSize: '1.2em', whiteSpace: 'pre' }}>Custom title</div>}
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

      <Panel header="Resizable panel" resize="vertical" minContentHeight={200}>
        <div style={{ display: 'flex', margin: 'auto' }}>
          <div style={{ margin: 'auto', padding: '2em' }}>Content</div>
        </div>
      </Panel>

      <Panel
        header={'Wide panel with controls'}
        resize="vertical"
        minContentHeight={60}
        maxContentHeight={150}
        isOpen={true}
        style={{ width: '100%' }}
        customControls={[openHalfwayControl, closeHalfwayControl]}
      >
        <h5>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptas aliquid maiores minima veniam vitae! Non
          repellat esse, cupiditate earum minus dolore cum quas, accusantium deleniti quod, inventore ea nisi vitae?
        </h5>
      </Panel>

      <Panel
        header={`With short state. Current state: ${panelState}`}
        resize="vertical"
        minContentHeight={60}
        isOpen={panelState !== 'closed'}
        style={{ width: '200px' }}
        customControls={panelControls}
        headerIcon={<Disasters24 />}
      >
        {panelContent[panelState]}
      </Panel>

      <Panel
        header={`Icon`}
        resize="vertical"
        minContentHeight={60}
        isOpen={true}
        style={{ width: '200px' }}
        customControls={panelControls}
        headerIcon={<Disasters24 />}
      >
        {panelContent[panelState]}
      </Panel>
    </div>
  );
}
