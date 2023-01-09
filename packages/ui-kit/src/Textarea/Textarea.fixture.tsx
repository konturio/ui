import { InfoOutline16, Search16 } from '@konturio/default-icons';
import { useEffect, useState } from 'react';
import { Textarea } from '.';
import type { ChangeEvent } from 'react';

const WrappedTextarea = ({ value, ...props }) => {
  const [innerVal, setInnerVal] = useState(value || '');
  useEffect(() => {
    setInnerVal(value);
  }, [value]);
  return <Textarea {...props} value={innerVal} onChange={(e) => setInnerVal(e.target.value)} />;
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
      Empty: <WrappedTextarea value="" placeholder="" {...props} />
    </>
    <>
      Placeholder: <WrappedTextarea placeholder="Placeholder" value="" {...props} />
    </>
    <>
      Long placeholder: <WrappedTextarea placeholder="Looooong long long long long placeholder" value="" {...props} />
    </>
    <>
      Placeholder on top: <WrappedTextarea value="test" placeholder="Placeholder" showTopPlaceholder {...props} />
    </>
    <>
      Long placeholder on top:
      <WrappedTextarea
        value="test"
        placeholder="Looooong long long long long placeholder"
        showTopPlaceholder
        {...props}
      />
    </>
    <>
      Placeholder + Value
      <WrappedTextarea value="test" placeholder="Placeholder" {...props} />
    </>

    <>
      Width from 100px to 300px, height from 60px to 100px,
      <WrappedTextarea
        minWidth="100px"
        minHeight="60px"
        maxWidth="300px"
        maxHeight="100px"
        value="Max Width 300px, Max height 100px"
        placeholder="Placeholder"
        {...props}
      />
    </>
    <>
      Long Placeholder + Long Value
      <WrappedTextarea
        value="Looooong long long long long value"
        placeholder="Looooong long long long long placeholder"
        {...props}
      />
    </>
    <>
      With message
      <WrappedTextarea value="Value" message="With message" {...props} />
    </>
    <>
      With label
      <WrappedTextarea
        value="my biography"
        message="Bio"
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
      <WrappedTextarea
        value="my biography"
        message="Bio"
        showTopPlaceholder
        placeholder="Share biography"
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
