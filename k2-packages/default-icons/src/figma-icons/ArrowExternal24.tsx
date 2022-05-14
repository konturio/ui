import { SVGProps, memo } from 'react';

const ArrowExternal24 = (props: SVGProps<SVGSVGElement>) => (
  <svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <path
      d="M7.25 7.25H16.75M16.75 7.25V16.75M16.75 7.25L7.25 16.75"
      stroke="currentColor"
      strokeWidth={1.3}
      strokeLinecap="square"
      strokeLinejoin="bevel"
    />
  </svg>
);

ArrowExternal24.displayName = 'ArrowExternal24';
const Memo = memo(ArrowExternal24);
export default Memo;
