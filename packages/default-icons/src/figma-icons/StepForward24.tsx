import { SVGProps, memo } from 'react';

const StepForward24 = (props: SVGProps<SVGSVGElement>) => (
  <svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M6.54038 5.54038C6.79422 5.28654 7.20578 5.28654 7.45962 5.54038L13.4596 11.5404C13.5815 11.6623 13.65 11.8276 13.65 12C13.65 12.1724 13.5815 12.3377 13.4596 12.4596L7.45962 18.4596C7.20578 18.7135 6.79422 18.7135 6.54038 18.4596C6.28654 18.2058 6.28654 17.7942 6.54038 17.5404L12.0808 12L6.54038 6.45962C6.28654 6.20578 6.28654 5.79422 6.54038 5.54038ZM17 18.65C16.641 18.65 16.35 18.359 16.35 18V6C16.35 5.64101 16.641 5.35 17 5.35C17.359 5.35 17.65 5.64101 17.65 6V18C17.65 18.359 17.359 18.65 17 18.65Z"
      fill="currentColor"
    />
  </svg>
);

StepForward24.displayName = 'StepForward24';
const Memo = memo(StepForward24);
export default Memo;
