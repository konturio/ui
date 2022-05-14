import { SVGProps, memo } from 'react';

const ChevronUp24 = (props: SVGProps<SVGSVGElement>) => (
  <svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <path d="M6 15L12 9L18 15" stroke="currentColor" strokeWidth={1.3} strokeLinecap="square" strokeLinejoin="bevel" />
  </svg>
);

ChevronUp24.displayName = 'ChevronUp24';
const Memo = memo(ChevronUp24);
export default Memo;
