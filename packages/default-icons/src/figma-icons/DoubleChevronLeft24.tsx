import { SVGProps, memo } from 'react';

const DoubleChevronLeft24 = (props: SVGProps<SVGSVGElement>) => (
  <svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <path d="M11 7L6 12L11 17" stroke="currentColor" strokeWidth={1.3} strokeLinecap="square" strokeLinejoin="round" />
    <path d="M17 7L12 12L17 17" stroke="currentColor" strokeWidth={1.3} strokeLinecap="square" strokeLinejoin="round" />
  </svg>
);

DoubleChevronLeft24.displayName = 'DoubleChevronLeft24';
const Memo = memo(DoubleChevronLeft24);
export default Memo;
