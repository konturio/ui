import { SVGProps, memo } from 'react';

const DoubleChevronRight24 = (props: SVGProps<SVGSVGElement>) => (
  <svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <path d="M12 17L17 12L12 7" stroke="#D2D5D8" strokeWidth={1.3} strokeLinecap="square" strokeLinejoin="bevel" />
    <path d="M6 17L11 12L6 7" stroke="#D2D5D8" strokeWidth={1.3} strokeLinecap="square" strokeLinejoin="bevel" />
  </svg>
);

DoubleChevronRight24.displayName = 'DoubleChevronRight24';
const Memo = memo(DoubleChevronRight24);
export default Memo;
