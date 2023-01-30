import { SVGProps, memo } from 'react';

const Record16 = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} viewBox="0 0 16 16" fill="none" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M8.00002 1.66669C4.50222 1.66669 1.66669 4.50222 1.66669 8.00002C1.66669 11.4978 4.50222 14.3334 8.00002 14.3334C11.4978 14.3334 14.3334 11.4978 14.3334 8.00002C14.3334 4.50222 11.4978 1.66669 8.00002 1.66669ZM2.66669 8.00002C2.66669 5.0545 5.0545 2.66669 8.00002 2.66669C10.9455 2.66669 13.3334 5.0545 13.3334 8.00002C13.3334 10.9455 10.9455 13.3334 8.00002 13.3334C5.0545 13.3334 2.66669 10.9455 2.66669 8.00002Z"
      fill="currentColor"
    />
    <path
      d="M11 8C11 9.65685 9.65685 11 8 11C6.34315 11 5 9.65685 5 8C5 6.34315 6.34315 5 8 5C9.65685 5 11 6.34315 11 8Z"
      fill="currentColor"
    />
  </svg>
);

Record16.displayName = 'Record16';
const Memo = memo(Record16);
export default Memo;
