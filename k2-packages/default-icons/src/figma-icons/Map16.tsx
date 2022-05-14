import { SVGProps, memo } from 'react';

const Map16 = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} viewBox="0 0 16 16" fill="none" {...props}>
    <path
      d="M6 13.5L2 12V2.5L6 4M6 13.5V4M6 13.5L10 12M6 4L10 2.5M10 2.5V12M10 2.5L14 4V13.5L10 12"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="bevel"
    />
  </svg>
);

Map16.displayName = 'Map16';
const Memo = memo(Map16);
export default Memo;
