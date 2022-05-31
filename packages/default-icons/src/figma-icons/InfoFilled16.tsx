import { SVGProps, memo } from 'react';

const InfoFilled16 = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} viewBox="0 0 16 16" fill="none" {...props}>
    <path
      d="M8 16C12.4183 16 16 12.4183 16 8C16 3.58172 12.4183 0 8 0C3.58172 0 0 3.58172 0 8C0 12.4183 3.58172 16 8 16Z"
      fill="currentColor"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M8 2.375C8.51777 2.375 8.9375 2.79473 8.9375 3.3125C8.9375 3.83027 8.51777 4.25 8 4.25C7.48223 4.25 7.0625 3.83027 7.0625 3.3125C7.0625 2.79473 7.48223 2.375 8 2.375V2.375Z"
      fill="white"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M10.5 13.075H5.5V11.675H7.3V7.45H6.125V6.05H8.70625V11.675H10.5V13.075Z"
      fill="white"
    />
  </svg>
);

InfoFilled16.displayName = 'InfoFilled16';
const Memo = memo(InfoFilled16);
export default Memo;
