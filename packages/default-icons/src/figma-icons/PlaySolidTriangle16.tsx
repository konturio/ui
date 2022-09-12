import { SVGProps, memo } from 'react';

const PlaySolidTriangle16 = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} viewBox="0 0 16 16" fill="none" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M3 3.76846C3 2.8177 4.01933 2.215 4.8524 2.67319L12.5461 6.90474C13.4096 7.37964 13.4096 8.62037 12.5461 9.09527L4.8524 13.3268C4.01933 13.785 3 13.1823 3 12.2316V3.76846Z"
      fill="currentColor"
    />
  </svg>
);

PlaySolidTriangle16.displayName = 'PlaySolidTriangle16';
const Memo = memo(PlaySolidTriangle16);
export default Memo;
