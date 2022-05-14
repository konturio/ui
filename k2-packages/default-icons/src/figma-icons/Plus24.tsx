import { SVGProps, memo } from 'react';

const Plus24 = (props: SVGProps<SVGSVGElement>) => (
  <svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <path d="M12 4L12 20" stroke="currentColor" strokeWidth={1.3} strokeLinecap="square" strokeLinejoin="bevel" />
    <path
      d="M3.99991 12L19.9999 12"
      stroke="currentColor"
      strokeWidth={1.3}
      strokeLinecap="square"
      strokeLinejoin="bevel"
    />
  </svg>
);

Plus24.displayName = 'Plus24';
const Memo = memo(Plus24);
export default Memo;
