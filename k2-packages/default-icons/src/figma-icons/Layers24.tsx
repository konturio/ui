import { SVGProps, memo } from 'react';

const Layers24 = (props: SVGProps<SVGSVGElement>) => (
  <svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <path
      d="M3.5 16L12 20L20.5 16"
      stroke="currentColor"
      strokeWidth={1.3}
      strokeLinecap="square"
      strokeLinejoin="bevel"
    />
    <path
      d="M3.5 12L12 16L20.5 12"
      stroke="currentColor"
      strokeWidth={1.3}
      strokeLinecap="square"
      strokeLinejoin="bevel"
    />
    <path
      d="M12 4L3.5 8L12 12L20.5 8L12 4Z"
      stroke="currentColor"
      strokeWidth={1.3}
      strokeLinecap="square"
      strokeLinejoin="bevel"
    />
  </svg>
);

Layers24.displayName = 'Layers24';
const Memo = memo(Layers24);
export default Memo;
