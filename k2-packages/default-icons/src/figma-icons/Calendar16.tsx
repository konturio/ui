import { SVGProps, memo } from 'react';

const Calendar16 = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} viewBox="0 0 16 16" fill="none" {...props}>
    <path
      d="M12.6667 2.66667H3.33333C2.59695 2.66667 2 3.26363 2 4.00001V13.3333C2 14.0697 2.59695 14.6667 3.33333 14.6667H12.6667C13.403 14.6667 14 14.0697 14 13.3333V4.00001C14 3.26363 13.403 2.66667 12.6667 2.66667Z"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path d="M2 6.66667H14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M10.6667 1.33333V3.99999" stroke="currentColor" strokeLinecap="square" strokeLinejoin="round" />
    <path d="M5.33333 1.33333V3.99999" stroke="currentColor" strokeLinecap="square" strokeLinejoin="round" />
  </svg>
);

Calendar16.displayName = 'Calendar16';
const Memo = memo(Calendar16);
export default Memo;
