import { useCallback, useState } from 'react';
import { Toggler } from '.';

export default {
  Checkbox: (
    <div style={{ display: 'flex', flexFlow: 'column nowrap' }}>
      <Toggler id="unchecked" label="Unchecked" on={false} readOnly />
      <Toggler id="focused" label="Focused" autoFocus on={false} readOnly />
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
      <div style={{ display: 'flex', flexFlow: 'column nowrap' }}>
        <Toggler id="foo" label="Foo" on={state['foo']} onChange={onChange} />
        <Toggler id="bar" label="Bar" on={state['bar']} onChange={onChange} />
        <Toggler id="baz" label="Baz" on={state['baz']} onChange={onChange} />
        <code style={{ whiteSpace: 'pre', marginTop: '1em' }}>{JSON.stringify(state, null, 2)}</code>
      </div>
    );
  },
};
