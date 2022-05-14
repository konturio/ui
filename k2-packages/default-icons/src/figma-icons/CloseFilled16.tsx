import { SVGProps, memo } from 'react';

const CloseFilled16 = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} viewBox="0 0 16 16" fill="none" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M8 16C12.4183 16 16 12.4183 16 8C16 3.58172 12.4183 0 8 0C3.58172 0 0 3.58172 0 8C0 12.4183 3.58172 16 8 16ZM5 4.08076L5.45962 4.54038L8 7.08076L10.5404 4.54038L11 4.08076L11.9192 5L11.4596 5.45962L8.91924 8L11.4596 10.5404L11.9192 11L11 11.9192L10.5404 11.4596L8 8.91924L5.45962 11.4596L5 11.9192L4.08076 11L4.54038 10.5404L7.08076 8L4.54038 5.45962L4.08076 5L5 4.08076Z"
      fill="currentColor"
    />
  </svg>
);

CloseFilled16.displayName = 'CloseFilled16';
const Memo = memo(CloseFilled16);
export default Memo;
