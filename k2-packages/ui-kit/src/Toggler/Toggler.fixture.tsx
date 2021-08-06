import { useCallback, useState } from 'react';
import { Toggler } from '.';

const wrapperStyle = { display: 'flex', flexFlow: 'column', gap: '24px', padding: '16px', maxWidth: '400px' };

export default {
  Checkbox: (
    <div style={wrapperStyle}>
      <Toggler id="unchecked" label="Unchecked" on={false} readOnly />
      <Toggler id="focused" label="Focused" autoFocus on={false}  readOnly />
      <Toggler id="disabled" label="Disabled" disabled readOnly />
      <Toggler id="enabled" label="Switched On" on readOnly />
      <Toggler id="enabled-disabled" label="Switched On disabled" on disabled readOnly />
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
        <Toggler id="foo" label="Foo" on={state['foo']} onChange={onChange} />
        <Toggler id="bar" label="Bar" on={state['bar']} onChange={onChange} />
        <Toggler id="baz" label="Baz" on={state['baz']} onChange={onChange} />
        <code style={{ whiteSpace: 'pre' }}>{JSON.stringify(state, null, 2)}</code>
      </div>
    );
  },
};
