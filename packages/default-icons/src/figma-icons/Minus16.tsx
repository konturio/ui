import { SVGProps, memo } from 'react';

const Minus16 = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} viewBox="0 0 16 16" fill="none" {...props}>
    <path
      d="M13 8C13 7.72386 12.7761 7.5 12.5 7.5L3.49999 7.5C3.22385 7.5 2.99999 7.72386 2.99999 8C2.99999 8.27615 3.22385 8.5 3.49999 8.5H12.5C12.7761 8.5 13 8.27614 13 8Z"
      fill="currentColor"
    />
  </svg>
);

Minus16.displayName = 'Minus16';
const Memo = memo(Minus16);
export default Memo;
