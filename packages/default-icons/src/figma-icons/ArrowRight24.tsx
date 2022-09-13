import { SVGProps, memo } from 'react';

const ArrowRight24 = (props: SVGProps<SVGSVGElement>) => (
  <svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <path d="M5 12H19" stroke="currentColor" strokeWidth={1.3} strokeLinejoin="round" />
    <path d="M12 5L19 12L12 19" stroke="currentColor" strokeWidth={1.3} strokeLinejoin="round" />
  </svg>
);

ArrowRight24.displayName = 'ArrowRight24';
const Memo = memo(ArrowRight24);
export default Memo;
