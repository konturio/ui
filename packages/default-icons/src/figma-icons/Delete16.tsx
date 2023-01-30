import { SVGProps, memo } from 'react';

const Delete16 = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} viewBox="0 0 16 16" fill="none" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M4.95704 2.33741C5.05199 2.2289 5.18915 2.16666 5.33333 2.16666H14C14.4862 2.16666 14.9525 2.35982 15.2964 2.70363C15.6402 3.04745 15.8333 3.51377 15.8333 4V12C15.8333 12.4862 15.6402 12.9525 15.2964 13.2964C14.9525 13.6402 14.4862 13.8333 14 13.8333H5.33333C5.18915 13.8333 5.05199 13.7711 4.95704 13.6626L0.290378 8.32925C0.12543 8.14074 0.12543 7.85926 0.290378 7.67074L4.95704 2.33741ZM5.56022 3.16666L1.33105 8L5.56022 12.8333H14C14.221 12.8333 14.433 12.7455 14.5893 12.5893C14.7455 12.433 14.8333 12.221 14.8333 12V4C14.8333 3.77898 14.7455 3.56702 14.5893 3.41074C14.433 3.25446 14.221 3.16666 14 3.16666H5.56022Z"
      fill="currentColor"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12.7071 6L8 10.7071L7.29289 10L12 5.29289L12.7071 6Z"
      fill="currentColor"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M8 5.29289L12.7071 10L12 10.7071L7.29289 6L8 5.29289Z"
      fill="currentColor"
    />
  </svg>
);

Delete16.displayName = 'Delete16';
const Memo = memo(Delete16);
export default Memo;
