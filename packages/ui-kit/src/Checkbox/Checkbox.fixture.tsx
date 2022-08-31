import { useCallback, useState } from 'react';
import { Checkbox } from '.';
const css = (s: { raw: readonly string[] }) => s.raw[0];

export default {
  Uncontrolled: (
    <div style={{ display: 'flex', flexFlow: 'column nowrap' }}>
      <Checkbox id="unchecked" label="Unchecked" readOnly />
      <Checkbox id="focused" label="Focused" autoFocus readOnly />
      <Checkbox id="disabled" label="Disabled" disabled readOnly />
      <Checkbox id="checked" label="Checked" checked readOnly />
      <Checkbox id="checked-disabled" label="Checked disabled" checked disabled readOnly />
    </div>
  ),
  Controlled: () => {
    const [state, setState] = useState({
      foo: false,
      bar: true,
      baz: false,
    });

    const onChange = useCallback((id: string, isChecked: boolean) => {
      setState({ ...state, [id]: isChecked });
    }, []);

    return (
      <div style={{ display: 'flex', flexFlow: 'column nowrap' }}>
        <Checkbox
          id="foo"
          label="Foo"
          checked={state['foo']}
          onChange={(isChecked) => {
            onChange('foo', isChecked);
          }}
        />
        <Checkbox
          id="bar"
          label="Bar"
          checked={state['bar']}
          onChange={(isChecked) => {
            onChange('bar', isChecked);
          }}
        />
        <Checkbox
          id="baz"
          label="Baz"
          checked={state['baz']}
          onChange={(isChecked) => {
            onChange('baz', isChecked);
          }}
        />
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
