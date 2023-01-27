import { SVGProps, memo } from 'react';

const ArrowRight24 = (props: SVGProps<SVGSVGElement>) => (
  <svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M11.5404 4.54039C11.7942 4.28655 12.2058 4.28655 12.4596 4.54039L19.4596 11.5404C19.7135 11.7942 19.7135 12.2058 19.4596 12.4596L12.4596 19.4596C12.2058 19.7135 11.7942 19.7135 11.5404 19.4596C11.2865 19.2058 11.2865 18.7942 11.5404 18.5404L17.4308 12.65H5.00001C4.64102 12.65 4.35001 12.359 4.35001 12C4.35001 11.641 4.64102 11.35 5.00001 11.35H17.4308L11.5404 5.45963C11.2865 5.20578 11.2865 4.79423 11.5404 4.54039Z"
      fill="currentColor"
    />
  </svg>
);

ArrowRight24.displayName = 'ArrowRight24';
const Memo = memo(ArrowRight24);
export default Memo;
