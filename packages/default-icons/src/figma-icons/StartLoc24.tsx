import { SVGProps, memo } from 'react';

const StartLoc24 = (props: SVGProps<SVGSVGElement>) => (
  <svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <circle
      cx={12}
      cy={12}
      r={8}
      fill="#0C9BED"
      stroke="white"
      strokeWidth={1.3}
      strokeLinecap="square"
      strokeLinejoin="bevel"
    />
  </svg>
);

StartLoc24.displayName = 'StartLoc24';
const Memo = memo(StartLoc24);
export default Memo;
