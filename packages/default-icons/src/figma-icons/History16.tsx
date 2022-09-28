import { SVGProps, memo } from 'react';

const History16 = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} viewBox="0 0 16 16" fill="none" {...props}>
    <path
      d="M2.9263 5.87319C3.7579 3.89169 5.71643 2.5 8 2.5C11.0376 2.5 13.5 4.96243 13.5 8C13.5 11.0376 11.0376 13.5 8 13.5C5.86265 13.5 4.01006 12.2808 3.09971 10.5M2.9263 5.87319H5M2.9263 5.87319H2.5V3.5M8 5.5V8L10 10"
      stroke="currentColor"
      strokeLinecap="square"
    />
  </svg>
);

History16.displayName = 'History16';
const Memo = memo(History16);
export default Memo;
