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
      d="M6.9 4.9C6.9 4.62386 7.12386 4.4 7.4 4.4C7.67614 4.4 7.9 4.62386 7.9 4.9V7.83422C7.9 7.96683 7.95268 8.09401 8.04644 8.18777L9.97578 10.1171C10.171 10.3124 10.171 10.629 9.97578 10.8242C9.78052 11.0195 9.46393 11.0195 9.26867 10.8242L7.19289 8.74843C7.00535 8.5609 6.9 8.30654 6.9 8.04133V4.9Z"
      fill="currentColor"
    />
  </svg>
);
Clock16.displayName = 'Clock16';
const Memo = memo(Clock16);
export default Memo;
