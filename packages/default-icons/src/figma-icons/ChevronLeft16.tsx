import { SVGProps, memo } from 'react';

const ChevronLeft16 = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} viewBox="0 0 16 16" fill="none" {...props}>
    <path d="M10 4L6 8L10 12" stroke="currentColor" strokeLinecap="square" strokeLinejoin="bevel" />
  </svg>
);

ChevronLeft16.displayName = 'ChevronLeft16';
const Memo = memo(ChevronLeft16);
export default Memo;
