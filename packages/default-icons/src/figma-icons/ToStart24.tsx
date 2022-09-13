import { SVGProps, memo } from 'react';

const ToStart24 = (props: SVGProps<SVGSVGElement>) => (
  <svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <path
      d="M14 6L8 12L14 18M4 6V18M21 6L15 12L21 18"
      stroke="currentColor"
      strokeWidth={1.3}
      strokeLinecap="square"
      strokeLinejoin="bevel"
    />
  </svg>
);

ToStart24.displayName = 'ToStart24';
const Memo = memo(ToStart24);
export default Memo;
