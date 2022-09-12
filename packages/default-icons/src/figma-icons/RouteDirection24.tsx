import { SVGProps, memo } from 'react';

const RouteDirection24 = (props: SVGProps<SVGSVGElement>) => (
  <svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <ellipse cx={5.53333} cy={4.5} rx={2.53333} ry={2.5} fill="currentColor" />
    <ellipse cx={18.2} cy={19.5} rx={2.53333} ry={2.5} fill="currentColor" />
    <path
      d="M10 4.5C10.4872 4.5 10.7949 4.5 13.2308 4.5C15.6667 4.5 17.5667 5.75 17.5667 8.25C17.5667 10.75 15.6667 12 13.2308 12C10.7949 12 8.7 12 8.7 12C6.16666 12 4.26666 13.25 4.26666 15.75C4.26666 18.25 6.16666 19.5 8.7 19.5H13.5M13.5 19.5L10.5769 16.6429M13.5 19.5L10.5769 22.3571"
      stroke="currentColor"
      strokeWidth={1.3}
    />
  </svg>
);

RouteDirection24.displayName = 'RouteDirection24';
const Memo = memo(RouteDirection24);
export default Memo;
