import { memo } from 'react';

const DrawLineIcon = memo((props: React.SVGProps<SVGSVGElement>) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" {...props}>
    <path d="M7 17L17 7" stroke="currentColor" strokeWidth="1.3" strokeLinecap="square" strokeLinejoin="bevel" />
    <rect
      x="4.65"
      y="16.65"
      width="2.7"
      height="2.7"
      stroke="currentColor"
      strokeWidth="1.3"
      strokeLinecap="square"
      strokeLinejoin="bevel"
    />
    <rect
      x="16.65"
      y="4.65"
      width="2.7"
      height="2.7"
      stroke="currentColor"
      strokeWidth="1.3"
      strokeLinecap="square"
      strokeLinejoin="bevel"
    />
  </svg>
));

DrawLineIcon.displayName = 'DrawLineIcon';

export default DrawLineIcon;
