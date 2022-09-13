import { SVGProps, memo } from 'react';

const StepBackward24 = (props: SVGProps<SVGSVGElement>) => (
  <svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <path
      d="M17 6L11 12L17 18M7 6V18"
      stroke="currentColor"
      strokeWidth={1.3}
      strokeLinecap="square"
      strokeLinejoin="bevel"
    />
  </svg>
);

StepBackward24.displayName = 'StepBackward24';
const Memo = memo(StepBackward24);
export default Memo;
