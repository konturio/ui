import { SVGProps, memo } from 'react';

const Circle = (props: SVGProps<SVGSVGElement>) => (
  <svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <circle cx={12} cy={12} r={6} stroke="currentColor" strokeWidth={2} strokeLinecap="square" strokeLinejoin="bevel" />
  </svg>
);

Circle.displayName = 'Circle';
const Memo = memo(Circle);
export default Memo;
