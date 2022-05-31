import { SVGProps, memo } from 'react';

const Area24 = (props: SVGProps<SVGSVGElement>) => (
  <svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <path
      d="M6 16V8M18 16V8M16 6H8M16 18H8"
      stroke="currentColor"
      strokeWidth={1.3}
      strokeLinecap="square"
      strokeLinejoin="bevel"
    />
    <rect
      x={4.65}
      y={16.65}
      width={2.7}
      height={2.7}
      stroke="currentColor"
      strokeWidth={1.3}
      strokeLinecap="square"
      strokeLinejoin="bevel"
    />
    <rect
      x={4.65}
      y={4.65}
      width={2.7}
      height={2.7}
      stroke="currentColor"
      strokeWidth={1.3}
      strokeLinecap="square"
      strokeLinejoin="bevel"
    />
    <rect
      x={16.65}
      y={4.65}
      width={2.7}
      height={2.7}
      stroke="currentColor"
      strokeWidth={1.3}
      strokeLinecap="square"
      strokeLinejoin="bevel"
    />
    <rect
      x={16.65}
      y={16.65}
      width={2.7}
      height={2.7}
      stroke="currentColor"
      strokeWidth={1.3}
      strokeLinecap="square"
      strokeLinejoin="bevel"
    />
  </svg>
);

Area24.displayName = 'Area24';
const Memo = memo(Area24);
export default Memo;
