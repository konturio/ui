import { SVGProps, memo } from 'react';

const Line16 = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} viewBox="0 0 16 16" fill="none" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12.0404 4.66666L4.66666 12.0404L3.95956 11.3333L11.3333 3.95955L12.0404 4.66666Z"
      fill="currentColor"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M3.66666 11.6667V12.3333H4.33333V11.6667H3.66666ZM3.16666 10.6667C2.89052 10.6667 2.66666 10.8905 2.66666 11.1667V12.8333C2.66666 13.1095 2.89052 13.3333 3.16666 13.3333H4.83333C5.10947 13.3333 5.33333 13.1095 5.33333 12.8333V11.1667C5.33333 10.8905 5.10947 10.6667 4.83333 10.6667H3.16666Z"
      fill="currentColor"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M11.6667 3.66666V4.33332H12.3333V3.66666H11.6667ZM11.1667 2.66666C10.8905 2.66666 10.6667 2.89051 10.6667 3.16666V4.83332C10.6667 5.10947 10.8905 5.33332 11.1667 5.33332H12.8333C13.1095 5.33332 13.3333 5.10947 13.3333 4.83332V3.16666C13.3333 2.89051 13.1095 2.66666 12.8333 2.66666H11.1667Z"
      fill="currentColor"
    />
  </svg>
);

Line16.displayName = 'Line16';
const Memo = memo(Line16);
export default Memo;
