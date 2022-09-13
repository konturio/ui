import { SVGProps, memo } from 'react';

const Location24 = (props: SVGProps<SVGSVGElement>) => (
  <svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <g clipPath="url(#clip0_105_20)">
      <path
        d="M16.7463 4.38561C17.8111 4.01706 18.8322 5.03813 18.4636 6.10293L14.5222 17.4903C14.0963 18.7206 12.3475 18.6948 11.9582 17.4524L10.8071 13.7786C10.5475 12.9504 9.89889 12.3017 9.07065 12.0422L5.39685 10.8911C4.1545 10.5018 4.12864 8.75292 5.35893 8.32708L16.7463 4.38561Z"
        stroke="currentColor"
        strokeWidth={1.3}
        strokeLinecap="square"
        strokeLinejoin="bevel"
      />
    </g>
    <defs>
      <clipPath id="clip0_105_20">
        <rect width={24} height={24} rx={12} fill="white" />
      </clipPath>
    </defs>
  </svg>
);

Location24.displayName = 'Location24';
const Memo = memo(Location24);
export default Memo;
