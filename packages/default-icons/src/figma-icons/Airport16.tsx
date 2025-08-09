import { SVGProps, memo } from 'react';
const Airport16 = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} viewBox="0 0 16 16" fill="none" {...props}>
    <g clipPath="url(#clip0_20191_38241)">
      <path
        d="M16 7.27275V9.06667L9.06667 8L8.72725 13.0909L11.7333 14.9333V16L8 15.2727L4.26667 16V14.9333L7.27275 13.0909L6.93333 8L0 9.06667V7.27275L6.93333 4.8V1.6C6.93333 1.6 6.93333 0 8 0C9.06667 0 9.06667 1.6 9.06667 1.6V4.60608L16 7.27275Z"
        fill="black"
      />
    </g>
    <defs>
      <clipPath id="clip0_20191_38241">
        <rect width={16} height={16} fill="white" />
      </clipPath>
    </defs>
  </svg>
);
Airport16.displayName = 'Airport16';
const Memo = memo(Airport16);
export default Memo;
