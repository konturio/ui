import { memo } from 'react';

const BoundarySelectorIcon = memo((props: React.SVGProps<SVGSVGElement>) => (
  <svg width="20" height="22" viewBox="0 0 20 22" fill="none">
    <path
      d="M11.8099 7.75L1.19006 1.25L2.30994 19.25L7.80994 18.25L15.8099 20.75L18.8099 6.25L11.8099 7.75Z"
      stroke="white"
      strokeWidth="1.3"
      strokeLinejoin="round"
    />
  </svg>
));

BoundarySelectorIcon.displayName = 'BoundarySelectorIcon';

export default BoundarySelectorIcon;
