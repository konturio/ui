import { SVGProps, memo } from 'react';

const Ruler24 = (props: SVGProps<SVGSVGElement>) => (
  <svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <path
      d="M7 10L8.58235 8.5M10.2216 13.196L11.804 11.696M13.5 16.5L15.0824 15M4 7.63636L7.63636 4L20 16.3636L16.3636 20L4 7.63636Z"
      stroke="currentColor"
      strokeWidth={1.3}
      strokeLinecap="square"
      strokeLinejoin="bevel"
    />
  </svg>
);

Ruler24.displayName = 'Ruler24';
const Memo = memo(Ruler24);
export default Memo;
