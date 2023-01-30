import { SVGProps, memo } from 'react';

const PointFilled16 = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} viewBox="0 0 16 16" fill="none" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M8 14.6667C8.2986 14.6667 13.3333 10.7503 13.3333 6.5184C13.3333 3.65477 10.9455 1.33333 8 1.33333C5.05449 1.33333 2.66667 3.65477 2.66667 6.5184C2.66667 10.7503 7.70141 14.6667 8 14.6667ZM9.33334 6.66666C9.33334 7.40304 8.73638 7.99999 8 7.99999C7.26363 7.99999 6.66667 7.40304 6.66667 6.66666C6.66667 5.93028 7.26363 5.33333 8 5.33333C8.73638 5.33333 9.33334 5.93028 9.33334 6.66666Z"
      fill="currentColor"
    />
  </svg>
);

PointFilled16.displayName = 'PointFilled16';
const Memo = memo(PointFilled16);
export default Memo;
