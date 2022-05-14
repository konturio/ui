import { SVGProps, memo } from 'react';

const ChevronUp16 = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} viewBox="0 0 16 16" fill="none" {...props}>
    <path d="M3 10L8 5L13 10" stroke="currentColor" strokeLinejoin="bevel" />
  </svg>
);

ChevronUp16.displayName = 'ChevronUp16';
const Memo = memo(ChevronUp16);
export default Memo;
