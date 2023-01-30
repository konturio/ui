import { SVGProps, memo } from 'react';

const Chat16 = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} viewBox="0 0 16 16" fill="none" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12.1481 3.16666C12.3299 3.16666 12.5041 3.23885 12.6326 3.36735C12.7611 3.49585 12.8333 3.67013 12.8333 3.85185V12.1262L11.3165 10.6094C11.2227 10.5156 11.0956 10.463 10.963 10.463H3.85185C3.67013 10.463 3.49585 10.3908 3.36735 10.2623C3.23885 10.1338 3.16666 9.9595 3.16666 9.77777V3.85185C3.16666 3.67013 3.23885 3.49585 3.36735 3.36735C3.49585 3.23885 3.67013 3.16666 3.85185 3.16666H12.1481ZM13.3397 2.66024C13.0237 2.34421 12.5951 2.16666 12.1481 2.16666H3.85185C3.40491 2.16666 2.97628 2.34421 2.66024 2.66024C2.34421 2.97628 2.16666 3.40491 2.16666 3.85185V9.77777C2.16666 10.2247 2.34421 10.6533 2.66024 10.9694C2.97628 11.2854 3.40491 11.463 3.85185 11.463H10.7559L12.9798 13.6869C13.1228 13.8299 13.3378 13.8727 13.5247 13.7953C13.7115 13.7179 13.8333 13.5356 13.8333 13.3333V3.85185C13.8333 3.40491 13.6558 2.97628 13.3397 2.66024Z"
      fill="currentColor"
    />
  </svg>
);

Chat16.displayName = 'Chat16';
const Memo = memo(Chat16);
export default Memo;
