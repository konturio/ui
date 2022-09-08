import { SVGProps, memo } from 'react';

const PlaySolid24 = (props: SVGProps<SVGSVGElement>) => (
  <svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M4.5 5.65268C4.5 4.22655 6.029 3.3225 7.2786 4.00978L18.8192 10.3571C20.1144 11.0695 20.1144 12.9305 18.8192 13.6429L7.2786 19.9902C6.029 20.6775 4.5 19.7734 4.5 18.3473V5.65268Z"
      fill="currentColor"
    />
  </svg>
);

PlaySolid24.displayName = 'PlaySolid24';
const Memo = memo(PlaySolid24);
export default Memo;
