import { useCallback, useState } from 'react';
import { Radio } from '.';

export default {
  Checkbox: (
    <div style={{ display: 'flex', flexFlow: 'column nowrap' }}>
      <Radio id="unchecked" label="Unchecked" checked={false} readOnly />
      <Radio id="focused" label="Focused" autoFocus checked={false} readOnly />
      <Radio id="disabled" label="Disabled" disabled readOnly />
      <Radio id="checked" label="Checked" checked readOnly />
      <Radio id="checked-disabled" label="Checked disabled" checked disabled readOnly />
    </div>
  ),
  Interactive: () => {
    const [state, setState] = useState('foo');

    const onChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
      setState((state) => e.target.value);
    }, []);

    return (
      <div style={{ display: 'flex', flexFlow: 'column nowrap' }}>
        <Radio id="one" label="Foo" value="foo" checked={state === 'foo'} onChange={onChange} />
        <Radio id="two" label="Bar" value="bar" checked={state === 'bar'} onChange={onChange} />
        <Radio id="three" label="Baz" value="baz" checked={state === 'baz'} onChange={onChange} />
        <code style={{ whiteSpace: 'pre', marginTop: '1em' }}>{JSON.stringify(state, null, 2)}</code>
      </div>
    );
  },
};
