import { SVGProps, memo } from 'react';

const CloseFilled24 = (props: SVGProps<SVGSVGElement>) => (
  <svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM9 8.08076L9.45962 8.54038L12 11.0808L14.5404 8.54038L15 8.08076L15.9192 9L15.4596 9.45962L12.9192 12L15.4596 14.5404L15.9192 15L15 15.9192L14.5404 15.4596L12 12.9192L9.45962 15.4596L9 15.9192L8.08076 15L8.54038 14.5404L11.0808 12L8.54038 9.45962L8.08076 9L9 8.08076Z"
      fill="currentColor"
    />
  </svg>
);

CloseFilled24.displayName = 'CloseFilled24';
const Memo = memo(CloseFilled24);
export default Memo;
