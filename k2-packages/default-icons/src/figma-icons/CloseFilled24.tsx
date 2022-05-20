import { SVGProps, memo } from 'react';

const CloseFilled24 = (props: SVGProps<SVGSVGElement>) => (
  <svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21ZM8.625 7.70576L9.08462 8.16538L12 11.0808L14.9154 8.16538L15.375 7.70576L16.2942 8.625L15.8346 9.08462L12.9192 12L15.8346 14.9154L16.2942 15.375L15.375 16.2942L14.9154 15.8346L12 12.9192L9.08462 15.8346L8.625 16.2942L7.70576 15.375L8.16538 14.9154L11.0808 12L8.16538 9.08462L7.70576 8.625L8.625 7.70576Z"
      fill="currentColor"
    />
  </svg>
);

CloseFilled24.displayName = 'CloseFilled24';
const Memo = memo(CloseFilled24);
export default Memo;
