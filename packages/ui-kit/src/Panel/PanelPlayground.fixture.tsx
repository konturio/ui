import {
  ChevronDown24,
  ChevronUp24,
  Disasters24,
  DoubleChevronDown24,
  DoubleChevronUp24,
} from '@konturio/default-icons';
import { useEffect, useRef, useState } from 'react';
import { MultiselectLimitedWidth } from '../Select/fixtures/MultiselectWithSearch.fixture';
import { Panel } from '.';
import type { PanelCustomControl } from '.';

export default {
  Default: () => {
    // This whole thing can be wrapped into custom hook
    const [panelState, setPanelState] = useState<'full' | 'short' | 'closed'>('full');
    const panelApiRef = useRef<Record<string, PanelCustomControl>>({
      openFullControl: {
        icon: <DoubleChevronDown24 />,
        onWrapperClick: () => setPanelState('full'),
      },
      openHalfwayControl: {
        icon: <ChevronDown24 />,
        onWrapperClick: () => setPanelState((prevState) => (prevState === 'closed' ? 'short' : 'full')),
      },
      closeHalfwayControl: {
        icon: <ChevronUp24 />,
        onWrapperClick: () => setPanelState((prevState) => (prevState === 'full' ? 'short' : 'closed')),
      },
      closeControl: {
        icon: <DoubleChevronUp24 />,
        onWrapperClick: () => setPanelState('closed'),
      },
    });

    const [panelControls, setPanelControls] = useState<PanelCustomControl[]>([]);

    useEffect(() => {
      panelState === 'full' &&
        setPanelControls([panelApiRef.current.closeHalfwayControl, panelApiRef.current.closeControl]);
      panelState === 'short' &&
        setPanelControls([panelApiRef.current.closeHalfwayControl, panelApiRef.current.openHalfwayControl]);
      panelState === 'closed' &&
        setPanelControls([panelApiRef.current.openFullControl, panelApiRef.current.openHalfwayControl]);
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

        <Panel header="Resizable panel" resize="both" minContentHeight={32}>
          <div style={{ display: 'flex', margin: 'auto' }}>
            <h4 style={{ padding: '2em' }}>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptas aliquid maiores minima veniam vitae!
              Non repellat esse, cupiditate earum minus dolore cum quas, accusantium deleniti quod, inventore ea nisi
              vitae?
            </h4>
          </div>
        </Panel>

        <Panel
          header={'Wide panel with controls'}
          resize="vertical"
          minContentHeight={60}
          maxContentHeight={999}
          isOpen={true}
          style={{ width: '100%' }}
          customControls={[panelApiRef.current.openHalfwayControl, panelApiRef.current.closeHalfwayControl]}
        >
          <h5 style={{ padding: '2em' }}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptas aliquid maiores minima veniam vitae! Non
            repellat esse, cupiditate earum minus dolore cum quas, accusantium deleniti quod, inventore ea nisi vitae?
          </h5>
          <MultiselectLimitedWidth />
          <h5 style={{ padding: '2em' }}>
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
  },
};
