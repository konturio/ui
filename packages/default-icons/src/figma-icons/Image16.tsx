import { SVGProps, memo } from 'react';

const Image16 = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} viewBox="0 0 16 16" fill="none" {...props}>
    <path
      d="M12.6667 2H3.33333C2.59695 2 2 2.59695 2 3.33333V12.6667C2 13.403 2.59695 14 3.33333 14H12.6667C13.403 14 14 13.403 14 12.6667V3.33333C14 2.59695 13.403 2 12.6667 2Z"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path d="M14 10L10.6667 6.66666L3.33334 14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" />
    <path
      d="M5.66666 6.66666C6.21895 6.66666 6.66666 6.21895 6.66666 5.66666C6.66666 5.11438 6.21895 4.66666 5.66666 4.66666C5.11438 4.66666 4.66666 5.11438 4.66666 5.66666C4.66666 6.21895 5.11438 6.66666 5.66666 6.66666Z"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

Image16.displayName = 'Image16';
const Memo = memo(Image16);
export default Memo;
