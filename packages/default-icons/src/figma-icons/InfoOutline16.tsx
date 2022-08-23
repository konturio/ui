import { SVGProps, memo } from 'react';

const InfoOutline16 = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} viewBox="0 0 16 16" fill="none" {...props}>
    <path
      d="M8.00002 13.8334C11.2217 13.8334 13.8334 11.2217 13.8334 8.00002C13.8334 4.77836 11.2217 2.16669 8.00002 2.16669C4.77836 2.16669 2.16669 4.77836 2.16669 8.00002C2.16669 11.2217 4.77836 13.8334 8.00002 13.8334Z"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path d="M8 11L8 7.37482" stroke="currentColor" strokeLinejoin="round" />
    <path d="M8 6V5" stroke="currentColor" strokeLinejoin="round" />
  </svg>
);

InfoOutline16.displayName = 'InfoOutline16';
const Memo = memo(InfoOutline16);
export default Memo;
