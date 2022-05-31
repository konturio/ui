import { SVGProps, memo } from 'react';

const CloseFilled16 = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} viewBox="0 0 16 16" fill="none" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M8 14C11.3137 14 14 11.3137 14 8C14 4.68629 11.3137 2 8 2C4.68629 2 2 4.68629 2 8C2 11.3137 4.68629 14 8 14ZM5.75 4.83076L6.20962 5.29038L8 7.08076L9.79038 5.29038L10.25 4.83076L11.1692 5.75L10.7096 6.20962L8.91924 8L10.7096 9.79038L11.1692 10.25L10.25 11.1692L9.79038 10.7096L8 8.91924L6.20962 10.7096L5.75 11.1692L4.83076 10.25L5.29038 9.79038L7.08076 8L5.29038 6.20962L4.83076 5.75L5.75 4.83076Z"
      fill="currentColor"
    />
  </svg>
);

CloseFilled16.displayName = 'CloseFilled16';
const Memo = memo(CloseFilled16);
export default Memo;
