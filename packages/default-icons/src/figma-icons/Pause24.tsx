import { SVGProps, memo } from 'react';

const Pause24 = (props: SVGProps<SVGSVGElement>) => (
  <svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <rect x={7} y={6} width={3} height={12} rx={1} stroke="currentColor" strokeWidth={1.3} />
    <rect x={14} y={6} width={3} height={12} rx={1} stroke="currentColor" strokeWidth={1.3} />
  </svg>
);

Pause24.displayName = 'Pause24';
const Memo = memo(Pause24);
export default Memo;
