import { SVGProps, memo } from 'react';

const People16 = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} viewBox="0 0 16 16" fill="none" {...props}>
    <path
      d="M14.1111 13V11.8889C14.1108 11.3965 13.9469 10.9182 13.6452 10.5291C13.3436 10.1399 12.9212 9.86198 12.4445 9.73889"
      stroke="currentColor"
      strokeLinecap="square"
      strokeLinejoin="bevel"
    />
    <path
      d="M10.7778 13V11.8889C10.7778 11.2995 10.5436 10.7343 10.1269 10.3175C9.71013 9.90078 9.1449 9.66666 8.55553 9.66666H4.11108C3.52171 9.66666 2.95648 9.90078 2.53974 10.3175C2.12299 10.7343 1.88886 11.2995 1.88886 11.8889V13"
      stroke="currentColor"
      strokeLinecap="square"
      strokeLinejoin="bevel"
    />
    <path
      d="M10.2221 3.0722C10.7001 3.19459 11.1238 3.47259 11.4264 3.86238C11.7289 4.25216 11.8931 4.73155 11.8931 5.22498C11.8931 5.71841 11.7289 6.1978 11.4264 6.58759C11.1238 6.97737 10.7001 7.25537 10.2221 7.37776"
      stroke="currentColor"
      strokeLinecap="square"
      strokeLinejoin="bevel"
    />
    <path
      d="M6.33331 7.44444C7.56061 7.44444 8.55554 6.44952 8.55554 5.22222C8.55554 3.99492 7.56061 3 6.33331 3C5.10601 3 4.11109 3.99492 4.11109 5.22222C4.11109 6.44952 5.10601 7.44444 6.33331 7.44444Z"
      stroke="currentColor"
      strokeLinecap="square"
      strokeLinejoin="bevel"
    />
  </svg>
);

People16.displayName = 'People16';
const Memo = memo(People16);
export default Memo;
