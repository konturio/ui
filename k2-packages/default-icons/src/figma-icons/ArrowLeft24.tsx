import { SVGProps, memo } from 'react';

const ArrowLeft24 = (props: SVGProps<SVGSVGElement>) => (
  <svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <path
      d="M11.5001 7.23547L6.73558 12M6.73558 12L11.5001 16.7646M6.73558 12L17.2644 12"
      stroke="currentColor"
      strokeWidth={1.3}
      strokeLinecap="square"
      strokeLinejoin="bevel"
    />
  </svg>
);

ArrowLeft24.displayName = 'ArrowLeft24';
const Memo = memo(ArrowLeft24);
export default Memo;
