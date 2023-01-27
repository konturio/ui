import { SVGProps, memo } from 'react';

const ChevronDown24 = (props: SVGProps<SVGSVGElement>) => (
  <svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M5.54039 8.54039C5.79423 8.28655 6.20578 8.28655 6.45963 8.54039L12 14.0808L17.5404 8.54039C17.7942 8.28655 18.2058 8.28655 18.4596 8.54039C18.7135 8.79423 18.7135 9.20578 18.4596 9.45963L12.4596 15.4596C12.2058 15.7135 11.7942 15.7135 11.5404 15.4596L5.54039 9.45963C5.28655 9.20578 5.28655 8.79423 5.54039 8.54039Z"
      fill="currentColor"
    />
  </svg>
);

ChevronDown24.displayName = 'ChevronDown24';
const Memo = memo(ChevronDown24);
export default Memo;
