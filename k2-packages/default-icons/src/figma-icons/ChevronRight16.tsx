import { SVGProps, memo } from 'react';

const ChevronRight16 = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} viewBox="0 0 16 16" fill="none" {...props}>
    <path d="M6 12L10 8L6 4" stroke="currentColor" strokeLinecap="square" strokeLinejoin="bevel" />
  </svg>
);

ChevronRight16.displayName = 'ChevronRight16';
const Memo = memo(ChevronRight16);
export default Memo;
