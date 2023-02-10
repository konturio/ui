import { forwardRef, useRef, useState } from 'react';
import { useSelect, useValue } from 'react-cosmos/fixture';
import { Tooltip } from '.';

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
  CoodsPositioning: () => {
    const [hoverPosition, setHoverPosition] = useState<null | { x: number; y: number }>(null);
    const [clickPosition, setClickPosition] = useState<null | { x: number; y: number }>(null);

    const [overflowX] = useValue('overflowX', { defaultValue: false });
    const [overflowY] = useValue('overflowY', { defaultValue: false });

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
            <div style={{ display: 'flex', flexFlow: 'column nowrap' }}>
              <Dummy
                onPointerEnter={(e) => setHoverPosition({ x: e.clientX, y: e.clientY })}
                onPointerLeave={() => setHoverPosition(null)}
              >
                Hover me
              </Dummy>
              <Dummy onClick={(e) => setClickPosition({ x: e.clientX, y: e.clientY })}>Click me</Dummy>

              <Tooltip position={hoverPosition} hoverBehavior={true} open={!!hoverPosition}>
                {'Some long long long long long long text in tooltip'}
              </Tooltip>

              <Tooltip onClose={() => setClickPosition(null)} position={clickPosition} open={!!clickPosition}>
                {'Some long long long long long long text in tooltip'}
              </Tooltip>
            </div>
          </div>
        </div>
      </div>
    );
  },
  TriggerPositioning: () => {
    const targetHoverRef = useRef<HTMLDivElement>(null);
    const [isHoverOpened, setIsHoverOpened] = useState(false);

    const [isClickOpened, setIsClickOpened] = useState(false);
    const targetClickRef = useRef<HTMLDivElement>(null);

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
            <Dummy
              ref={targetHoverRef}
              onMouseEnter={() => setIsHoverOpened(true)}
              onMouseLeave={() => setIsHoverOpened(false)}
            >
              Hover me
            </Dummy>
            <Dummy ref={targetClickRef} onClick={(e) => setIsClickOpened((prev) => !prev)}>
              Click me
            </Dummy>
            <Tooltip placement={placement} triggerRef={targetHoverRef} open={isHoverOpened} hoverBehavior>
              {'Some long long long long long long text in tooltip'}
            </Tooltip>
            <Tooltip
              placement={placement}
              triggerRef={targetClickRef}
              open={isClickOpened}
              onClose={() => setIsClickOpened(false)}
            >
              {'Some long long long long long long text in tooltip'}
            </Tooltip>
          </div>
        </div>
      </div>
    );
  },
};
