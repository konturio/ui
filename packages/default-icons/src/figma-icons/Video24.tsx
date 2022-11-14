import { SVGProps, memo } from 'react';

const Video24 = (props: SVGProps<SVGSVGElement>) => (
  <svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <path
      d="M16 12L22 7V17L16 12ZM16 12V8C16 6.89543 15.1046 6 14 6H4C2.89543 6 2 6.89543 2 8V16C2 17.1046 2.89543 18 4 18H14C15.1046 18 16 17.1046 16 16V12Z"
      stroke="currentColor"
      strokeWidth={1.3}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

Video24.displayName = 'Video24';
const Memo = memo(Video24);
export default Memo;
