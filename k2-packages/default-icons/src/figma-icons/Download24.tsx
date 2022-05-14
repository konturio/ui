import { SVGProps, memo } from 'react';

const Download24 = (props: SVGProps<SVGSVGElement>) => (
  <svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12.65 4.142C12.65 3.78302 12.359 3.492 12 3.492C11.641 3.492 11.35 3.78302 11.35 4.142V12.9463L8.44419 10.0404C8.19035 9.78658 7.77879 9.78658 7.52495 10.0404C7.27111 10.2943 7.27111 10.7058 7.52495 10.9597L11.5404 14.9751C11.6623 15.097 11.8276 15.1655 12 15.1655C12.1724 15.1655 12.3378 15.097 12.4597 14.9751L16.4751 10.9597C16.729 10.7058 16.729 10.2943 16.4752 10.0404C16.2213 9.78658 15.8098 9.78658 15.5559 10.0404L12.65 12.9463V4.142ZM4.63616 14.0703C4.63616 13.7113 4.34514 13.4203 3.98616 13.4203C3.62717 13.4203 3.33616 13.7113 3.33616 14.0703V18.858C3.33616 19.7693 4.07489 20.508 4.98616 20.508H19.0139C19.9251 20.508 20.6639 19.7693 20.6639 18.858V14.0703C20.6639 13.7113 20.3729 13.4203 20.0139 13.4203C19.6549 13.4203 19.3639 13.7113 19.3639 14.0703V18.858C19.3639 19.0513 19.2072 19.208 19.0139 19.208H4.98616C4.79286 19.208 4.63616 19.0513 4.63616 18.858V14.0703Z"
      fill="currentColor"
    />
  </svg>
);

Download24.displayName = 'Download24';
const Memo = memo(Download24);
export default Memo;
