import { SVGProps, memo } from 'react';

const ChevronDown16 = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} viewBox="0 0 16 16" fill="none" {...props}>
    <path d="M3 5L8 10L13 5" stroke="currentColor" strokeLinejoin="bevel" />
  </svg>
);

ChevronDown16.displayName = 'ChevronDown16';
const Memo = memo(ChevronDown16);
export default Memo;
