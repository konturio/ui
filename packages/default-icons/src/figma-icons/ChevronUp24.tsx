import { SVGProps, memo } from 'react';

const ChevronUp24 = (props: SVGProps<SVGSVGElement>) => (
  <svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M5.54039 15.4596C5.79423 15.7135 6.20578 15.7135 6.45963 15.4596L12 9.91923L17.5404 15.4596C17.7942 15.7135 18.2058 15.7135 18.4596 15.4596C18.7135 15.2058 18.7135 14.7942 18.4596 14.5404L12.4596 8.54037C12.2058 8.28653 11.7942 8.28653 11.5404 8.54037L5.54039 14.5404C5.28655 14.7942 5.28655 15.2058 5.54039 15.4596Z"
      fill="currentColor"
    />
  </svg>
);

ChevronUp24.displayName = 'ChevronUp24';
const Memo = memo(ChevronUp24);
export default Memo;
