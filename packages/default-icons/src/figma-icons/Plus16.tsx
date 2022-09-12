import { SVGProps, memo } from 'react';

const Plus16 = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} viewBox="0 0 16 16" fill="none" {...props}>
    <path d="M8 2.66667L8 13.3333" stroke="currentColor" strokeLinecap="square" strokeLinejoin="bevel" />
    <path d="M2.6665 8L13.3332 8" stroke="currentColor" strokeLinecap="square" strokeLinejoin="bevel" />
  </svg>
);

Plus16.displayName = 'Plus16';
const Memo = memo(Plus16);
export default Memo;
