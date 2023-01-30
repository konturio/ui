import { SVGProps, memo } from 'react';

const DoubleChevronLeft24 = (props: SVGProps<SVGSVGElement>) => (
  <svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M11.4596 6.54039C11.7135 6.79423 11.7135 7.20578 11.4596 7.45963L6.91924 12L11.4596 16.5404C11.7135 16.7942 11.7135 17.2058 11.4596 17.4596C11.2058 17.7135 10.7942 17.7135 10.5404 17.4596L5.54038 12.4596C5.41848 12.3377 5.35 12.1724 5.35 12C5.35 11.8276 5.41848 11.6623 5.54038 11.5404L10.5404 6.54039C10.7942 6.28655 11.2058 6.28655 11.4596 6.54039ZM17.4596 6.54039C17.7135 6.79423 17.7135 7.20578 17.4596 7.45963L12.9192 12L17.4596 16.5404C17.7135 16.7942 17.7135 17.2058 17.4596 17.4596C17.2058 17.7135 16.7942 17.7135 16.5404 17.4596L11.5404 12.4596C11.2865 12.2058 11.2865 11.7942 11.5404 11.5404L16.5404 6.54039C16.7942 6.28655 17.2058 6.28655 17.4596 6.54039Z"
      fill="currentColor"
    />
  </svg>
);

DoubleChevronLeft24.displayName = 'DoubleChevronLeft24';
const Memo = memo(DoubleChevronLeft24);
export default Memo;
