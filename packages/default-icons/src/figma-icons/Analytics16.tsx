import { SVGProps, memo } from 'react';

const Analytics16 = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} viewBox="0 0 16 16" fill="none" {...props}>
    <path
      d="M7.44264 2.79568C4.3093 2.79568 1.77597 5.32902 1.77597 8.46235C1.77597 11.5957 4.3093 14.129 7.44264 14.129C10.576 14.129 13.1093 11.5957 13.1093 8.46235H7.44264V2.79568Z"
      stroke="currentColor"
      strokeMiterlimit={10}
    />
    <path
      d="M9.545 1.42917V6.40314H14.519C14.519 3.65283 12.2953 1.42917 9.545 1.42917Z"
      stroke="currentColor"
      strokeMiterlimit={10}
    />
  </svg>
);

Analytics16.displayName = 'Analytics16';
const Memo = memo(Analytics16);
export default Memo;
