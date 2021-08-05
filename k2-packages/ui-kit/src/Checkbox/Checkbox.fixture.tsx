import { useCallback, useState } from 'react';
import { Checkbox } from '.';

const wrapperStyle = { display: 'flex', flexFlow: 'column', gap: '24px', padding: '16px', maxWidth: '400px' };

export default {
  Checkbox: (
    <div style={wrapperStyle}>
      <Checkbox id="unchecked" label="Unchecked" checked={false} readOnly />
      <Checkbox id="focused" label="Focused" autoFocus checked={false}  readOnly />
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
      <div style={wrapperStyle}>
        <Checkbox id="foo" label="Foo" checked={state['foo']} onChange={onChange} />
        <Checkbox id="bar" label="Bar" checked={state['bar']} onChange={onChange} />
        <Checkbox id="baz" label="Baz" checked={state['baz']} onChange={onChange} />
        <code style={{ whiteSpace: 'pre' }}>{JSON.stringify(state, null, 2)}</code>
      </div>
    );
  },
};
