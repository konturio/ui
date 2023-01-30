import { SVGProps, memo } from 'react';

const InfoFilled16 = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} viewBox="0 0 16 16" fill="none" {...props}>
    <g clipPath="url(#clip0_1049_4224)">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16 8C16 12.4183 12.4183 16 8 16C3.58172 16 0 12.4183 0 8C0 3.58172 3.58172 0 8 0C12.4183 0 16 3.58172 16 8ZM8 2.375C8.51777 2.375 8.9375 2.79473 8.9375 3.3125C8.9375 3.83027 8.51777 4.25 8 4.25C7.48223 4.25 7.0625 3.83027 7.0625 3.3125C7.0625 2.79473 7.48223 2.375 8 2.375ZM10.5 12.375C10.5 12.7616 10.1866 13.075 9.8 13.075H6.2C5.8134 13.075 5.5 12.7616 5.5 12.375C5.5 11.9884 5.8134 11.675 6.2 11.675H7.3V7.45H6.825C6.4384 7.45 6.125 7.1366 6.125 6.75C6.125 6.3634 6.4384 6.05 6.825 6.05H7.70625C8.25854 6.05 8.70625 6.49772 8.70625 7.05V11.675H9.8C10.1866 11.675 10.5 11.9884 10.5 12.375Z"
        fill="currentColor"
      />
    </g>
    <defs>
      <clipPath id="clip0_1049_4224">
        <rect width={16} height={16} fill="white" />
      </clipPath>
    </defs>
  </svg>
);

InfoFilled16.displayName = 'InfoFilled16';
const Memo = memo(InfoFilled16);
export default Memo;
