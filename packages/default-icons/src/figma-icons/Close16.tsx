import { SVGProps, memo } from 'react';

const Close16 = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} viewBox="0 0 16 16" fill="none" {...props}>
    <path d="M3 3L13 13" stroke="currentColor" strokeLinejoin="bevel" />
    <path d="M13 3L3 13" stroke="currentColor" strokeLinejoin="bevel" />
  </svg>
);

Close16.displayName = 'Close16';
const Memo = memo(Close16);
export default Memo;
