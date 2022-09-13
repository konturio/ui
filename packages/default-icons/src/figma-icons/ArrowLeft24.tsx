import { SVGProps, memo } from 'react';

const ArrowLeft24 = (props: SVGProps<SVGSVGElement>) => (
  <svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <path d="M19 12H5" stroke="currentColor" strokeWidth={1.3} strokeLinejoin="round" />
    <path d="M12 5L5 12L12 19" stroke="currentColor" strokeWidth={1.3} strokeLinejoin="round" />
  </svg>
);

ArrowLeft24.displayName = 'ArrowLeft24';
const Memo = memo(ArrowLeft24);
export default Memo;
