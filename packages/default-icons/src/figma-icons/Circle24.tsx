import { SVGProps, memo } from 'react';

const Circle24 = (props: SVGProps<SVGSVGElement>) => (
  <svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <circle cx={12} cy={12} r={6} stroke="#0C9BED" strokeWidth={2} strokeLinecap="square" strokeLinejoin="bevel" />
  </svg>
);

Circle24.displayName = 'Circle24';
const Memo = memo(Circle24);
export default Memo;
