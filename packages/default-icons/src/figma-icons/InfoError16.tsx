import { SVGProps, memo } from 'react';

const InfoError16 = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} viewBox="0 0 16 16" fill="none" {...props}>
    <g clipPath="url(#clip0_302_731)">
      <path
        d="M16 8C16 12.4183 12.4183 16 8 16C3.58172 16 0 12.4183 0 8C0 3.58172 3.58172 0 8 0C12.4183 0 16 3.58172 16 8Z"
        fill="#D93A3A"
      />
      <path d="M8 4V8" stroke="white" strokeWidth={1.6} strokeLinecap="square" strokeLinejoin="round" />
      <path d="M8 11.3333H8.00667" stroke="white" strokeWidth={1.6} strokeLinecap="square" strokeLinejoin="round" />
    </g>
    <defs>
      <clipPath id="clip0_302_731">
        <rect width={16} height={16} fill="white" />
      </clipPath>
    </defs>
  </svg>
);

InfoError16.displayName = 'InfoError16';
const Memo = memo(InfoError16);
export default Memo;
