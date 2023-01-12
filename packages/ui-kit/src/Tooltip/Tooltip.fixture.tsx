import { useState } from 'react';
import { Tooltip } from '.';

const Dummy = ({
  children,
  ...rest
}: React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>) => (
  <div style={{ padding: '16px', margin: '24px', borderRadius: '8px', border: '3px solid pink' }} {...rest}>
    {children}
  </div>
);
export default {
  Tooltip: () => {
    const [hoverPosition, setHoverPosition] = useState<null | { x: number; y: number }>(null);
    const [clickPosition, setClickPosition] = useState<null | { x: number; y: number }>(null);
    return (
      <div style={{ display: 'flex', flexFlow: 'column nowrap' }}>
        <Dummy
          onPointerEnter={(e) => setHoverPosition({ x: e.clientX, y: e.clientY })}
          onPointerLeave={() => setHoverPosition(null)}
        >
          Hover me
        </Dummy>
        <Dummy onClick={(e) => setClickPosition({ x: e.clientX, y: e.clientY })}>Click me</Dummy>
        {hoverPosition && (
          <Tooltip
            content={'Some long long long long long long text in tooltip'}
            position={hoverPosition}
            hoverBehavior={true}
          />
        )}
        {clickPosition && (
          <Tooltip
            content={'Some long long long long long long text in tooltip'}
            onClose={() => setClickPosition(null)}
            position={clickPosition}
          />
        )}
      </div>
    );
  },
};
