import { SVGProps, memo } from 'react';

const DoubleChevronDown24 = (props: SVGProps<SVGSVGElement>) => (
  <svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <path
      d="M6.5 12.5L11.5 17.5L16.5 12.5"
      stroke="currentColor"
      strokeWidth={1.3}
      strokeLinecap="square"
      strokeLinejoin="round"
    />
    <path
      d="M6.5 6.49999L11.5 11.5L16.5 6.49999"
      stroke="currentColor"
      strokeWidth={1.3}
      strokeLinecap="square"
      strokeLinejoin="round"
    />
  </svg>
);

DoubleChevronDown24.displayName = 'DoubleChevronDown24';
const Memo = memo(DoubleChevronDown24);
export default Memo;
