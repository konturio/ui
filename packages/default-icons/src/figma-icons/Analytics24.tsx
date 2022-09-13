import { SVGProps, memo } from 'react';

const Analytics24 = (props: SVGProps<SVGSVGElement>) => (
  <svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <path
      d="M11.164 4.19355C6.46396 4.19355 2.66396 7.99355 2.66396 12.6936C2.66396 17.3935 6.46396 21.1936 11.164 21.1936C15.864 21.1936 19.664 17.3935 19.664 12.6936H11.164V4.19355Z"
      stroke="currentColor"
      strokeWidth={1.3}
      strokeMiterlimit={10}
    />
    <path
      d="M14.3175 2.14378V9.60473H21.7785C21.7785 5.47926 18.443 2.14378 14.3175 2.14378Z"
      stroke="currentColor"
      strokeWidth={1.3}
      strokeMiterlimit={10}
    />
  </svg>
);

Analytics24.displayName = 'Analytics24';
const Memo = memo(Analytics24);
export default Memo;
