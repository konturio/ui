import { SVGProps, memo } from 'react';

const PointFilled16 = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} viewBox="0 0 16 16" fill="none" {...props}>
    <path
      d="M13.3333 6.51841C13.3333 10.7503 8.2986 14.6667 8 14.6667C7.70141 14.6667 2.66667 10.7503 2.66667 6.51841C2.66667 3.65477 5.05449 1.33334 8 1.33334C10.9455 1.33334 13.3333 3.65477 13.3333 6.51841Z"
      fill="currentColor"
      stroke="white"
      strokeWidth={1.3}
      strokeLinecap="square"
      strokeLinejoin="bevel"
    />
    <circle
      cx={8}
      cy={6.66667}
      r={0.833333}
      fill="white"
      stroke="white"
      strokeLinecap="square"
      strokeLinejoin="bevel"
    />
  </svg>
);

PointFilled16.displayName = 'PointFilled16';
const Memo = memo(PointFilled16);
export default Memo;
