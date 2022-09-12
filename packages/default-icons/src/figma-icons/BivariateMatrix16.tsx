import { SVGProps, memo } from 'react';

const BivariateMatrix16 = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} viewBox="0 0 16 16" fill="none" {...props}>
    <path
      d="M12.222 5.4669L9.68887 8L12.222 10.5331L14.7551 8L12.222 5.4669Z"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M8 9.68871L5.4669 12.2218L8 14.7549L10.5331 12.2218L8 9.68871Z"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M8 1.24506L5.4669 3.77817L8 6.31127L10.5331 3.77817L8 1.24506Z"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M3.77832 5.4669L1.24522 8L3.77832 10.5331L6.31142 8L3.77832 5.4669Z"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

BivariateMatrix16.displayName = 'BivariateMatrix16';
const Memo = memo(BivariateMatrix16);
export default Memo;
