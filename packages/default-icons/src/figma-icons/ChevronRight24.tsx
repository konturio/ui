import { SVGProps, memo } from 'react';

const ChevronRight24 = (props: SVGProps<SVGSVGElement>) => (
  <svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth={1.3} strokeLinecap="square" strokeLinejoin="bevel" />
  </svg>
);

ChevronRight24.displayName = 'ChevronRight24';
const Memo = memo(ChevronRight24);
export default Memo;
