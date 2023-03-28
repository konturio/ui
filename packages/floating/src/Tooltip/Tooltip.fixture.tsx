import { forwardRef } from 'react';
import { useSelect, useValue } from 'react-cosmos/fixture';
import * as Floating from '@konturio/floating';

const Dummy = forwardRef<HTMLDivElement, React.PropsWithChildren<React.HTMLAttributes<HTMLDivElement>>>(function Dummy2(
  { children, ...rest },
  ref,
) {
  return (
    <div
      ref={ref}
      style={{
        padding: '16px',
        margin: '40px',
        backgroundColor: 'pink',
        borderRadius: '8px',
        border: '3px solid pink',
        fontWeight: 'bold',
      }}
      {...rest}
    >
      {children}
    </div>
  );
});

export default {
  ElementTrigger: () => {
    const [size] = useSelect('size', { options: ['default', 'bigger'], defaultValue: 'default' });

    const [overflowX] = useValue('overflowX', { defaultValue: false });
    const [overflowY] = useValue('overflowY', { defaultValue: false });

    const [placement] = useSelect('placement', {
      options: [
        'top',
        'top-start',
        'top-end',
        'bottom',
        'bottom-start',
        'bottom-end',
        'left',
        'left-start',
        'left-end',
        'right',
        'right-start',
        'right-end',
      ],
      defaultValue: 'top',
    });

    return (
      <div style={{ position: 'absolute', width: '100%', height: '100%', overflow: 'auto' }}>
        <div style={{ minWidth: overflowX ? '200%' : '100%', minHeight: overflowY ? '200%' : '100%', display: 'flex' }}>
          <div
            style={{
              flex: 1,
              display: 'flex',
              flexFlow: 'column nowrap',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <Floating.Tooltip placement={placement} size={size}>
              <Floating.TooltipTrigger asChild>
                <Dummy>Hover me</Dummy>
              </Floating.TooltipTrigger>
              <Floating.TooltipContent>
                {'Some long long long long long long long long long long long long long long text in tooltip'}
              </Floating.TooltipContent>
            </Floating.Tooltip>
          </div>
        </div>
      </div>
    );
  },
};