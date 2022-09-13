import { SVGProps, memo } from 'react';

const Download24 = (props: SVGProps<SVGSVGElement>) => (
  <svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M11.35 4.142V12.9463L8.44419 10.0404L7.52495 10.9597L11.5404 14.9751C11.6623 15.097 11.8276 15.1655 12 15.1655C12.1724 15.1655 12.3378 15.097 12.4597 14.9751L16.4751 10.9597L15.5559 10.0404L12.65 12.9463V4.142H11.35ZM3.33616 14.0703V18.858C3.33616 19.7693 4.07489 20.508 4.98616 20.508H19.0139C19.9251 20.508 20.6639 19.7693 20.6639 18.858V14.0703H19.3639V18.858C19.3639 19.0513 19.2072 19.208 19.0139 19.208H4.98616C4.79286 19.208 4.63616 19.0513 4.63616 18.858V14.0703H3.33616Z"
      fill="currentColor"
    />
  </svg>
);

Download24.displayName = 'Download24';
const Memo = memo(Download24);
export default Memo;
