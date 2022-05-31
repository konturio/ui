import { SVGProps, memo } from 'react';

const ChevronDown24 = (props: SVGProps<SVGSVGElement>) => (
  <svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <path d="M6 9L12 15L18 9" stroke="currentColor" strokeWidth={1.3} strokeLinecap="square" strokeLinejoin="bevel" />
  </svg>
);

ChevronDown24.displayName = 'ChevronDown24';
const Memo = memo(ChevronDown24);
export default Memo;
