import { SVGProps, memo } from 'react';

const ChevronRight24 = (props: SVGProps<SVGSVGElement>) => (
  <svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M8.54038 5.54039C8.79422 5.28655 9.20578 5.28655 9.45962 5.54039L15.4596 11.5404C15.7135 11.7942 15.7135 12.2058 15.4596 12.4596L9.45962 18.4596C9.20578 18.7135 8.79422 18.7135 8.54038 18.4596C8.28654 18.2058 8.28654 17.7942 8.54038 17.5404L14.0808 12L8.54038 6.45963C8.28654 6.20578 8.28654 5.79423 8.54038 5.54039Z"
      fill="currentColor"
    />
  </svg>
);

ChevronRight24.displayName = 'ChevronRight24';
const Memo = memo(ChevronRight24);
export default Memo;
