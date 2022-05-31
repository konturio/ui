import { SVGProps, memo } from 'react';

const PointOutline24 = (props: SVGProps<SVGSVGElement>) => (
  <svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <path
      d="M18.2944 10.1472C18.2944 15.1644 12.4914 19.8075 12.1472 19.8075C11.803 19.8075 6 15.1644 6 10.1472C6 6.7522 8.7522 4 12.1472 4C15.5422 4 18.2944 6.7522 18.2944 10.1472Z"
      stroke="currentColor"
      strokeWidth={1.3}
      strokeLinecap="square"
      strokeLinejoin="bevel"
    />
    <circle cx={12.1472} cy={9.90375} r={1.5} fill="currentColor" />
  </svg>
);

PointOutline24.displayName = 'PointOutline24';
const Memo = memo(PointOutline24);
export default Memo;
