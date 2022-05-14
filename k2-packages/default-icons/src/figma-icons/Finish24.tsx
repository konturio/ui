import { SVGProps, memo } from 'react';

const Finish24 = (props: SVGProps<SVGSVGElement>) => (
  <svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <path
      d="M6 12.3333L10.4545 17L20 7"
      stroke="currentColor"
      strokeWidth={1.3}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

Finish24.displayName = 'Finish24';
const Memo = memo(Finish24);
export default Memo;
