import { SVGProps, memo } from 'react';
const OFFOnFocusOffActiveOnHoverOff = (props: SVGProps<SVGSVGElement>) => (
  <svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <rect
      x={3.5}
      y={3.5}
      width={17}
      height={17}
      rx={1.5}
      fill="currentColor"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path d="M7.5 12.5L11 16L18.5 8.5" stroke="white" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);
OFFOnFocusOffActiveOnHoverOff.displayName = 'OFFOnFocusOffActiveOnHoverOff';
const Memo = memo(OFFOnFocusOffActiveOnHoverOff);
export default Memo;
