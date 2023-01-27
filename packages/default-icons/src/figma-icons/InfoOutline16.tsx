import { SVGProps, memo } from 'react';

const InfoOutline16 = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} viewBox="0 0 16 16" fill="none" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M8.00002 2.66669C5.0545 2.66669 2.66669 5.0545 2.66669 8.00002C2.66669 10.9455 5.0545 13.3334 8.00002 13.3334C10.9455 13.3334 13.3334 10.9455 13.3334 8.00002C13.3334 5.0545 10.9455 2.66669 8.00002 2.66669ZM1.66669 8.00002C1.66669 4.50222 4.50222 1.66669 8.00002 1.66669C11.4978 1.66669 14.3334 4.50222 14.3334 8.00002C14.3334 11.4978 11.4978 14.3334 8.00002 14.3334C4.50222 14.3334 1.66669 11.4978 1.66669 8.00002Z"
      fill="currentColor"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M8 6.87481C8.27614 6.87481 8.5 7.09867 8.5 7.37481V11C8.5 11.2761 8.27614 11.5 8 11.5C7.72386 11.5 7.5 11.2761 7.5 11V7.37481C7.5 7.09867 7.72386 6.87481 8 6.87481Z"
      fill="currentColor"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M8 4.5C8.27614 4.5 8.5 4.72386 8.5 5V5.01C8.5 5.28614 8.27614 5.51 8 5.51C7.72386 5.51 7.5 5.28614 7.5 5.01V5C7.5 4.72386 7.72386 4.5 8 4.5Z"
      fill="currentColor"
    />
  </svg>
);

InfoOutline16.displayName = 'InfoOutline16';
const Memo = memo(InfoOutline16);
export default Memo;
