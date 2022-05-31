import { Input as TrueInput } from '.';
import { InfoOutline16, Search16 } from '@kontur-ui/default-icons';
import { ChangeEvent, useEffect, useState } from 'react';

const Input = ({ value, ...props }) => {
  const [innerVal, setInnerVal] = useState(value || '');
  useEffect(() => {
    setInnerVal(value);
  }, [value]);
  return <TrueInput {...props} value={innerVal} onChange={(e) => setInnerVal(e.target.value)} />;
};

const getInputStates = (props: {
  error?: boolean | string;
  disabled?: boolean;
  children?: React.ReactNode;
  isFocused?: boolean;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}) => (
  <div style={{ display: 'flex', flexFlow: 'column nowrap', gap: '1em' }}>
    <>
      Empty: <Input value="" placeholder="" {...props} />
    </>
    <>
      Placeholder: <Input placeholder="Placeholder" value="" {...props} />
    </>
    <>
      Long placeholder: <Input placeholder="Looooong long long long long placeholder" value="" {...props} />
    </>
    <>
      Placeholder on top: <Input value="test" placeholder="Placeholder" showTopPlaceholder {...props} />
    </>
    <>
      Long placeholder on top:
      <Input value="test" placeholder="Looooong long long long long placeholder" showTopPlaceholder {...props} />
    </>
    <>
      Placeholder + Value
      <Input value="test" placeholder="Placeholder" {...props} />
    </>
    <>
      Long Placeholder + Long Value
      <Input
        value="Looooong long long long long value"
        placeholder="Looooong long long long long placeholder"
        {...props}
      />
    </>
    <>
      With message
      <Input value="Value" message="With message" {...props} />
    </>
    <>
      Type - Password With message
      <Input type="password" value="password" message="Password" {...props} />
    </>
    <>
      With label
      <Input
        type="password"
        value="password"
        message="Password"
        {...props}
        renderLabel={
          <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
            Label <InfoOutline16 style={{ color: 'var(--faint-strong)' }} />
          </div>
        }
      />
    </>
    <>
      With label + Top placeholder
      <Input
        type="password"
        value="password"
        message="Password"
        showTopPlaceholder
        placeholder="Enter password"
        {...props}
        renderLabel={
          <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
            Label <InfoOutline16 style={{ color: 'var(--faint-strong)' }} />
          </div>
        }
      />
    </>
  </div>
);

export default {
  Base: getInputStates({ onChange: console.log, isFocused: false }),
  'Error - String': getInputStates({ onChange: console.log, isFocused: false, error: 'This is test error message!' }),
  'Error - Boolean': getInputStates({ onChange: console.log, isFocused: false, error: true }),
  Disabled: getInputStates({ onChange: console.log, isFocused: false, disabled: true }),
  'With icon': getInputStates({ onChange: console.log, isFocused: false, children: <Search16 /> }),
};
