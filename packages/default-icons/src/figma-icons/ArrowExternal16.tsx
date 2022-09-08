import { SVGProps, memo } from 'react';

const ArrowExternal16 = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} viewBox="0 0 16 16" fill="none" {...props}>
    <path
      d="M4.83333 4.83334H11.1667M11.1667 4.83334V11.1667M11.1667 4.83334L4.83333 11.1667"
      stroke="currentColor"
      strokeLinecap="square"
      strokeLinejoin="bevel"
    />
  </svg>
);

ArrowExternal16.displayName = 'ArrowExternal16';
const Memo = memo(ArrowExternal16);
export default Memo;
