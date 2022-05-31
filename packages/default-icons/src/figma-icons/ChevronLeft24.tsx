import { SVGProps, memo } from 'react';

const ChevronLeft24 = (props: SVGProps<SVGSVGElement>) => (
  <svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <path d="M15 6L9 12L15 18" stroke="currentColor" strokeWidth={1.3} strokeLinecap="square" strokeLinejoin="bevel" />
  </svg>
);

ChevronLeft24.displayName = 'ChevronLeft24';
const Memo = memo(ChevronLeft24);
export default Memo;
