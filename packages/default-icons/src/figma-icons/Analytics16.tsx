import { SVGProps, memo } from 'react';

const Analytics16 = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} viewBox="0 0 16 16" fill="none" {...props}>
    <path
      d="M7.44264 2.7957C4.3093 2.7957 1.77597 5.32903 1.77597 8.46237C1.77597 11.5957 4.3093 14.129 7.44264 14.129C10.576 14.129 13.1093 11.5957 13.1093 8.46237H7.44264V2.7957Z"
      stroke="currentColor"
      strokeMiterlimit={10}
    />
    <path
      d="M9.545 1.42918V6.40315H14.519C14.519 3.65284 12.2953 1.42918 9.545 1.42918Z"
      stroke="currentColor"
      strokeMiterlimit={10}
    />
  </svg>
);

Analytics16.displayName = 'Analytics16';
const Memo = memo(Analytics16);
export default Memo;
