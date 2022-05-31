import { SVGProps, memo } from 'react';

const Analytics16 = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} viewBox="0 0 16 16" fill="none" {...props}>
    <path
      d="M9.33334 1.33333H4C3.64638 1.33333 3.30724 1.47381 3.0572 1.72386C2.80715 1.97391 2.66667 2.31305 2.66667 2.66667V13.3333C2.66667 13.687 2.80715 14.0261 3.0572 14.2761C3.30724 14.5262 3.64638 14.6667 4 14.6667H12C12.3536 14.6667 12.6928 14.5262 12.9428 14.2761C13.1929 14.0261 13.3333 13.687 13.3333 13.3333V5.33333L9.33334 1.33333Z"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path d="M10.6667 11.3333H5.33333" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M10.6667 8.66667H5.33333" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M6.66666 6H5.99999H5.33333" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M9.33333 1.33333V5.33333H13.3333" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

Analytics16.displayName = 'Analytics16';
const Memo = memo(Analytics16);
export default Memo;
