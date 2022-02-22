import { memo } from 'react';

const InfoIcon = memo((props: React.SVGProps<SVGSVGElement>) => (
  <svg fill="none" width="14" height="14" viewBox="0 0 14 14" {...props}>
    <path
      opacity="0.3"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M7.00002 12.8334C10.2217 12.8334 12.8334 10.2217 12.8334 7.00002C12.8334 3.77836 10.2217 1.16669 7.00002 1.16669C3.77836 1.16669 1.16669 3.77836 1.16669 7.00002C1.16669 10.2217 3.77836 12.8334 7.00002 12.8334Z"
    />
    <path opacity="0.3" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M7 9.33333V7" />
    <path opacity="0.3" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" d="M7 4.66669H7.00667" />
  </svg>
));

InfoIcon.displayName = 'InfoIcon';

export default InfoIcon;
