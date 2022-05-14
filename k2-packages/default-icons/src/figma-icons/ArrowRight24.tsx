import { SVGProps, memo } from 'react';

const ArrowRight24 = (props: SVGProps<SVGSVGElement>) => (
  <svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <path
      d="M12.4997 7.23547L17.2642 12M17.2642 12L12.4997 16.7646M17.2642 12L6.73535 12"
      stroke="currentColor"
      strokeWidth={1.3}
      strokeLinecap="square"
      strokeLinejoin="bevel"
    />
  </svg>
);

ArrowRight24.displayName = 'ArrowRight24';
const Memo = memo(ArrowRight24);
export default Memo;
