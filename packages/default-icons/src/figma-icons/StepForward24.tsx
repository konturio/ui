import { SVGProps, memo } from 'react';

const StepForward24 = (props: SVGProps<SVGSVGElement>) => (
  <svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <path
      d="M7 6L13 12L7 18M17 6V18"
      stroke="currentColor"
      strokeWidth={1.3}
      strokeLinecap="square"
      strokeLinejoin="bevel"
    />
  </svg>
);

StepForward24.displayName = 'StepForward24';
const Memo = memo(StepForward24);
export default Memo;
