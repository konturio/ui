import { SVGProps, memo } from 'react';

const ChevronLeft24 = (props: SVGProps<SVGSVGElement>) => (
  <svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M15.4596 5.54039C15.7135 5.79423 15.7135 6.20578 15.4596 6.45963L9.91924 12L15.4596 17.5404C15.7135 17.7942 15.7135 18.2058 15.4596 18.4596C15.2058 18.7135 14.7942 18.7135 14.5404 18.4596L8.54038 12.4596C8.28654 12.2058 8.28654 11.7942 8.54038 11.5404L14.5404 5.54039C14.7942 5.28655 15.2058 5.28655 15.4596 5.54039Z"
      fill="currentColor"
    />
  </svg>
);

ChevronLeft24.displayName = 'ChevronLeft24';
const Memo = memo(ChevronLeft24);
export default Memo;
