import { useCallback, useState } from 'react';
import { Checkbox } from '.';
const css = (s: { raw: readonly string[] }) => s.raw[0];

export default {
  Checkbox: (
    <div style={{ display: 'flex', flexFlow: 'column nowrap' }}>
      <Checkbox id="unchecked" label="Unchecked" checked={false} readOnly />
      <Checkbox id="focused" label="Focused" autoFocus checked={false} readOnly />
      <Checkbox id="disabled" label="Disabled" disabled readOnly />
      <Checkbox id="checked" label="Checked" checked readOnly />
      <Checkbox id="checked-disabled" label="Checked disabled" checked disabled readOnly />
    </div>
  ),
  Interactive: () => {
    const [state, setState] = useState({
      foo: false,
      bar: true,
      baz: false,
    });

    const onChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
      setState((state) => ((state[e.target.id] = e.target.checked), { ...state }));
    }, []);

    return (
      <div style={{ display: 'flex', flexFlow: 'column nowrap' }}>
        <Checkbox id="foo" label="Foo" checked={state['foo']} onChange={onChange} />
        <Checkbox id="bar" label="Bar" checked={state['bar']} onChange={onChange} />
        <Checkbox id="baz" label="Baz" checked={state['baz']} onChange={onChange} />
        <code style={{ whiteSpace: 'pre', margin: '1em 0' }}>{JSON.stringify(state, null, 2)}</code>
      </div>
    );
  },
  PlacementInRow: (
    <div style={{ display: 'flex', flexFlow: 'column nowrap', width: '300px' }}>
      <style>
        {css`
          .black-back {
            background-color: rgba(0, 0, 0, 0.2);
          }
        `}
      </style>
      <div style={{ display: 'flex', flexFlow: 'row nowrap' }}>
        <Checkbox id="blockPlacement" label="Block Placement" checked readOnly className="black-back" />
      </div>
      <div style={{ display: 'flex', flexFlow: 'row nowrap' }}>
        <Checkbox id="inlinePlacement" label="Inline placement" checked readOnly block={false} className="black-back" />
      </div>
    </div>
  ),
};
