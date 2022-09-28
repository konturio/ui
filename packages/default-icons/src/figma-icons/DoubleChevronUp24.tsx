import { SVGProps, memo } from 'react';

const DoubleChevronUp24 = (props: SVGProps<SVGSVGElement>) => (
  <svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <path
      d="M16.5 11.5L11.5 6.5L6.5 11.5"
      stroke="currentColor"
      strokeWidth={1.3}
      strokeLinecap="square"
      strokeLinejoin="round"
    />
    <path
      d="M16.5 17.5L11.5 12.5L6.5 17.5"
      stroke="currentColor"
      strokeWidth={1.3}
      strokeLinecap="square"
      strokeLinejoin="round"
    />
  </svg>
);

DoubleChevronUp24.displayName = 'DoubleChevronUp24';
const Memo = memo(DoubleChevronUp24);
export default Memo;
