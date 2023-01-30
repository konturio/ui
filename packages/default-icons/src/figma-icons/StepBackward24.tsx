import { SVGProps, memo } from 'react';

const StepBackward24 = (props: SVGProps<SVGSVGElement>) => (
  <svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M7 5.35C7.35898 5.35 7.65 5.64101 7.65 6V18C7.65 18.359 7.35898 18.65 7 18.65C6.64101 18.65 6.35 18.359 6.35 18V6C6.35 5.64101 6.64101 5.35 7 5.35ZM16.5404 5.54038C16.7942 5.28654 17.2058 5.28654 17.4596 5.54038C17.7135 5.79422 17.7135 6.20578 17.4596 6.45962L11.9192 12L17.4596 17.5404C17.7135 17.7942 17.7135 18.2058 17.4596 18.4596C17.2058 18.7135 16.7942 18.7135 16.5404 18.4596L10.5404 12.4596C10.4185 12.3377 10.35 12.1724 10.35 12C10.35 11.8276 10.4185 11.6623 10.5404 11.5404L16.5404 5.54038Z"
      fill="currentColor"
    />
  </svg>
);

StepBackward24.displayName = 'StepBackward24';
const Memo = memo(StepBackward24);
export default Memo;
