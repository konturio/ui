import { forwardRef } from 'react';
import { useSelect, useValue } from 'react-cosmos/fixture';
import { Tooltip, useClickTooltip, useCoordsClickTooltip, useCoordsHoverTooltip, useHoverTooltip } from '.';

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
    const hoverTooltip = useCoordsHoverTooltip();
    const clickTooltip = useCoordsClickTooltip();

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
            <div style={{ display: 'flex', flexFlow: 'column nowrap' }}>
              <Dummy {...hoverTooltip.triggerProps}>Hover me</Dummy>
              <Dummy {...clickTooltip.triggerProps}>Click me</Dummy>

              <Tooltip placement={placement} {...hoverTooltip.tooltipProps}>
                <div>
                  <div>Paragraph 1</div>
                  <div>
                    Long text long text long text long text long text long text long text long text long text long text
                  </div>
                  <div>
                    Another long text long text long text long text long text long text long text long text long text
                    long text
                  </div>
                </div>
              </Tooltip>

              <Tooltip placement={placement} {...clickTooltip.tooltipProps}>
                {'Some long long long long long long text in tooltip'}
              </Tooltip>
            </div>
          </div>
        </div>
      </div>
    );
  },
  TriggerPositioning: () => {
    const hoverTooltip = useHoverTooltip();

    const clickTooltip = useClickTooltip();

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
            <Dummy {...hoverTooltip.triggerProps}>Hover me</Dummy>
            <Dummy {...clickTooltip.triggerProps}>Click me</Dummy>
            <Tooltip placement={placement} {...hoverTooltip.tooltipProps}>
              {'Some long long long long long long text in tooltip'}
            </Tooltip>
            <Tooltip placement={placement} {...clickTooltip.tooltipProps}>
              <div>
                <div>Paragraph 1</div>
                <div>
                  Long text long text long text long text long text long text long text long text long text long text
                </div>
                <div>
                  Another long text long text long text long text long text long text long text long text long text long
                  text
                </div>
                <div>
                  Long text long text long text long text long text long text long text long text long text long text
                </div>
                <div>
                  Another long text long text long text long text long text long text long text long text long text long
                  text
                </div>
              </div>
            </Tooltip>
          </div>
        </div>
      </div>
    );
  },
};
