import { SVGProps, memo } from 'react';

const BivariateMatrix24 = (props: SVGProps<SVGSVGElement>) => (
  <svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <path
      d="M18.3329 8.20035L14.5333 12L18.3329 15.7997L22.1326 12L18.3329 8.20035Z"
      stroke="currentColor"
      strokeWidth={1.3}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M12 14.5331L8.20035 18.3327L12 22.1324L15.7997 18.3327L12 14.5331Z"
      stroke="currentColor"
      strokeWidth={1.3}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M12 1.8676L8.20035 5.66726L12 9.46691L15.7997 5.66726L12 1.8676Z"
      stroke="currentColor"
      strokeWidth={1.3}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M5.66748 8.20035L1.86783 12L5.66748 15.7997L9.46714 12L5.66748 8.20035Z"
      stroke="currentColor"
      strokeWidth={1.3}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

BivariateMatrix24.displayName = 'BivariateMatrix24';
const Memo = memo(BivariateMatrix24);
export default Memo;
