import { SVGProps, memo } from 'react';

const ArrowLeft24 = (props: SVGProps<SVGSVGElement>) => (
  <svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12.4596 4.54039C12.7135 4.79423 12.7135 5.20578 12.4596 5.45963L6.56925 11.35H19C19.359 11.35 19.65 11.641 19.65 12C19.65 12.359 19.359 12.65 19 12.65H6.56925L12.4596 18.5404C12.7135 18.7942 12.7135 19.2058 12.4596 19.4596C12.2058 19.7135 11.7942 19.7135 11.5404 19.4596L4.54039 12.4596C4.28655 12.2058 4.28655 11.7942 4.54039 11.5404L11.5404 4.54039C11.7942 4.28655 12.2058 4.28655 12.4596 4.54039Z"
      fill="currentColor"
    />
  </svg>
);

ArrowLeft24.displayName = 'ArrowLeft24';
const Memo = memo(ArrowLeft24);
export default Memo;
