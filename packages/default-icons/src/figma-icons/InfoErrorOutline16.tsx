import { SVGProps, memo } from 'react';

const InfoErrorOutline16 = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} viewBox="0 0 16 16" fill="none" {...props}>
    <path
      d="M8.00002 2.16668C4.77836 2.16668 2.16668 4.77835 2.16668 8.00001C2.16668 11.2217 4.77836 13.8333 8.00002 13.8333C11.2217 13.8333 13.8334 11.2217 13.8334 8.00001C13.8334 4.77835 11.2217 2.16668 8.00002 2.16668Z"
      stroke="#D93A3A"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path d="M8.00004 5.00002L8.00004 8.62521" stroke="#D93A3A" strokeLinejoin="round" />
    <path d="M8.00004 10L8.00004 11" stroke="#D93A3A" strokeLinejoin="round" />
  </svg>
);

InfoErrorOutline16.displayName = 'InfoErrorOutline16';
const Memo = memo(InfoErrorOutline16);
export default Memo;
