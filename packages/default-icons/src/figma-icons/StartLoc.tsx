import { SVGProps, memo } from 'react';

const StartLoc = (props: SVGProps<SVGSVGElement>) => (
  <svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <circle
      cx={12}
      cy={12}
      r={8}
      fill="currentColor"
      stroke="white"
      strokeWidth={1.3}
      strokeLinecap="square"
      strokeLinejoin="bevel"
    />
  </svg>
);

StartLoc.displayName = 'StartLoc';
const Memo = memo(StartLoc);
export default Memo;
