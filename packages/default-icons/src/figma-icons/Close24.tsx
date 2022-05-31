import { SVGProps, memo } from 'react';

const Close24 = (props: SVGProps<SVGSVGElement>) => (
  <svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <path d="M6 6L18 18" stroke="currentColor" strokeWidth={1.3} strokeLinejoin="bevel" />
    <path d="M18 6L6 18" stroke="currentColor" strokeWidth={1.3} strokeLinejoin="bevel" />
  </svg>
);

Close24.displayName = 'Close24';
const Memo = memo(Close24);
export default Memo;
