import { SVGProps, memo } from 'react';

const User24 = (props: SVGProps<SVGSVGElement>) => (
  <svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <mask
      id="mask0_1096_7342"
      style={{
        maskType: 'alpha',
      }}
      maskUnits="userSpaceOnUse"
      x={2}
      y={2}
      width={20}
      height={20}
    >
      <circle cx={12} cy={12} r={9} fill="black" stroke="#AFB4BA" strokeWidth={1.3} />
    </mask>
    <g mask="url(#mask0_1096_7342)">
      <circle cx={12} cy={10} r={3} stroke="currentColor" strokeWidth={1.3} />
      <circle cx={12} cy={12} r={9} stroke="currentColor" strokeWidth={1.3} />
      <circle cx={12} cy={20} r={7} stroke="currentColor" strokeWidth={1.3} />
    </g>
  </svg>
);

User24.displayName = 'User24';
const Memo = memo(User24);
export default Memo;
