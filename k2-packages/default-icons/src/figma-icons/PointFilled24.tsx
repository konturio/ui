import { SVGProps, memo } from 'react';

const PointFilled24 = (props: SVGProps<SVGSVGElement>) => (
  <svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <path
      d="M20 9.77761C20 16.1255 12.4479 22 12 22C11.5521 22 4 16.1255 4 9.77761C4 5.48216 7.58172 2 12 2C16.4183 2 20 5.48216 20 9.77761Z"
      fill="currentColor"
      stroke="white"
      strokeWidth={1.3}
      strokeLinecap="square"
      strokeLinejoin="bevel"
    />
    <circle cx={12} cy={10} r={1.5} fill="white" stroke="white" strokeLinecap="square" strokeLinejoin="bevel" />
  </svg>
);

PointFilled24.displayName = 'PointFilled24';
const Memo = memo(PointFilled24);
export default Memo;
