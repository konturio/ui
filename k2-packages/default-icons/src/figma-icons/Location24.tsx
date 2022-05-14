import { SVGProps, memo } from 'react';

const Location24 = (props: SVGProps<SVGSVGElement>) => (
  <svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <g clipPath="url(#clip0_105_20)">
      <path
        d="M16.7463 4.3856C17.8111 4.01705 18.8322 5.03811 18.4636 6.10291L14.5222 17.4903C14.0963 18.7206 12.3475 18.6948 11.9582 17.4524L10.8071 13.7786C10.5475 12.9504 9.89889 12.3017 9.07065 12.0422L5.39685 10.891C4.1545 10.5018 4.12864 8.7529 5.35893 8.32706L16.7463 4.3856Z"
        stroke="currentColor"
        strokeWidth={1.3}
        strokeLinecap="square"
        strokeLinejoin="bevel"
      />
    </g>
    <defs>
      <clipPath id="clip0_105_20">
        <path
          d="M0 12C0 5.37258 5.37258 0 12 0C18.6274 0 24 5.37258 24 12C24 18.6274 18.6274 24 12 24C5.37258 24 0 18.6274 0 12Z"
          fill="white"
        />
      </clipPath>
    </defs>
  </svg>
);

Location24.displayName = 'Location24';
const Memo = memo(Location24);
export default Memo;
