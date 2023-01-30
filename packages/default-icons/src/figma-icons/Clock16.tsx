import { SVGProps, memo } from 'react';

const Clock16 = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} viewBox="0 0 16 16" fill="none" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M8 3C5.24568 3 3 5.24568 3 8C3 10.7543 5.24568 13 8 13C10.7543 13 13 10.7543 13 8C13 5.24568 10.7543 3 8 3ZM2 8C2 4.6934 4.6934 2 8 2C11.3066 2 14 4.6934 14 8C14 11.3066 11.3066 14 8 14C4.6934 14 2 11.3066 2 8Z"
      fill="currentColor"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M6.9 4.4H7.9V8.04133L10.3293 10.4707L9.62223 11.1778L6.9 8.45554V4.4Z"
      fill="currentColor"
    />
  </svg>
);

Clock16.displayName = 'Clock16';
const Memo = memo(Clock16);
export default Memo;
