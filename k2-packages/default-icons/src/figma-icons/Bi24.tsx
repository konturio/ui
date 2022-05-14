import { SVGProps, memo } from 'react';

const Bi24 = (props: SVGProps<SVGSVGElement>) => (
  <svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <path
      d="M20 14H14V20H20V14Z"
      stroke="currentColor"
      strokeWidth={1.3}
      strokeLinecap="square"
      strokeLinejoin="bevel"
    />
    <path
      d="M10 14H4V20H10V14Z"
      stroke="currentColor"
      strokeWidth={1.3}
      strokeLinecap="square"
      strokeLinejoin="bevel"
    />
    <path d="M20 4H14V10H20V4Z" stroke="currentColor" strokeWidth={1.3} strokeLinecap="square" strokeLinejoin="bevel" />
    <path d="M10 4H4V10H10V4Z" stroke="currentColor" strokeWidth={1.3} strokeLinecap="square" strokeLinejoin="bevel" />
  </svg>
);

Bi24.displayName = 'Bi24';
const Memo = memo(Bi24);
export default Memo;
